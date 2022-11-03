import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Helmet} from "react-helmet";
import Link from "next/link";


function Company() {
  const [jobData, setJobData] = useState({
    company_name: "",
    company_url: "",
    company_description: "",
    city: "",
    postedat: "",
    job_position: "",
    job_category: "",
    logo: "",
    job_type: "",
    mission: "",
    location: "",
  });

  const router = useRouter();
  const { jobId } = router.query;

  useEffect( () => {
      if (jobId) {
       fetch("/api/jobs?id=" + jobId, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((jsonResponse) => setJobData(jsonResponse));
}}, [jobId]);

  let data =   
            {
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": `${jobData.job_position}`,
            "description": `${jobData.job_description}`,
            "hiringOrganization": {
                "@type": "Organization",
                "name": `${jobData.company_name}`,
                "sameAs": `${jobData.company_url}`,
            },
            "industry": `${jobData.job_category}`,
            "employmentType": "FULL_TIME",
            "datePosted": `${jobData.postedat}`,
            "validThrough": "",
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "",
                    "addressLocality": "",
                    "postalCode": "",
                    "addressCountry": `${jobData.location}`
                }
            },
            "responsibilities": `${jobData.job_requirements}`,
            }


  function getDate() {
    let date_1 = new Date(jobData.postedat);
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

  
  

  return (
    
    <div className="bg-gray-100 pb-10">
      <Helmet>
      (<script className='structured-data-list' type="application/ld+json">{JSON.stringify(data)}</script>)
      </Helmet> 
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

<main class="profile-page">
  <section class="relative block  h-500-px">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" >
      
    </div>
    
  </section>
  <section class="relative">
    <div class="container mx-auto  px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
        <div class="">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12  lg:order-2 flex justify-center">
              <div class="relative">
                <img src={`.${jobData.logo}`}  class="  p-10 border-2 border-gray-100 bg-white rounded-full  -mt-16 "/>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6 px-3 mt-32 sm:mt-0">
                
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">2</span><span class="text-sm text-blueGray-400">New Open Roles</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">1000+</span><span class="text-sm text-blueGray-400">Employees</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">5</span><span class="text-sm text-blueGray-400">Years Since Founded</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            {jobData.company_name}
            </h3>
            
       

            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {jobData.city} {jobData.location}
            </div>

       <p className="text-xl px-10 mx-auto mt-10 mb-8 ">      {jobData.mission ? jobData.mission : jobData.company_description }</p>
            <div class="mb-2 text-blueGray-600 mt-10">
              <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i><a href={jobData.company_url} className="text-sky-400">{jobData.company_url}</a>
            </div>
            <div class="mb-2 text-blueGray-600">
              <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>{jobData.job_type}
            </div>
          </div>
          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
              
      <div >

<p  className="hidden lg:block text-center text-3xl  ">Available Jobs</p>

</div>

               
              <Link href="/job/634f75a39f621dc748de274d">
      <div className={`flex flex-col mx-1 my-10 lg:mx-20 pb-2 `}>
        <ul className={`  rounded-lg text-left mb-2  flex  bg-white hover:bg-gray-100  bg-white  shadow-lg `}>
        <img className="z-1 mt-4 ml-4 w-14 h-14 rounded-full border border-[#17614A] border-2 "  src={`.${jobData.logo}`}  ></img>
          <li className="w-full ml-2 mt-2 mb-4 box-border ">
            <p className=" ml-2 mt-2 z-1 text-sm text-[#17614A] pb-1">
            {jobData.company_name}
             
            </p>
            
            <p className=" ml-2 -mb-2 z-1 text-xl text-[#17614A] z-0 font-bold pb-2 pr-20">{jobData.job_position}</p>

            
              
          </li>
        </ul>
     </div>
     </Link>
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
