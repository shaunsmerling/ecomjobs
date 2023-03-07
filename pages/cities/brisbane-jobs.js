import React, { useEffect, useState } from "react";
import "@stripe/stripe-js";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  InfiniteHits,
} from "react-instantsearch-hooks-web";
import { NextSeo } from "next-seo";
import CustomSearchBox from "../../custom-algolia-component/CustomSearchBox";
import CompanyData from "../../components/CompanyDataLayer";
import Filter from "../../components/Filter";
import FilterIcon from "../../components/icons/FilterIcon";
import Close2 from "../../components/icons/Close2";
import { useSession } from "next-auth/react";
import EmailBar from "../../components/EmailBar"

export default function HomePage() {
  const [filterModelMobile, setFilterModelMobile] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);
  const searchClient = algoliasearch(
    "RCW293MLIV",
    "bc44fb196bcec6b9602b254bc96f6e71"
  );
  const { data: session } = useSession();

  useEffect(() => {
    if (typeof window !== undefined) {
      if (filterModelMobile) {
        document.body.classList.add("lg:overflow-auto", "overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }, [filterModelMobile]);

  return (
    <>
      <NextSeo
        title="Find Jobs From eCommerce Brands in Brisbane"
        description="Join an eCommerce brand hiring in Brisbane"
        openGraph={{
          url: 'https://ecomportal.co',
          title: "Find eCommerce Jobs in Brisbane",
          description: "Join an eCommerce brand hiring in Brisbane",
          images: [
              {
                  url: 'https://ecomportal.co/images/logo.png',
                  width: 800,
                  height: 600,
                  alt: 'Og Image Alt',
              },
          ],
        }}
      />
    <div>
        <div>
        <div className="relative">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-btn rounded-full text-black px-4 py-1.5 mr-3">New</span> <span class="text-sm text-white font-medium">0 jobs from Brisbane have been uploaded this week</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">eCommerce Jobs in Brisbane</h1>
        <p class="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 ">Browse our curated list of eCommerce brands hiring within <span className="font-bold text-black italic">Brisbane</span></p>
        </div>
        </div>
        <div className="flex  bg-d2c flex-row justify-between items-start px-7 xl:px-10 2xl:px-32 gap-6 mb-5">
          <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
            <Configure hitsPerPage={10} filters={`city:"Brisbane, Queensland"`}/>

            

            <div className="flex flex-col w-full gap-4">
              <div className="p-2 lg:p-4  searchBox mb-0.5 -mx-8  flex flex-row justify-center items-center gap-3 lg:gap-5">
                {/* Custom Search Box */}
                <div className="w-full">
                  <CustomSearchBox clearFilter={clearFilter} />
                </div>
                {/* Filter Button For Mobile Filter Open */}
                <div className="h-12 self-end lg:hidden">
                  <button
                    className="h-full flex flex-row justify-center items-center gap-2 border border-lightGreen-300 rounded-md px-4 w-auto"
                    onClick={() => setFilterModelMobile(!filterModelMobile)}
                  >
                    <FilterIcon className="text-lightGreen-300" />
                    <span className="font-Poppins font-medium text-sm leading-30 text-lightGreen-300 hidden md:inline-block">
                      Filter
                    </span>
                  </button>
                </div>
              </div>
              {/* View Data Section */}
              <div className=" -mx-10 p-4 md:p-6 min-h-[500px]">
                <InfiniteHits hitComponent={CompanyData} showPrevious={false} />
              </div>
              <div>
                {/* <Grid arrOfObj={arrOfObj}/> */}
              </div>
            </div>

            {/* Filter Model For Mobile View */}
            <div
              className={`lg:hidden filterModelAnimation bg-white w-full overflow-y-auto h-screen py-4 fixed top-0 left-0 ${filterModelMobile ? "block" : "hidden"
                }`}
            >
              <div className="flex justify-end items-center max-w-md mx-auto mb-5 pr-5">
                <div>
                  <button
                    onClick={() => setFilterModelMobile(false)}
                    className="border border-lightGray-100 bg-white rounded-full p-1 shadow-md"
                  >
                    <Close2 />
                  </button>
                </div>
              </div>
              <div>
                {/* <div className="max-w-xs mx-auto">
                  <Filter
                    clearFilter={clearFilter}
                    setClearFilter={setClearFilter}
                  />
                </div> */}
              </div>
            </div>
          </InstantSearch>
        </div>
        <EmailBar props="Brisbane"/>
        </div> 
        </div>
    </>
  );
}

