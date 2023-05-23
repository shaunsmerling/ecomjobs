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
  <li><a href={`${config.api_url}/cities/london-jobs`}> Jobs in London</a></li>
  <li><a href={`${config.api_url}/cities/los-angeles-jobs`}> Jobs in LA</a></li>
  <li><a href={`${config.api_url}/cities/new-york-jobs`}> Jobs in New York</a></li>
  <li><a href={`${config.api_url}/cities/melbourne-jobs`}> Jobs in Melbourne</a></li>
  <li><a href={`${config.api_url}/cities/denver-jobs`}> Jobs in Denver</a></li>
  <li><a href={`${config.api_url}/cities/miami-jobs`}> Jobs in Miami</a></li>
</ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/cities/beaverton-jobs`}><li> Jobs in Beaverton</li></a>
    <a href={`${config.api_url}/cities/manchester-jobs`}><li> Jobs in Manchester</li></a>
    <a href={`${config.api_url}/cities/austin-jobs`}><li> Jobs in Austin</li></a>
    <a href={`${config.api_url}/cities/irvine-jobs`}><li> Jobs in Irvine</li></a>
    <a href={`${config.api_url}/cities/el-segundo-jobs`}><li> Jobs in El Segundo</li></a>
    <a href={`${config.api_url}/cities/chicago-jobs`}><li> Jobs in Chicago</li></a>
  </ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/cities/santa-monica-jobs`}><li> Jobs in Santa Monica</li></a>
    <a href={`${config.api_url}/cities/atlanta-jobs`}><li> Jobs in Atlanta</li></a>
    <a href={`${config.api_url}/cities/culver-city-jobs`}><li> Jobs in Culver City</li></a>
    <a href={`${config.api_url}/cities/seattle-jobs`}><li> Jobs in Seattle</li></a>
    <a href={`${config.api_url}/cities/boston-jobs`}><li> Jobs in Boston</li></a>
    <a href={`${config.api_url}/cities/san-francisco-jobs`}><li> Jobs in San Francisco</li></a>
    <a href={`${config.api_url}/cities/salt-lake-city-jobs`}><li> Jobs in Salt Lake City</li></a>
  </ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/cities/san-diego-jobs`}><li> Jobs in San Diego</li></a>
    <a href={`${config.api_url}/cities/dallas-jobs`}><li> Jobs in Dallas</li></a>
    <a href={`${config.api_url}/cities/anaheim-jobs`}><li> Jobs in Anaheim</li></a>
    <a href={`${config.api_url}/cities/gold-coast-jobs`}><li> Jobs in Gold Coast</li></a>
    <a href={`${config.api_url}/cities/portland-jobs`}><li> Jobs in Portland</li></a>
    <a href={`${config.api_url}/cities/brisbane-jobs`}><li> Jobs in Brisbane</li></a>
    <a href={`${config.api_url}/cities/brooklyn-jobs`}><li> Jobs in Brooklyn</li></a>
  </ul>
          </div>
          <div className={styles.ul_content1}>
          <ul>
    <a href={`${config.api_url}/cities/solihull-jobs`}><li> Jobs in Solihull</li></a>
    <a href={`${config.api_url}/cities/detroit-jobs`}><li> Jobs in Detroit</li></a>
    <a href={`${config.api_url}/cities/nashville-jobs`}><li> Jobs in Nashville</li></a>
    <a href={`${config.api_url}/cities/santa-clarita-jobs`}><li> Jobs in Santa Clarita</li></a>
    <a href={`${config.api_url}/cities/adelaide-jobs`}><li> Jobs in Adelaide</li></a>
    <a href={`${config.api_url}/cities/bath-jobs`}><li> Jobs in Bath</li></a>
  </ul>
          </div>
       
        </div>
     
      </div>
    </>
  );
}

export default Footer;
