import React from 'react'
import HeroBanner from "../components/HeroBanner"
import "@stripe/stripe-js"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList, SearchBox, Hits} from 'react-instantsearch-hooks-web';
import Hit from "../components/Hit"
import {FacetDropdown} from "/components/FacetDropdown"
import Featured from "../components/featured"
import { NextSeo } from 'next-seo';



export default function HomePage() {


    const searchClient = algoliasearch('RCW293MLIV', 'bc44fb196bcec6b9602b254bc96f6e71');




  return (
    <>
    <NextSeo
      title="Jobs For the eCommerce Industry"
      description="Join an eCommerce brand. Help shape the future by working with some of the fastest growing Direct-To-Consumer companies." 
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
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
          <HeroBanner />
          <Featured/>
            <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
            <h2 className="mx-auto text-center text-3xl font-bold">Search Job Titles or Company Names</h2>
           <div className=" mt-12 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-gray-200 rounded-lg align-center drop-shadow my-10 mb-10 mx-4 lg:ml-20 lg:mr-16 ">
                <div className="rounded-lg bg-white border-2 border-black/10 overflow-hidden">
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
               
               
                <div className="flex mt-10 px-2 drop-shadow - w-max  mb-10 mx-auto lg:w-max  lg:flex lg:mx-auto lg:mb-12 lg:text-center lg:drop-shadow lg:align-center ">
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
           
             

                <div className="ml-2 mr-2 mb-2 -mt-2">
                <Hits hitComponent={Hit}/>
                </div>
            </InstantSearch>
           
    </>
  );
}
