import React, {useState, useEffect} from 'react';
import '../global.css'
import Navbartwo from "../components/NavBarTwo"
import Script from "next/script"






function MyApp({ Component, pageProps }) {


  return (
    <div>
  
<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-K7WC2T06Y5"/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-K7WC2T06Y5', {
      page_path: window.location.pathname,
    });
    `,
  }}
/>
      <Navbartwo/>
      <Component {...pageProps} />
     
   </div>
  )
}

export default MyApp;