import React, {useState, useEffect} from 'react';
import '../global.css'
import Navbartwo from "../components/NavBarTwo"
import Script from "next/script"
import { NextSeo } from 'next-seo';






function MyApp({ Component, pageProps }) {


  return (
    <div>
     <NextSeo
      title="Jobs For the eCommerce Industry"
      description="Join an eCommerce brand. Help shape the future by working with some of the fastest growing Direct-To-Consumer companies." 
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Hi',
        description: 'Hi',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        site: '@ecomjobs_',
        cardType: 'summary',
        image: "/logo.png"
      }}
    />
      
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