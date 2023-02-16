import React from 'react';
import '../global.css'
import Navbarthree from "../components/navBarThree"
import Script from "next/script"
import { SessionProvider } from "next-auth/react"; 
import { useRouter } from "next/router";







function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
const showHeader = router.pathname === '/signup' || router.pathname === "/createaccount" ? false : true;
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
<noscript>
<img height="1" width="1" className="hidden" alt="" src="https://px.ads.linkedin.com/collect/?pid=4366308&fmt=gif" />
</noscript>

  <SessionProvider session={session}>
  {showHeader && <Navbarthree/> }
    
      <Component {...pageProps} />
      {/* <Footer/> */}
  </SessionProvider>
     
   </div>
  )
}

export default MyApp;