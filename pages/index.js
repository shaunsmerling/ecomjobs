import Head from 'next/head';
import React from 'react'
import BannerPage from "../components/BannerPage"
import "@stripe/stripe-js"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList, SearchBox, Hits} from 'react-instantsearch-hooks-web';
import Hit from "../components/Hit"
import {FacetDropdown} from "/components/FacetDropdown"



export default function HomePage() {


    const searchClient = algoliasearch('RCW293MLIV', 'bc44fb196bcec6b9602b254bc96f6e71');




  return (
    <>
    <Head>
        <title>The #1 eCommerce Job Board</title>
    </Head>
          <BannerPage />
            <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
                <div className=" mt-12 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-gray-200 rounded-lg align-center drop-shadow my-10 mb-10 mx-4 lg:ml-20 lg:mr-16 ">
                <div className="rounded-lg bg-white border border-black/10 overflow-hidden">
                <div className="ml-2 -mr-6">
                <p className="mt-2 ml-1">What Job Are You Looking For?</p>
                <div className="mt-2 mr-10 mb-2">
                <SearchBox 
                  autofocus={true}
                  placeholder="Search..."
                  
        
                /> 
  
               
                </div>
                </div>
                </div>
                </div>
               
              
                <div className="w-max  flex mx-auto mb-12 text-center drop-shadow lg:align-center ">
                <FacetDropdown  closeOnChange={() => window.innerWidth >= 375} 
              buttonText={({ refinements }) => {
                              return `Job Type (${refinements.length}) `;  }}>
              <RefinementList attribute="job_type" />
              </FacetDropdown>
              <FacetDropdown  
              closeOnChange={() => window.innerWidth >= 375} 
              buttonText={({ refinements }) => {
                              return `Job Category (${refinements.length}) `;  }}>
              <RefinementList attribute="job_category" />
              </FacetDropdown>
               
               <FacetDropdown 
              closeOnChange={() => window.innerWidth >= 375} 
              classNames={{ root: 'my-LocDropdown' }}
              buttonText={({ refinements }) => {
                              return `Location (${refinements.length}) `;  }}>
              <RefinementList attribute="location" />
              </FacetDropdown>
              </div>
           
              <div class="text-center mx-20 lg:mx-0 -mt-6 mb-6 py-4 lg:px-4">
  <div class="p-2 bg-[#17614A] items-center text-white text-sm leading-none rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-[#26EB6B] uppercase px-3 py-1 text-xs text-black font-bold mr-3">New</span>
    <span class="font-semibold mr-1 -ml-1 text-left flex-auto"> 97 jobs have been recently added</span>

  </div>
  
  
</div>


                <div className="ml-2 mr-2 mb-2 -mt-2">
                <Hits hitComponent={Hit}/>
                </div>
            </InstantSearch>
           
    </>
  );
}
