import { useEffect, useState } from "react";
import PublicLayout from "../../../layouts/PublicLayout";
import styles from "./styles.module.css";
import { api_url } from "../../../config";
import Link from "next/link";
import Head from "next/head";
import Helmet from 'react-helmet';
import JobEmail from "../../../components/jobEmail"

export async function getServerSideProps(context) {
  const { params } = context;
  const { jobId } = params;

  try {
    const res = await fetch(`${api_url}/api/jobs?jobUrl=${jobId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data with status ${res.status}`);
    }
    const data = await res.json();


    return {
      props: { jobs: data }, // will be passed to the page component as props
    };
  } catch (error) {
    console.error(error);
    return {
      props: { jobs: {} }, // Return an empty object for the jobs prop in case of an error
    };
  }
}





function Job({ jobs }) {


  function convertToISO8601(dateString) {
    if (!dateString) {
        return '';
    }
    const dateParts = dateString.split('/');
    const year = 2000 + parseInt(dateParts[2]);
    const month = dateParts[0].padStart(2, '0');
    const date = dateParts[1].padStart(2, '0');
    const isoString = `${year}-${month}-${date}T00:00:00+00:00`;
    return isoString;
}
  
  const isoStr = convertToISO8601(jobs.postedat);
  

  let jobData =   
{
"@context": "https://schema.org/",
"@type": "JobPosting",
"title": `${jobs.job_position}`,
"description": `${jobs.job_description}`,
"hiringOrganization": {
    "@type": "Organization",
    "name": `${jobs.company_name}`,
    "sameAs": `${jobs.company_url}`,
},
"industry": `${jobs.job_category}`,
"employmentType": "FULL_TIME",
"datePosted": `${isoStr ? isoStr : ""}`,
"baseSalary": `${jobs.salary}`,
"validThrough": "",
"jobLocation": {
    "@type": "Place",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "",
        "postalCode": "",
        "addressCountry": `${jobs.location}`
    }
},
"responsibilities": `${jobs.job_requirements}`,
}

const logoString = jobs.logo;

function salaryLogic(salaryMax, salaryMin) {
  if (salaryMax >= 1 && salaryMax <= 9) {
    salaryMax *= 10000;
  }
  if (salaryMin === 0) {
    salaryMin = salaryMax;
  }
  return {
    salaryMin,
    salaryMax,
  };
}

const { salaryMin, salaryMax } = salaryLogic(jobs?.salaryMax, jobs?.salaryMin);


function isImageFile(filename) {
  return /\.(png|jpe?g)$/i.test(filename);
}



  return (
    <>
      <div className={`pb-10`}>

      <Helmet>
            (<script className='structured-data-list' type="application/ld+json">{JSON.stringify(jobData)}</script>)
      </Helmet> 
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{`${jobs.job_position} | ${jobs.company_name}`}</title>
        <meta property="og:title" content={`${jobs.job_position} | ${jobs.company_name}`} key="maintitle" />
        <meta property="og:description" content={`${jobs.job_description}`}  key="description" />
        <meta property="og:image" content={`https://ecomportal-images.storage.googleapis.com/images/${logoString}`} key="mainimage" />
        <meta name="twitter:card" vmid="twitter:card" key="twcard" content="summary_large_image" />
        <meta name="twitter:site" vmid="twitter:site" key="twsite"  content="@ecomprtal" />
        <meta name="twitter:text:title" vmid="twitter:text:title" key="twtitle" content={`${jobs.company_name} is hiring for a ${jobs.job_position}!`} />
        <meta name="twitter:text:description" vmid="twitter:text:description" key="twdesc"  content={`${jobs.job_description}`} />
        <meta name="twitter:image:src" vmid="twitter:image:src"  key="twimg" content={`https://ecomportal-images.storage.googleapis.com/images/${logoString}`} />
</Head>
      
        <div className="px-4 sm:px-6 bg-white rounded-lg font-Studio6 lg:px-8 mx-auto max-w-7xl">
         {/* Sponsorship Section */}
  <div className={`lg:mx-auto border border-1 border-black w-full rounded-md lg:rounded-full lg:py-2 py-6 lg:flex items-center bg-[#edebea]`}>
    {/* Sponsorship Logo */}
    <img src="/spotlight.png" alt="Sponsor Logo" className="lg:flex w-10 h-10 ml-4 rounded-full" />
    
    <div className="lg:flex lg:flex-col justify-center ml-4 mb-4 lg:mb-0">
      {/* Sponsorship Heading */}
      <h1 className="mt-2 lg:mt-0 text-xl font-bold">The Spotlight</h1>
      {/* Sponsorship Text */}
      <p className="text-sm text-gray-500 mt-1">The latest developments in artificial intelligence, in less than 5 minutes per day</p>
    </div>

  {/* Sponsorship Call to Action Button */}
  <a href="https://thespotlight.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className=" bg-black text-white px-4 py-2 ml-4 lg:ml-auto lg:mr-10 rounded-lg transition duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-200">
    Join 3000+ readers
  </a>
  </div>
          <div className={styles.main_section}>
            <div className={styles.leftSide}>
              <Link href={"/"} className="cursor-pointer">
                <span className="cursor-pointer"> &#60; Back to all jobs </span>
              </Link>
            
           
             <h1>{jobs?.job_position}</h1>
              <h5>{jobs?.company_description ? "Company Description" : ""}</h5>
              <p>{jobs?.company_description}</p>
              <h5>{jobs?.job_description ? "Job Description" : ""}</h5>
              <p>{jobs?.job_description}</p>
              <h5>{jobs?.job_requirements ? "Job Requirements" : ""}</h5>
              <p>{jobs?.job_requirements}</p>
            </div>
            <div className={styles.rightside}>
     
              
              <div className={styles.rightContent}>
                <img loading="lazy" alt=""  src={logoString?.startsWith("data:image/") ? logoString : `https://ecomportal-images.storage.googleapis.com/images/${logoString}`}
              ></img>
                <h3>{jobs?.company_name}</h3>
                <h6>{jobs?.salaryMin && jobs?.salaryMax && jobs.salaryMin !== "0"
  ? jobs.salaryMin === jobs.salaryMax
    ? jobs.salaryMax >= 10000
      ? `$${jobs.salaryMax}/yr`
      : ""
    : jobs.salaryMin >= 10000 && jobs.salaryMax >= 10000
      ? `$${jobs.salaryMin} - $${jobs.salaryMax}`
      : jobs.salaryMin >= 10000
        ? `$${jobs.salaryMin} -`
        : jobs.salaryMax >= 10000
          ? ` - $${jobs.salaryMax}`
          : ""
  : ""}</h6>
                {/* <h6>{jobs?.salaryMin && jobs?.salaryMax !== "0" ? `${jobs?.salaryMin === "1000" ? "" : `$${jobs?.salaryMin} - `}$${jobs?.salaryMax}` : ""}</h6> */}
                <a
                  href={jobs?.application_url}
                  target="_blank"
                  className={`inline-flex items-center justify-center px-6 py-2.5 text-base font-medium transition-all duration-200 border border-gray-900 rounded-full bg-[#709771] text-white focus:outline-none hover:bg-[#1f372f] focus:ring-2 focus:ring-offset-2 focus:ring-ring-900 ${styles.apply_btn}`}
                >
                  Apply Now
                </a>
                <ul>
                  <li>
                    <h4>Job Posted</h4>
                    <h5>{jobs?.postedat}</h5>
                  </li>
                  <li>
                    <h4>Job Type</h4>
                    <h5>{jobs?.job_type}</h5>
                  </li>
                  {jobs?.salary && (
                  <li>
                    <h4>Salary</h4>
                    <h5>{jobs?.salary}</h5>
                  </li>
                  )}
                  <li>
                    <h4>Location</h4>
                    <h5>{jobs?.location}</h5>
                  </li>
                  <li>
                    <h4>Job Categories</h4>
                    <button className={styles.categbtn}>
                      {jobs?.job_category}
                    </button>
                  </li>
                  <JobEmail />
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

Job.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Job;
