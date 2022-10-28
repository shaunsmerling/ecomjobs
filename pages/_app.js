import Head from "next/head";
import React from 'react';
import '../global.css'
import Navbar from "../components/NavBar"
import Script from "next/script"
import Email from "../components/email"



function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Web site created using create-react-app"
            />
      </Head>
      
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
      <Navbar/>
     <Component {...pageProps} />
     
   </div>
  )
}

export default MyApp;