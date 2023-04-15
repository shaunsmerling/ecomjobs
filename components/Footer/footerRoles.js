import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-9xl">
        <div className={styles.footer1}>
         
       
          <div className={styles.ul_content1}>
            <h3 className="hover:text-black underline">Search Roles</h3>
            <ul>
              <li>Entry-Level Roles</li>
              <li>Junior Roles</li>
              <li>Senior Roles</li>
              <li>Lead Roles</li>
              <li>Intern Roles</li>
              <li>Manager Roles</li>
            </ul>
          </div>
          <div className={styles.ul_content1}>
            <ul>
            <li>Director Roles</li>
              <li>Executive Roles</li>
              <li>Head Roles</li>
              <li>VP Roles</li>
              <li>Specialist Roles</li>
              <li>Analyst Roles</li>
              <li>Coordinator Roles</li>
            </ul>
          </div>
          <div className={styles.ul_content1}>
            <ul>
            <li>Strategist Roles</li>
              <li>Generalist Roles</li>
              <li>Associate Roles</li>
              <li>Trading Manager Roles </li>
              <li>Assistant Roles</li>
              <li>Amazon Roles</li>
              <li>Representative Roles</li>
            </ul>
          </div>
          <div className={styles.ul_content1}>
            <ul>
            <li>CEO Roles</li>
              <li>Founder Roles</li>
              <li>Co-Founder Roles</li>
              <li>Chief Roles </li>
              <li>C-Level Roles</li>
              <li>Freelance Roles</li>
              <li>Developer Roles</li>
            </ul>
          </div>
          <div className={styles.ul_content1}>
            <ul>
            <li>2-Level Roles</li>
              <li>3-level Roles</li>
              <li>Technical Roles</li>
              <li>Operations Roles </li>
              <li>Sales Roles</li>
              <li>Content Roles</li>
              <li>Representative Roles</li>
            </ul>
          </div>
       
        </div>
       
      </div>
    </>
  );
}

export default Footer;
