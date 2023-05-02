import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import config from "../../config.js"

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="font-montserrant">
        <div className={styles.footer1}>
         
       
          <div className={styles.ul_content1}>
            <h3 className="hover:text-black underline">Search Jobs</h3>
            <ul>
    <a href={`${config.api_url}/jobs/social-media-coordinator`}><li>Social Media Coordinator Jobs</li></a>
    <a href={`${config.api_url}/jobs/content-creation`}><li>Content Creation Jobs</li></a>
    <a href={`${config.api_url}/jobs/front-end-engineer`}><li>Front-end Engineer Jobs</li></a>
    <a href={`${config.api_url}/jobs/paid-media`}><li>Paid Media Jobs</li></a>
    <a href={`${config.api_url}/jobs/influencer-manager`}><li>Influencer Manager Jobs</li></a>
    <a href={`${config.api_url}/jobs/freelance`}><li>Freelance Jobs</li></a>
  </ul>
          </div>
          <div className={styles.ul_content1}>
  <ul>
    <a href={`${config.api_url}/jobs/email-marketing`}><li>Email Marketing Jobs</li></a>
    <a href={`${config.api_url}/jobs/software-engineer`}><li>Software Engineer Jobs</li></a>
    <a href={`${config.api_url}/jobs/graphic-designer`}><li>Graphic Designer Jobs</li></a>
    <a href={`${config.api_url}/jobs/crm`}><li>CRM Jobs</li></a>
    <a href={`${config.api_url}/jobs/digital-marketing`}><li>Digital Marketing Jobs</li></a>
    <a href={`${config.api_url}/jobs/full-stack-developer`}><li>Full-Stack Developer Jobs</li></a>
    <a href={`${config.api_url}/jobs/financial-analyst`}><li>Financial Analyst Jobs</li></a>
  </ul>
</div>
          <div className={styles.ul_content1}>
          <ul>
  <a href={`${config.api_url}/jobs/accountant`}><li>Accountant Jobs</li></a>
  <a href={`${config.api_url}/jobs/ecommerce-coordinator`}><li>eCommerce Coordinator Jobs</li></a>
  <a href={`${config.api_url}/jobs/facebook-ads`}><li>Facebook Ads Jobs</li></a>
  <a href={`${config.api_url}/jobs/google-ads`}><li>Google Ads Jobs</li></a>
  <a href={`${config.api_url}/jobs/social-media-manager`}><li>Social Media Manager Jobs</li></a>
  <a href={`${config.api_url}/jobs/account-manager`}><li>Account Manager Jobs</li></a>
  <a href={`${config.api_url}/jobs/growth-marketing`}><li>Growth Marketing Jobs</li></a>
</ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/jobs/product-development`}><li>Product Development Jobs</li></a>
    <a href={`${config.api_url}/jobs/customer-service`}><li>Customer Service Jobs</li></a>
    <a href={`${config.api_url}/jobs/seo`}><li>SEO Jobs</li></a>
    <a href={`${config.api_url}/jobs/sms-marketing`}><li>SMS Marketing Jobs</li></a>
    <a href={`${config.api_url}/jobs/lifecycle-marketing`}><li>Lifecycle Marketing Jobs</li></a>
    <a href={`${config.api_url}/jobs/sales-development`}><li>Sales Development Jobs</li></a>
  </ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
  <a href={`${config.api_url}/jobs/entry-level`}><li>Entry Level Jobs</li></a>
  <a href={`${config.api_url}/jobs/junior-level`}><li>Junior Level Jobs</li></a>
</ul>
          </div>
       
        </div>
       
      </div>
    </>
  );
}

export default Footer;
