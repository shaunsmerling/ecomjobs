import EmailCompany from "/components/emailcompany";
import { useState, useEffect } from "react";
import {useRouter} from 'next/router'
import Link from "next/link";
import Helmet from "react-helmet";


function companies() {
 

  const [jobData, setJobData] = useState({
    company_name: "",
    company_url: "",
    company_description: "",
    mission: "",
    city: "",
    postedat: "",
    job_position: "",
    job_category: "",
    logo: "",
    postedat: "",
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




  return (
    
   <div id="hero" className="border-t-4">
    <Helmet>
      (<script className='structured-data-list' type="application/ld+json">{JSON.stringify(data)}</script>)
      </Helmet> 
    
   <div className="mt-20">
  
      <div>
      <img  src={`.${jobData.logo}`} className="z-20 w-32 h-32 -mt-12 ml-20 rounded-full border border-black border-2"/>
        <div className="">
          <h2 className="ml-60 mb-12 font-semibold -mt-28 text-[50px]">{jobData.company_name}</h2>
          <p className="ml-60 -mt-12 mb-12 text-gray-800"> <a href={jobData.company_url} className="text-sky-400">{jobData.company_url}</a> • {jobData.city}, {jobData.location}</p>
      
      <div className="  float-right justify-center pt-2 text-sm -mt-32 mr-40  bg-[#17614A] rounded-full text-white flex ">
      <p className=" float-right mb-2 ml-4 mr-6 flex text-lg  ">
      <span class="flex rounded-full bg-[#26EB6B] mt-1 mb-1 uppercase px-2 py-1 text-xs text-black font-bold mr-3">New!</span>
       1 Open Jobs
       </p>
      </div>
     
      </div>
       
      <p className="text-3xl ml-20 mr-10 ">              {jobData.mission ? jobData.mission : jobData.company_description } </p>
      </div>

      <div >

<p  className="hidden lg:block mt-10 text-center text-3xl  "><span className="underline decoration-[#22A956] decoration-4 underline-offset-8 ">Available Jobs</span> </p>

</div>



      <Link href="/job/634f75a39f621dc748de274d">
      <div className={`flex flex-col mx-1 my-10 lg:mx-20 pb-2 `}>
        <ul className={`  rounded-lg text-left mb-2  flex  bg-white hover:bg-gray-100  bg-white  shadow-lg `}>
        <img className="z-1 mt-4 ml-4 w-14 h-14 rounded-full border border-[#17614A] border-2 " src={`.${jobData.logo}`} ></img>
          <li className="w-full ml-2 mt-2 mb-4 box-border ">
            <p className=" ml-2 mt-2 z-1 text-sm text-[#17614A] pb-1">
              {jobData.company_name} 
             
             
            </p>
            
            <p className=" ml-2 -mb-2 z-1 text-xl text-[#17614A] z-0 font-bold pb-2 pr-20">{jobData.job_position}</p>

            <p className="float-right mr-4 text-[8px] -mt-10 bold font-bold lg:text-sm">{jobData.job_type} | {jobData.location}</p>
              
          </li>
        </ul>
     </div>
     </Link>
        <div>
        <EmailCompany emailName={jobData.company_name}/>
      </div>
   </div>
   
   </div>
  )
}

export default companies