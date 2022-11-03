import Head from 'next/head';
import React from 'react'
import HeroBanner from "../components/HeroBanner"
import "@stripe/stripe-js"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList, SearchBox, Hits} from 'react-instantsearch-hooks-web';
import Hit from "../components/Hit"
import {FacetDropdown} from "/components/FacetDropdown"
import Featured from "../components/featured"



export default function HomePage() {


    const searchClient = algoliasearch('RCW293MLIV', 'bc44fb196bcec6b9602b254bc96f6e71');




  return (
    <>
    <Head>
        <title>The #1 eCommerce Job Board</title>
    </Head>
          <HeroBanner />
          <Featured/>
            <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
            <h2 className="mx-auto text-center text-3xl font-bold">Search Job Titles or Company Names</h2>
           <div className=" mt-12 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-gray-200 rounded-lg align-center drop-shadow my-10 mb-10 mx-4 lg:ml-20 lg:mr-16 ">
                <div className="rounded-lg bg-white border border-black/10 overflow-hidden">
                <div className="ml-2 -mr-6">
                <div className="mt-2 mr-10 mb-2">
                <SearchBox 
                  autofocus={true}
                  placeholder="Search..."
                  
        
                /> 
  
               
                </div>
                </div>
                </div>
                </div> 
               
               
                <div className="flex mt-10 px-2 drop-shadow - w-max  mb-10  lg:w-max  lg:flex lg:mx-auto lg:mb-12 lg:text-center lg:drop-shadow lg:align-center ">
                <div className="mb-4 ">
                <FacetDropdown  closeOnChange={() => window.innerWidth >= 400} 
              buttonText={({ refinements }) => {
                              return `Job Type (${refinements.length}) `;  }}>
              <RefinementList attribute="job_type" />
              </FacetDropdown>
              </div>
              <div className="mb-4 ">
              <FacetDropdown  
              closeOnChange={() => window.innerWidth >= 400} 
              buttonText={({ refinements }) => {
                              return `Category (${refinements.length}) `;  }}>
              <RefinementList attribute="job_category" />
              </FacetDropdown>
               </div>
               <div className="mb-4">
               <FacetDropdown 
              closeOnChange={() => window.innerWidth >= 400} 
              classNames={{ root: 'my-LocDropdown' }}
              buttonText={({ refinements }) => {
                              return `Location (${refinements.length}) `;  }}>
              <RefinementList attribute="location" />
              </FacetDropdown>
              </div>
              </div>
           
              <div class="text-center mx-20 lg:mx-0 -mt-6 mb-6 py-4 lg:px-4">
  <div class="p-2 bg-[#17614A] items-center text-white text-sm leading-none rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full uppercase py-1 text-xs text-black font-bold mr-3"> <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg></span>
    <span class="font-semibold mr-1 -ml-1 text-left flex-auto"> 97 New Jobs Added</span>

  </div>
  
  
</div>


                <div className="ml-2 mr-2 mb-2 -mt-2">
                <Hits hitComponent={Hit}/>
                </div>
            </InstantSearch>
           
    </>
  );
}
