import {useSession, getSession} from "next-auth/react"
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import { generateCompanyUrl } from "../../scriptcompany.js";



function companyprofile() {


  const {data: session} = useSession()

  
  const [companyData, setCompanyData] = useState({
    company_name: "",
    company_url: "",
    companyDescription: "",
    logo: "",
    location: "",
    city: "",
    empcount: "",
    companyUrl: "",
    user_id: "",
  })



    useEffect(() => {
      fetch("/api/company", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((jsonResponse) => setCompanyData(jsonResponse));
  
    }, [])



  
  const [fields, setFields] = useState({
    companyName: "",
    company_url: "",
    companyDescription: "",
    logo: "",
    location: "",
    city: "",
    empcount: "",
    companyUrl: "",
    user_id: session.user.id,
  });

  const handleChange = ({ target }) => {
    setFields({ ...fields, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyUrl = generateCompanyUrl(companyName);
    fetch("/api/company", {
      method: "POST",
      body: JSON.stringify({
        company_name: companyName,
        company_url: company_url,
        company_description: companyDescription,
        logo: logo,
        location: location,
        city: city,
        empcount: empcount,
        companyUrl: companyUrl,
        user_id: session.user.id
      }),
    }).then(alert("Thank you for creating your company profile!") ? "" : location.reload() )
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  const {
    companyName,
    company_url,
    companyDescription,
    logo,
    location,
    city,
    empcount,
  } = fields;

  const [companyLogo, setCompanyLogo] = useState();

  function returnData() {
    for (let key in companyData) {
      if (companyData.hasOwnProperty(key)) {
        let innerObject = companyData[key]
        if (innerObject.hasOwnProperty('user_id') && innerObject.user_id === session.user.id) {
          // innerObject has a user_id key with a value of session.user.id
          console.log(innerObject)
          return (
          <div className="bg-gray-100 pb-10 pt-20 ">
          <main className="">
          <section class="relative block h-700-px">
            <div class="absolute top-0 w-full h-full bg-center bg-cover"></div>
          </section>
          <section class="relative mx-40 mt-[400px]">
            <div class="container mx-auto  px-4">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
                <div class="mx-10 lg:mx-0">
                  <div class="flex flex-wrap justify-center">
                    <div class=" lg:w-3/12  lg:order-2 flex justify-center">
                      <div class="relative">
                        <img class=" p-10 lg:p-10 border-2 border-gray-100 bg-white rounded-full  -mt-16 " src={`/images/${innerObject.logo}`}/>
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div class="py-6 px-3 lg:mt-32 sm:mt-0"></div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-1">
                      <div class="flex justify-center py-4 lg:pt-4 pt-8">
                        <div class="mr-4 p-3 text-center">
                          <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {/* {jobs.length}  */} 3
                          </span>
                          <span class="text-sm text-blueGray-400">
                            New Open Roles
                          </span>
                        </div>
                        <div class="mr-4 p-3 text-center">
                          <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                           {innerObject.empcount}
                          </span>
                          <span class="text-sm text-blueGray-400">Employees</span>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                  <div class="px-0 lg:mx-0 text-center mt-4">
                    <h3 class="text-xl lg:text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      {innerObject.company_name}
                    </h3>
  
                    <div class="text-sm leading-normal  mb-2 text-blueGray-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {innerObject.city} {innerObject.location}
                    </div>
  
                    <p className="text-md lg:text-xl lg:px-10 mx-auto mt-10 mb-8 ">
                      {" "}
                      {innerObject.mission
                        ? innerObject.mission
                        : innerObject.company_description}
                    </p>
                    <div class="mb-2 text-blueGray-600 mt-10">
                      <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      <a href={innerObject.company_url} className="text-sky-400">
                        {innerObject.company_url}
                      </a>
                    </div>
                    <div class="mb-2 text-blueGray-600">
                      <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    </div>
                  </div>
                  {/* <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
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
                  <img className="z-1 mt-6 ml-4 w-12 h-12 lg:w-20 lg:h-20 rounded-full border border-[#17614A] border-2 " src={`/images/${job?.logo}`} ></img>
                    <li className="w-full ml-2 my-4 box-border ">
                     
                      
                      <p className=" ml-2 mr-2 lg:mr-10 -mb-2 z-1 text-md lg:text-2xl text-[#17614A] z-0 font-bold pb-2 pr-20 ">{job?.job_position}</p>
                      <span className=" text-xs ml-2">{getDate(job?.postedat)}</span>
  
                      <p className="float-right mr-4 text-[10px] -mt-6 bold  text-sky-200 lg:text-xl">{job?.job_type} | {job?.location}</p>
                        
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
                      {/* </div>
                    </div>
                  </div> */} 
                </div>
              </div>
            </div>
          </section>
        </main>
        </div>
          )
        } 
        else {
          return false
        }
      }
    }
  }

  return (
    <div className="">
        { returnData() ? 
            returnData()
        :
        <div>
      <NextSeo
        title="Create a Company Profile | eCommerce Jobs"
        description="Add Your Company Name, Logo, Description, and Job Vacancies "
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "SiteName",
        }}
        twitter={{
          site: "@ecomjobs_",
          cardType: "summary",
          image: "/logo.png",
        }}
      />

<div class=" my-8 mb-20 text-center">
<h2 class="text-2xl text-[#17614A] md:text-4xl font-bold block md:inline text-blue-brand">Build a profile . {companyData.companyName}</h2>
<h2 class="text-xl md:text-4xl block md:inline font-normal md:font-light">Host all your companies jobs under one branded page.</h2>
</div>
      <form onSubmit={handleSubmit} className=" ">
        <div className="mx-6 my-10 flex flex-col ">

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-medium text-gray-600">
                    {" "}
                    Company Name{" "}
                  </label>
                  <div class="relative mt-2">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      required
                      name="companyName"
                      placeholder="Space X"
                      value={companyName}
                      onChange={handleChange}
                      class="block w-full pl-10 pr-4 py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    {" "}
                    Company URL:{" "}
                  </label>
                  <div class="relative flex mt-2">
                    

                    <input
                      type="url"
                      required
                      name="company_url"
                      placeholder="https://www.spacex.com"
                      value={company_url}
                      onChange={handleChange}
                      class="flex-1 border block w-full min-w-0 px-4 py-3 placeholder-gray-500 
                    border-gray-300 border-2 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div class="sm:flex sm:items-center sm:space-x-8">
                  <label for="" class="block text-xs font-bold text-gray-900">
                    {" "}
                    Company logo: <br></br>(Please upload a photo less <br></br>than 100KB. <br></br> To compress your image, <br></br> visit <a href="https://tinypng.com/"> https://tinypng.com/ </a>):{" "}
                  </label>
                  <div class="relative mt-2 sm:mt-0 sm:flex-1">
                    <input
                      type="file"
                      name="logo"
                      accept="image/*"
                      required
                      onChange={(e) => {
                        if (e?.target?.files?.[0]) {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setCompanyLogo(reader.result);
                          };
                          reader.readAsDataURL(file);
                          handleChange;
                        }
                      }}
                      class="block w-full px-4 border py-3 placeholder-gray-500 border border-gray-300 
                     rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />

                    {companyLogo && (
                      <img src={companyLogo} className="mt-4 object-cover" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    Country:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      required
                      name="location"
                      placeholder="USA"
                      value={location}
                      onChange={handleChange}
                      class="block w-full pr-14 pl-2 py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    City:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      required
                      name="city"
                      placeholder="New York"
                      value={city}
                      onChange={handleChange}
                      class="block w-full pr-14 pl-2  py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    # of Employees
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      required
                      name="empcount"
                      placeholder="1000"
                      value={empcount}
                      onChange={handleChange}
                      class="block w-full pr-14  pl-2  py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-medium text-black">
                    Company Description{" "}
                  </label>
                  <div class="relative mt-2">
                    <div class="absolute top-0 left-0 flex items-center pt-4 pl-4 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>

                    <textarea
                      name="companyDescription"
                      id=""
                      placeholder="Describe your company..."
                      onChange={handleChange}
                      value={companyDescription}
                      rows="3"
                      class="border-2 block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

  

          <button
            href="#"
            type="submit"
            class="flex relative items-center justify-center  sm:w-auto mx-96 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg  hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
           Save
          </button>
        </div>
      </form>
      </div>
}

{/*       
      <div className="hidden lg:block bg-gray-100 pb-10">
        <div className="text-center mt-10 pt-10 mx-48">
          <div className=" mx-28">
            <ul className="rounded-lg text-left  pl-10 py-4 flex  bg-white hover:bg-gray-100  bg-white  shadow-lg">
              <img
                className="mx-auto ml-10 border-2 rounded-full border-[#17614A] my-auto h-14 w-14 "
                src={companyLogo ? `${companyLogo}` : "/mock.png"}
                name="image"
              ></img>
              <li className="w-full ml-2 mt-2 mb-4 box-border ">
                <p className=" ml-2 mt-2 z-1 text-sm text-[#17614A] pb-1">
                  {companyName ? `${companyName}` : "Company"}
                </p>
                <p className=" ml-2 -mb-2 z-1 text-xl text-[#17614A] z-0 font-bold pb-2 pr-20">
                  {jobPosition ? `${jobPosition}` : "Position"}
                </p>
                <p className="float-right mr-4 text-[8px] -mt-10 bold font-bold lg:text-sm">
                  {jobType ? `${jobType}` : "Remote"} |{" "}
                  {location ? `${location}` : "USA"}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <br></br>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />

        <main class="profile-page">
          <section class="relative block  h-500-px">
            <div class="absolute top-0 w-full h-full bg-center bg-cover"></div>
          </section>
          <section class="relative">
            <div class="container mx-auto  px-4">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
                <div>
                  <div class="mt-4 ml-6">
                    <img
                      src={companyLogo ? `${companyLogo}` : "/logo.png"}
                      alt="..."
                      class="my-10 border-4 h-16 max-w-120-px"
                    />

                    <a
                      target="_blank"
                      href={applicationUrl}
                      class="flex float-right  justify-center w-auto text-xs px-6 mr-4 lg:text-lg  -mt-20 rounded-full lg:px-10   lg:mr-10  py-4  text-base  font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                      Apply Now
                    </a>

                    <h2 class="text-3xl my-4 text-black font-bold">
                      {companyName ? `${companyName} ` : "Company "}
                    </h2>

                    <div class="text-sm leading-normal  text-blueGray-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {city ? `${city}` : "Los Angeles"},{" "}
                      {location ? `${location}` : "USA"}
                    </div>

                    <div class=" text-blueGray-600 my-2">
                      <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      <a href={companyUrl} className="text-sky-400">
                        {companyUrl
                          ? `${companyUrl}`
                          : "https://www.ecom-jobs.com"}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="sm:text-2xl lg:text-5xl my-4 mx-auto font-bold underline ">
                    {jobPosition ? `${jobPosition}` : "Position"}
                  </h2>
                  <h3 className="my-1 text-md lg:text-xl text-[#6879a5]">
                    {" "}
                    {jobCategory ? `${jobCategory}` : "Marketing"} •{" "}
                    {jobType ? `${jobType}` : "Remote"} • 1s ago
                  </h3>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p>
                        {companyDescription
                          ? `${companyDescription} `
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                      </p>
                      <br></br>
                      <br></br>

                      <p>
                        {jobDescription
                          ? `${jobDescription} `
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                      </p>
                      <br></br>
                      <br></br>

                      <p>
                        {jobRequirements
                          ? `${jobRequirements} `
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                      </p>
                      <br></br>
                      <br></br>

                      <a
                        target="_blank"
                        href={applicationUrl}
                        class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg  hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div> */}

  
      {/* <Preview /> */}
    </div>
  );
}

export default companyprofile;


export async function getServerSideProps(context) {
  return {
      props: {
          session: await getSession(context)
      },
  }
}


