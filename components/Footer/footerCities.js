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
            <h3 className="hover:text-black underline">Search Cities</h3>
            <ul>
  <li><a href={`${config.api_url}/cities/london-jobs`}>Ecom Jobs in London</a></li>
  <li><a href={`${config.api_url}/cities/los-angeles-jobs`}>Ecom Jobs in LA</a></li>
  <li><a href={`${config.api_url}/cities/new-york-jobs`}>Ecom Jobs in New York</a></li>
  <li><a href={`${config.api_url}/cities/melbourne-jobs`}>Ecom Jobs in Melbourne</a></li>
  <li><a href={`${config.api_url}/cities/denver-jobs`}>Ecom Jobs in Denver</a></li>
  <li><a href={`${config.api_url}/cities/miami-jobs`}>Ecom Jobs in Miami</a></li>
</ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/cities/beaverton-jobs`}><li>Ecom Jobs in Beaverton</li></a>
    <a href={`${config.api_url}/cities/manchester-jobs`}><li>Ecom Jobs in Manchester</li></a>
    <a href={`${config.api_url}/cities/austin-jobs`}><li>Ecom Jobs in Austin</li></a>
    <a href={`${config.api_url}/cities/ny-metro-area-jobs`}><li>Ecom Jobs in NY Metro Area</li></a>
    <a href={`${config.api_url}/cities/irvine-jobs`}><li>Ecom Jobs in Irvine</li></a>
    <a href={`${config.api_url}/cities/el-segundo-jobs`}><li>Ecom Jobs in El Segundo</li></a>
    <a href={`${config.api_url}/cities/chicago-jobs`}><li>Ecom Jobs in Chicago</li></a>
  </ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/cities/santa-monica-jobs`}><li>Ecom Jobs in Santa Monica</li></a>
    <a href={`${config.api_url}/cities/atlanta-jobs`}><li>Ecom Jobs in Atlanta</li></a>
    <a href={`${config.api_url}/cities/culver-city-jobs`}><li>Ecom Jobs in Culver City</li></a>
    <a href={`${config.api_url}/cities/seattle-jobs`}><li>Ecom Jobs in Seattle</li></a>
    <a href={`${config.api_url}/cities/boston-jobs`}><li>Ecom Jobs in Boston</li></a>
    <a href={`${config.api_url}/cities/san-fransisco-jobs`}><li>Ecom Jobs in San Fransisco</li></a>
    <a href={`${config.api_url}/cities/salk-lake-city-jobs`}><li>Ecom Jobs in Salk Lake City</li></a>
  </ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/cities/san-diego-jobs`}><li>Ecom Jobs in San Diego</li></a>
    <a href={`${config.api_url}/cities/dallas-jobs`}><li>Ecom Jobs in Dallas</li></a>
    <a href={`${config.api_url}/cities/anaheim-jobs`}><li>Ecom Jobs in Anaheim</li></a>
    <a href={`${config.api_url}/cities/gold-coast-jobs`}><li>Ecom Jobs in Gold Coast</li></a>
    <a href={`${config.api_url}/cities/portland-jobs`}><li>Ecom Jobs in Portland</li></a>
    <a href={`${config.api_url}/cities/brisbane-jobs`}><li>Ecom Jobs in Brisbane</li></a>
    <a href={`${config.api_url}/cities/brooklyn-jobs`}><li>Ecom Jobs in Brooklyn</li></a>
  </ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/cities/solihull-jobs`}><li>Ecom Jobs in Solihull</li></a>
    <a href={`${config.api_url}/cities/detroit-jobs`}><li>Ecom Jobs in Detroit</li></a>
    <a href={`${config.api_url}/cities/nashville-jobs`}><li>Ecom Jobs in Nashville</li></a>
    <a href={`${config.api_url}/cities/santa-clarita-jobs`}><li>Ecom Jobs in Santa Clarita</li></a>
    <a href={`${config.api_url}/cities/adelaide-jobs`}><li>Ecom Jobs in Adelaide</li></a>
    <a href={`${config.api_url}/cities/bath-jobs`}><li>Ecom Jobs in Bath</li></a>
  </ul>
          </div>
       
        </div>
     
      </div>
    </>
  );
}

export default Footer;
