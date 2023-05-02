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
        title="Find a Social Media Coordinator Job"
        description="Join an eCommerce brand hiring Social Media Coordinator"
        openGraph={{
          url: 'https://ecomportal.co',
          title: "Find a Social Media Coordinator Job",
          description: "Join an eCommerce brand hiring Social Media Coordinator",
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
        
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Social Media Coordinator Jobs</h1>
        <p class="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 ">Browse our curated list of eCommerce brands hiring <span className="font-bold text-black italic">Social Media Coordinators</span></p>
        </div>
        </div>
        <div className="flex mx-4 lg:mx-20 flex-row justify-between items-start px-7 xl:px-10 2xl:px-32 gap-6 mb-5">
          <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
            <Configure hitsPerPage={10} filters={`job_position:"Social Media Coordinator" OR job_position:"Social Media Manager"`}/>

            

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
        <EmailBar props="social media"/>
        </div> 
        </div>
    </>
  );
}

