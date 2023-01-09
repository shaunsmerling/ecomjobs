import { useEffect, useState } from "react";
import PublicLayout from "../../../layouts/PublicLayout";
import styles from "./styles.module.css";
import Footer from "../../../components/Footer";
import { api_url } from "../../../config";
import Link from "next/link";
import Head from "next/head";
import Helmet from 'react-helmet';

export async function getServerSideProps(context) {
  const { params } = context;
  const { jobId } = params;

  const res = await fetch(`${api_url}/api/jobs?id=${jobId}`);
  const data = await res.json();

  return {
    props: { jobs: data }, // will be passed to the page component as props
  };
}



function Job({ jobs }) {

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
"datePosted": `${jobs.postedat}`,
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
        <meta property="og:image" content={`https://ecomportal.co/images/${jobs.logo}`} key="mainimage" />
        <meta name="twitter:card" vmid="twitter:card" key="twcard" content="summary_large_image" />
        <meta name="twitter:site" vmid="twitter:site" key="twsite"  content="@ecomprtal" />
        <meta name="twitter:text:title" vmid="twitter:text:title" key="twtitle" content={`${jobs.company_name} is hiring for a ${jobs.job_position}!`} />
        <meta name="twitter:text:description" vmid="twitter:text:description" key="twdesc"  content={`${jobs.job_description}`} />
        <meta name="twitter:image:src" vmid="twitter:image:src"  key="twimg" content={`https://ecomportal.co/images/${jobs.logo}`} />
</Head>
      
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className={styles.main_section}>
            <div className={styles.leftSide}>
              <Link href={"/"} className="cursor-pointer">
                <span className="cursor-pointer"> &#60; Back to all jobs </span>
              </Link>
              <div className={styles.spahes}>
                <svg
                  width="58"
                  height="70"
                  viewBox="0 0 58 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.5 68.5L6.5 40L26.5 7L56.5 68.5Z"
                    stroke="#BEF8A5"
                    stroke-linecap="round"
                  />
                  <path d="M50 61.5L0 33L20 0L50 61.5Z" fill="#BEF8A5" />
                </svg>
              </div>
              <h1>{jobs?.job_position}</h1>
              <h5>Company Description</h5>
              <p>{jobs?.company_description}</p>
              <h5>Job Description</h5>
              <p>{jobs?.job_description}</p>
              <h5>Job Requirements</h5>
              <p>{jobs?.job_requirements}</p>
            </div>
            <div className={styles.rightside}>
              <div className={styles.shapesImg}>
                <svg
                  width="84"
                  height="79"
                  viewBox="0 0 84 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00035 33.9235L49.2314 59.2292L65.3438 27.1185L2.00035 33.9235Z"
                    stroke="#94D743"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.7381 35.5814L57.9692 60.8872L74.0816 28.7765L10.7381 35.5814Z"
                    fill="#94D743"
                  />
                </svg>
              </div>
              <div className={styles.rightContent}>
                <img loading="lazy" src={`../images/${jobs?.logo}`}></img>
                <h3>{jobs?.company_name}</h3>
                <h6>{jobs?.salaryMin && jobs?.salaryMax !== "0" ? "$" + jobs.salaryMin + ` - ` + "$" + jobs.salaryMax : ""}</h6>
                <a
                  href={jobs?.application_url}
                  target="_blank"
                  className={`inline-flex items-center justify-center px-6 py-2.5 text-base font-medium transition-all duration-200 border border-gray-900 rounded-full bg-[#17614A] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900 ${styles.apply_btn}`}
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

Job.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Job;
