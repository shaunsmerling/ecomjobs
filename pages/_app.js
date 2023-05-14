import React, {useEffect, useState} from 'react';
import '../global.css'
import Navbarthree from "../components/navBarThree"
import Script from "next/script"
import { SessionProvider, useSession } from "next-auth/react"; 
import { useRouter } from "next/router";
import Footer from "../components/Footer/index"
import FooterJobs from "../components/Footer/footerJobs"
import Announce from "../components/announcementBar"







function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps },
}) {
const router = useRouter();
const showHeader = router.pathname === '/login' || router.pathname === "/auth/verify-request" ? false : true;

    


// useEffect(() => {
//   router.events.on("routeChangeComplete", (path) => {
//     setTimeout(() => {
//       if (window.bento !== undefined) {
//         // Note: if the user is identified or logged in, you can identify their page view by running.
//         // Example:
//         // if (user) {
//         //  window.bento.identify(email);
//         // }
//         window.bento.view();
//       };
//     }, 0);
//   });

//   return () => {
//     router.events.off('routeChangeComplete', 0);
//   }
// }, [router]);




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
<Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '242161221475139');
          fbq('track', 'PageView');
          `,
        }}
/>
<Script strategy="afterInteractive" src="https://www.facebook.com/tr?id=242161221475139&ev=PageView&noscript=1"/>
<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-11061598180"/>
<Script
  id="google-tag"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11061598180');
    `,
  }}
  
/>

<Script
strategy="afterInteractive"
dangerouslySetInnerHTML={{
  __html:`
_linkedin_partner_id = "4366308";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
`}}
/>
<Script 




/>
<noscript>
<img height="1" width="1" className="hidden" alt="" src="https://px.ads.linkedin.com/collect/?pid=4366308&fmt=gif" />
</noscript>

  <SessionProvider session={session}>
<Announce/>
  {showHeader && <Navbarthree/> }
    
      <Component {...pageProps} />
     
      <Footer/>

      <FooterJobs/>
      
  </SessionProvider>
     
   </div>
  )
}

export default MyApp;