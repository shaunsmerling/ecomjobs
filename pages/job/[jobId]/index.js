import { useEffect, useState } from "react";
import PublicLayout from "../../../layouts/PublicLayout";
import styles from "./styles.module.css";
import Footer from "../../../components/Footer";
import { api_url } from "../../../config";
import Link from "next/link";

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
  return (
    <>
      <div className={`pb-10`}>
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
              <div className={styles.shpesImg}>
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
                <h6>{jobs?.salary}</h6>
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
