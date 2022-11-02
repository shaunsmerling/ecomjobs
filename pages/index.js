import Head from 'next/head';
import React from 'react'
import HeroBanner from "../components/Herobanner"
import "@stripe/stripe-js"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList, SearchBox, Hits} from 'react-instantsearch-hooks-web';
import Hit from "../components/Hit"
import {FacetDropdown} from "/components/FacetDropdown"
import Email from "../components/email"
import Featured from "../components/featured"



export default function HomePage() {


    const searchClient = algoliasearch('RCW293MLIV', 'bc44fb196bcec6b9602b254bc96f6e71');




  return (
    <>
    <Head>
        <title>The #1 eCommerce Job Board</title>
    </Head>
          <HeroBanner />
            <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
           
                <Featured/>
                <div className="flex mt-10 mx-auto px-2 drop-shadow   mb-10  lg:w-max lg:flex lg:mx-auto lg:mb-10 lg:text-center lg:drop-shadow lg:align-center ">
                <div className="mb-4 px-4">
                <FacetDropdown  closeOnChange={() => window.innerWidth >= 400} 
              buttonText={({ refinements }) => {
                              return `Job Type (${refinements.length}) `;  }}>
              <RefinementList attribute="job_type" />
              </FacetDropdown>
              </div>
              <div className="mb-4 px-4  ">
              <FacetDropdown  
              closeOnChange={() => window.innerWidth >= 400} 
              buttonText={({ refinements }) => {
                              return `Category (${refinements.length}) `;  }}>
              <RefinementList attribute="job_category" />
              </FacetDropdown>
               </div>
               <div className="mb-4 px-4">
               <FacetDropdown 
              closeOnChange={() => window.innerWidth >= 400} 
              classNames={{ root: 'my-LocDropdown' }}
              buttonText={({ refinements }) => {
                              return `Location (${refinements.length}) `;  }}>
              <RefinementList attribute="location" />
              </FacetDropdown>
              </div>
              </div>
           

                <div className="">
                <Hits hitComponent={Hit}/>
                </div>
            </InstantSearch>
           
    </>
  );
}
