import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script"



export default function Document() {
  return (
    <Html lang="en">
      <Head>
           
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/reset-min.css" integrity="sha256-QlHlZdbSVxaYkUHxhMFhAj/L3pJiW1LuomSCONXBWms=" crossorigin="anonymous"/> 
            <link rel="icon" href="../assets/favicon.ico" />
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/reset-min.css" integrity="sha256-QlHlZdbSVxaYkUHxhMFhAj/L3pJiW1LuomSCONXBWms=" crossorigin="anonymous"/>

            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          
      </Head>
      <body >
        <script src="https://cdn.jsdelivr.net/npm/react@16.8.4/umd/react.production.min.js" integrity="sha256-ctUamuIgSCQg1wsh8Iw0QbDXScmyXhjJ6lxYUscC3FA=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-dom@16.8.4/umd/react-dom.production.min.js" integrity="sha256-8uWWG/7CB3OS89Cw67+B++t6w0EMGfQE9C6OGps+Wd8=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-instantsearch-dom@6.7.0/dist/umd/ReactInstantSearchDOM.min.js" integrity="sha256-wggJgvcPaPOJnfujGmGMq7LzJgc7/EqEtLCW/BPZy7E=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4.14.2/dist/algoliasearch-lite.umd.js" integrity="sha256-aWejf9fvNnbIE3aZOzplg9y303hHjm4pdcT8aC7esdU=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4.14.2/dist/algoliasearch-lite.umd.js" integrity="sha256-aWejf9fvNnbIE3aZOzplg9y303hHjm4pdcT8aC7esdU=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/instantsearch.js@4.44/dist/instantsearch.production.min.js" integrity="sha256-qS7lCmzEsVAkea4ZvZmtHQpNYg/yElYL1wTBXE1x/QE=" crossorigin="anonymous"></script>
      
        
        <Main />
        <NextScript />
      </body>
      <footer>
      
      </footer>
    </Html>
  )
}