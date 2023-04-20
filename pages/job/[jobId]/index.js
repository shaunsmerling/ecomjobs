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

  try {
    const res = await fetch(`${api_url}/api/jobs?id=${jobId}`);
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

function isImageFile(filename) {
  return /\.(png|jpe?g)$/i.test(filename);
}


  const logoImage = isImageFile(logoString) ? 
  `https://ecomportal-images.storage.googleapis.com/images/${logoString}` : 
  `${logoString}`;

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
          <div className={styles.main_section}>
            <div className={styles.leftSide}>
              <Link href={"/"} className="cursor-pointer">
                <span className="cursor-pointer"> &#60; Back to all jobs </span>
              </Link>
              {/* <div className={styles.spahes}>
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
              </div> */}
                       <Link href="https://insightai.beehiiv.com/subscribe">
            <div id="sponsor_1" class="mb-4 mt-4 lg:ml-4 lg:mr-2 sm:mx-20 rounded-md cursor-pointer border border-solid  border-black transform transition duration-300 hover:-translate-y-1 hover:shadow-lg ">
    <div class="px-2  py-2 py-md-3 ">
        <div class="flex flex-col md:flex-row justify-between">
            <div class="flex items-center">
                <img class="rounded mr-0 mr-md-3 border border-solid border-insightblue h-12" src="https://ecomportal-images.storage.googleapis.com/images/insight.png"/>
                <a aria-label="Open SideShift.ai website" rel="noopener" data-turbo="false"  href="https://insightai.beehiiv.com/subscribe"></a>
                <div className="ml-4"> 
                    <a aria-label="Open SideShift.ai website" rel="noopener" data-turbo="false" class="text-purple-500 hover:text-purple-600" href="https://insightai.beehiiv.com/subscribe">
                        <div class="font-bold text-lg hidden md:block text-insightblue">Leverage AI to 1000x productivity</div>
                        <div class="text-sm font-semibold  text-insightblue md:hidden">Leverage AI to 1000x productivity</div>
                    </a>
                    <a aria-label="Open SideShift.ai website" rel="noopener" data-turbo="false" class="block text-insightblue text-xs mt-0 md:mt-1"  href="https://insightai.beehiiv.com/subscribe">by the <b>InsightAI</b> newsletter</a>
                </div>
                {/* <a aria-label="Open SideShift.ai website" rel="noopener" data-turbo="false" class="my-btn-sm text-white bg-purple-500  rounded-md px-4 md:hidden text-xs  border border-solid border-purple-500  "  href="https://www.theinsightai.com">Learn More</a> */}
            </div>
         
            <div class="my-auto md:pl-3 pl-0">
                <a onmouseover="this.style.cssText='background-color: #be8fdb; color: black; border-style: solid; border-color: #be8fdb; box-shadow: 0px 0px 6px 3px #fe52ad;'" onmouseout="this.style.cssText='text-decoration: none; color: #be8fdb; border-style: solid; border-color: #be8fdb; box-shadow: 0px 0px 6px 3px #fe52ad;'" rel="noopener" data-turbo="false" class="my-btn-sm text-xs text-white bg-insightblue border border-solid border-black hidden md:block py-1 px-2 rounded-md" target="_blank" href="https://insightai.beehiiv.com/subscribe">Learn More</a>
            </div>
        </div>
    </div>
</div>
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
              {/* <div className={styles.shapesImg}>
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
              </div> */}
              <div className={styles.rightContent}>
                <img loading="lazy" src={`https://ecomportal-images.storage.googleapis.com/images/${logoString}`}
              ></img>
                <h3>{jobs?.company_name}</h3>
                <h6>{jobs?.salaryMin && jobs?.salaryMax !== "0" ? `${jobs?.salaryMin === "1000" ? "" : `$${jobs?.salaryMin} - `}$${jobs?.salaryMax}` : ""}</h6>
                <a
                  href={jobs?.application_url}
                  target="_blank"
                  className={`inline-flex items-center justify-center px-6 py-2.5 text-base font-medium transition-all duration-200 border border-gray-900 rounded-full bg-btn text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900 ${styles.apply_btn}`}
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

      {/* <Footer /> */}
    </>
  );
}

Job.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Job;
