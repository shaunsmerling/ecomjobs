import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { api_url } from "../../../config"

export async function getServerSideProps(context) {

  const { params } = context
  const { companyId } = params

  const [companyRes, jobsRes] = await Promise.all([
    fetch(`${api_url}/api/company?id=${companyId}`), 
    fetch(`${api_url}/api/jobs?companyUrl=${companyId}`)
  ]);
  const [company, jobs] = await Promise.all([
    companyRes.json(), 
    jobsRes.json()
  ]);
  return { props: { company, jobs } };
}

// Previously, our domain had the company ID
// Therefore, when sourced company info we just took the domain company ID
// Then, we looked for jobs with that company ID to then source that
// Now, our domain has companyURL 
// So if we want to source by companyUrl, the jobs under x company need to have the companyUrl in their db 
  

function Company({ company, jobs }) {




  // const [company, setCompanyData] = useState({
  //   company_name: "",
  //   company_url: "",
  //   company_description: "",
  //   city: "",
  //   logo: "",
  //   empcount: "",
  //   location: "",
  // });

  // const [jobs, setJobs] = useState([])
  


  // useEffect(() => {
  //   if (companyId) {
  //     fetch("/api/company?id=" + companyId, {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((jsonResponse) => setCompanyData(jsonResponse));
  //   }
  // }, [companyId]);

  // useEffect(() => {
  //   if (companyId) {
  //     fetch("/api/jobs?companyId=" + companyId, {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((jsonResponse) => setJobs(jsonResponse));
  //   }
  // }, [companyId]);



  function getDate(x) {
    let date_1 = new Date(x);
    let date_2 = new Date();

    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil((difference / (1000 * 3600 * 24)) * -1);

    if (TotalDays === 0) {
      return "Today";
    } else if (TotalDays === 1) {
      return `${TotalDays} day ago`;
    } else if (TotalDays > 1 && TotalDays < 30) {
      return `${TotalDays} days ago`;
    } else if (TotalDays >= 30 && TotalDays <= 60) {
      return "1 month ago";
    } else if (TotalDays >= 60 && TotalDays <= 90) {
      return "2 months ago";
    } else if (TotalDays >= 90 && TotalDays <= 120) {
      return "3 months ago";
    }
  }

  const logoString = company.logo

function isImageFile(filename) {
  return /\.(png|jpe?g)$/i.test(filename);
}


  const logoImage = isImageFile(logoString) ? 
  `../images/${logoString}` : 
  `${logoString}`;

  return (
    <div className="bg-d2c font-Montserrant ">
      <NextSeo
      title={`${company.company_name} | eCommerce Jobs `}
      description={`${company.company_name} | eCommerce Jobs `}
    />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <main class="profile-page">
      
        <section class="relative">
          <div class="container mx-auto  px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-20">
              <div class="mx-10 lg:mx-0">
                <div class="flex flex-wrap justify-center">
                  <div class=" lg:w-3/12  lg:order-2 flex justify-center">
                    <div class="relative">
                      <img loading="lazy" class=" p-10  border-2 border-gray-100 bg-white rounded-md h-44  -mt-16 " src={logoImage}/>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 lg:mt-32 sm:mt-0"></div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {jobs.length} 
                        </span>
                        <span class="text-sm text-blueGray-400">
                          New Open Roles
                        </span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                         {company.empcount}
                        </span>
                        <span class="text-sm text-blueGray-400">Employees</span>
                      </div>
                   
                    </div>
                  </div>
                </div>
               
                <div class="px-0 lg:mx-0 text-center  ">
                  <h3 class="text-xl lg:text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {company.company_name}
                  </h3>

                  <div class="text-sm leading-normal  mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {company.city} {company.location}
                  </div>
                  <div class="mb-2 text-blueGray-600 ">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <a href={company.company_url} className="text-sky-400">
                      {company.company_url}
                    </a>
                  </div>
                
                  <p className="text-md lg:text-xl lg:px-10 mx-auto mt-10 mb-8 ">
                    <p className="mb-6 font-bold underline"> Mission Statement:</p>
                    {" "}
                    {company.mission
                      ? company.mission
                      : company.company_description}
                  </p>
                  <p className="text-md lg:text-xl lg:px-10 mx-auto mt-10 mb-8 ">
                  <p className="mb-6 font-bold underline"> Company Description:</p>
                    {" "}
                    {company.company_description
                      ? company.company_description
                      : ''}
                  </p>
                 
                  {/* <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  </div> */}
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <div>
                        <p className="hidden lg:block text-center mb-4 text-3xl  ">
                          Available Jobs
                        </p>
                        
                      </div>
                      {jobs?.map((job, index) => (



             
                  <div className={`flex flex-col lg:mx-20 pb-2`}>
                  <a href={`/job/${job?.jobUrl}`} target="_blank">
                <ul className={`  -mx-10 lg:-mx-0 text-left mt-4  border-4 rounded-lg flex hover:bg-gray-100   hover:underline`}>
                <img loading="lazy" className="z-1 mt-2 ml-4 w-12 h-12 lg:w-20 lg:h-20 rounded-full border border-2 " src={`https://ecomportal-images.storage.googleapis.com/images/${job?.logo}`} ></img>
                  <li className="w-full ml-2 my-4 box-border ">
                   
                    <div className="mt-2 mx-4">
                    <p className=" ml-2 mr-2 lg:mr-10  z-1 text-md lg:text-2xl text-black z-0 font-bold pb-2 pr-20 ">{job?.job_position}</p>
                    </div>
                    <span className=" text-xs ml-6">{getDate(job?.postedat)}</span>

                    <p className="float-right mr-4 text-[10px] font-bold -mt-6 bold  text-black lg:text-md">{job?.job_type && job?.location ? job?.job_type + " | " + job?.location : ""}</p>
                      
                  </li>
                </ul>
                </a>
            </div>
           
                      ))}
                     { /*<a target="_blank">
                        <div className={`flex flex-col my-10 lg:mx-20 pb-2 `}>
                          <ul
                            className={`   rounded-lg text-left mb-2  flex  flex-col `}
                          >
                            {jobs?.map((job, index) => (
                              <li className="w-full ml-2 mt-2 mb-4 box-border " key={index}>
                                <img
                                  className="z-1 mt-4 ml-4 w-20 h-20 rounded-full border border-[#17614A] border-2 "
                                  src={`/images/${job?.logo}`}
                                ></img>
                            
                                <div>
                                  <p className=" ml-2 mt-2 z-1 text-xl text-[#17614A] pb-1 hover:no-underline">
                                    {job?.company_name}
                                  </p>

                                  <p className=" ml-2 -mb-2 z-1 text-2xl text-[#17614A] z-0 font-bold pb-2 pr-20 ">
                                    {job?.job_position}
                                  </p>
                  
                                  <p className="float-right mr-4 text-[12px] -mt-10 bold  text-sky-200 lg:text-xl">
                                    {job?.job_type} | {job?.location}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Company;
