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
        
          <div>
            
        
          
         
          <div class="mt-4 ml-6">

          <img src={`.${jobData.logo}`} alt="..." class="my-10  max-w-120-px"/>
          
          <a
                          target="_blank"
                          href={jobData.application_url}
                            class="flex float-right  justify-center sm:w-auto text-sm px-4 lg:text-lg -mt-32 rounded-full  mr-10 lg:px-20 py-6 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                           Apply Now
                        </a>
                   
       

          <h2 class="text-3xl my-4 text-black font-bold">{jobData.company_name}</h2>
       

            <div class="text-sm leading-normal  text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
             {jobData.city} {jobData.location}
            </div>
            

 
            <div class=" text-blueGray-600 my-2">
              <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i><a href={jobData.company_url} className="text-sky-400">{jobData.company_url}</a>
            </div>
          
            </div>
          </div>
          <div className="text-center">
          <h2 className="sm:text-2xl lg:text-5xl my-4 mx-auto font-bold underline ">{jobData.job_position}</h2>
          <h3 className="my-1 text-md lg:text-xl text-[#6879a5]">  {jobData.job_category}  •   {jobData.job_type} • {getDate()}</h3>
          </div>
          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
         
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
              

              <p>{jobData.company_description}</p>
            <br></br>
            <br></br>
           
            <p>{jobData.job_description}</p>
            <br></br>
            <br></br>
           
            <p>{jobData.job_requirements}</p>
            <br></br>
            <br></br>
            

<a
     target="_blank"
    href={jobData.application_url}
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
    </div>
  );
}

export default Company;
