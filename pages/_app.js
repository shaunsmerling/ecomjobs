import Head from "next/head";
import React from 'react';
import '../global.css'
import Navbar from "../components/NavBar"
import Script from "next/script"
import {useRouter} from "next/router"
import { useState, useEffect} from "react"

function Loading() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setTimeout(() => {setLoading(false)}, 3000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);


    return () => {
    router.events.off("routeChangeStart", handleStart);
    router.events.off("routeChangeComplete", handleComplete);
    router.events.off("routeChangeError", handleComplete);
    }
  })
  return loading && 
  <div className="spinner-wrapper">
    <div class="loadingio-spinner-spinner-xphawmzupwn"><div class="ldio-xrw7g30hrkj">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
  </div>
}


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
     <><Loading/><Component {...pageProps} /></>
     
   </div>
  )
}

export default MyApp;