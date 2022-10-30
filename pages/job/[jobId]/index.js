import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Helmet} from "react-helmet";


function Jobs() {
  const [jobData, setJobData] = useState({
    company_name: "",
    company_url: "",
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
    <div className="text-center items-center">
      <Helmet>
      (<script className='structured-data-list' type="application/ld+json">{JSON.stringify(data)}</script>)
      </Helmet> 
    
      <div className="">
      <br></br>
      <br></br>
        <img className="mx-auto border-2 rounded-full border-[#17614A] h-28 w-28 " src={`.${jobData.logo}`}></img>
        <br></br>
        <br></br>
        <p><span className="font-bold text-[#17614A]">{jobData.company_name}</span> <span className="italic">is hiring a</span></p>
        <h2 className="text-3xl my-2 text-[#17614A] font-bold">{jobData.job_position}</h2>
        <div className="my-2">
        <h3 className="my-1">Category: <span className="text-[#17614A]">{jobData.job_category}</span></h3>
        <h3 className="my-1">Location: <span className="text-[#17614A]">{jobData.city}, {jobData.location}</span></h3>
        <h3 className="my-1">Type: <span className="text-[#17614A]">{jobData.job_type}</span></h3>
        {jobData.salary ? <h3 className="my-1">Salary: <span className="font-bold">{jobData.job_salary}</span></h3> : <p className="hidden">no salary</p>}
        <p className="my-1"> {getDate()}</p>
        </div>
        <br></br>
        <a
          id="applybtn"
          target="_blank"
          href={jobData.application_url}
          className=" text-black border border-black bg-[#26EB6B] font-medium rounded-lg text-sm px-20 py-2 text-center  content-center hover:rounded-full"
        >
          {" "}
          Apply Now{" "}
        </a>
        <br></br>
        <br></br>
        <div className="mx-2 border border-[#17614A] rounded-lg pb-4 lg:mx-32 mb-4">
          <div className="mx-4 my-2">
            <h3>
              <b className="bold">Who We Are:</b>
            </h3>
            <p>{jobData.company_description}</p>
            <br></br>
            <br></br>
            <h3>
              <b className="bold">Job Description:</b>
            </h3>
            <p>{jobData.job_description}</p>
            <br></br>
            <br></br>
            <h3 className="">
              <b className="bold">Candidate Requirements:</b>
            </h3>
            <p>{jobData.job_requirements}</p>
            <br></br>
            <br></br>
            <a
              id="applybtn"
              target="_blank"
              href={jobData.application_url}
              className=" text-black border border-black bg-[#26EB6B] font-medium rounded-lg text-sm px-20 py-2 text-center  content-center hover:rounded-full"
            >
              {" "}
              Apply Now{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
