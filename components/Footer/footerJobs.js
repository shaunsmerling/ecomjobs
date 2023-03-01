import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import styles from "./styles.module.css";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="">
        <div className={styles.footer1}>
         
       
          <div className={styles.ul_content1}>
            <h3 className="hover:text-black underline">Search Jobs</h3>
            <ul>
              <li>Social Media Coordinator Jobs</li>
              <li>Content Creation Jobs</li>
              <li>Front-end Engineer Jobs </li>
              <li>Paid Social Jobs</li>
              <li>Influencer Manager Jobs</li>
              <li>Freelance Jobs</li>
            </ul>
          </div>
          <div className={styles.ul_content1}>
            <ul>
            <li>Paid Media Specialist Jobs</li>
              <li>Software Engineer Jobs</li>
              <li>Graphic Designer Jobs</li>
              <li>CRM Jobs </li>
              <li>Digital Marketing Jobs</li>
              <li>Full-Stack Developer Jobs</li>
              <li>Financial Analyst Jobs</li>
            </ul>
          </div>
          <div className={styles.ul_content1}>
            <ul>
            <li>Accountant Jobs</li>
              <li>eCommerce Coordinator Jobs</li>
              <li>Facebook Ads Jobs</li>
              <li>Google Ads Jobs</li>
              <li>Social Media Manager Jobs</li>
              <li>Account Manager Jobs</li>
              <li>Growth Marketing Jobs</li>
            </ul>
          </div>
          <div className={styles.ul_content1}>
            <ul>
            <li>Product Development Jobs</li>
              <li>Customer Service Jobs</li>
              <li>Retail Marketing Jobs</li>
              <li>SEO Jobs</li>
              <li>Influencer Marketing Jobs</li>
              <li>Lifecycle Marketing Jobs</li>
              <li>Sales Development Jobs</li>
            </ul>
          </div>
          <div className={styles.ul_content1}>
            <ul>
            <li>Email Marketing Jobs</li>
              <li>SMS Marketing Jobs</li>
              <li>Senior Full-Stack Developer Jobs</li>
              <li>Entry Level Jobs</li>
              <li>Junior Level Jobs</li>
              <li>Trading Manager Jobs</li>
            </ul>
          </div>
       
        </div>
       
      </div>
    </>
  );
}

export default Footer;
