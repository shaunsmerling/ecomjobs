import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/index"
import FooterEmail from "../components/Footer/footerEmail"
import FooterCities from "../components/Footer/footerCities"
import FooterJobs from "../components/Footer/footerJobs"
import FooterRoles from "../components/Footer/footerRoles"
import Link from "next/link";
import "@stripe/stripe-js";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  InfiniteHits,
} from "react-instantsearch-hooks-web";
import { NextSeo } from "next-seo";
import CustomSearchBox from "../custom-algolia-component/CustomSearchBox";
import LogoBanner from "../components/logobanner";
import CompanyData from "../components/CompanyData";
import FeaturedBrands from "../components/featuredBrands";
import Filter from "../components/Filter";
import FilterIcon from "../components/icons/FilterIcon";
import Close2 from "../components/icons/Close2";
import { useSession } from "next-auth/react";


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
        title="Find Jobs In the eCommerce Industry"
        description="Join an eCommerce brand. Help shape the future by working with some of the fastest growing Direct-To-Consumer companies."
        openGraph={{
          url: 'https://ecomportal.co',
          title: "Find Jobs In the eCommerce Industry",
          description: "Join an eCommerce brand. Help shape the future by working with some of the fastest growing Direct-To-Consumer companies.",
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
      {/* {!session ? ( */}
        <div>
        <div className="relative font-Studio6">
          <FeaturedBrands/>
          {/* <HeroBanner /> */}
       
          {/* <div className="mb-10">
            <LogoBanner />
          </div> */}
        </div>
        <div className="flex flex-row justify-between items-start px-7 xl:px-10 2xl:px-32 gap-6 mb-5">
          <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
            <Configure hitsPerPage={10} />

    
            <div className="max-w-xs w-full hidden lg:block">
              <Filter
                clearFilter={clearFilter}
                setClearFilter={setClearFilter}
              />
            </div>
            

            <div className="flex font-Studio6 flex-col w-full gap-4">
              <Link href="https://insightai.beehiiv.com/subscribe">
            <div id="sponsor_1" class="mb-4 lg:ml-4 lg:mr-2 sm:mx-20 rounded-md cursor-pointer border border-solid  border-black transform transition duration-300 hover:-translate-y-1 hover:shadow-lg ">
    <div class="px-2  py-2 py-md-3 ">
        <div class="flex flex-col md:flex-row justify-between">
            <div class="flex items-center">
                <img class="rounded mr-0 mr-md-3 border border-solid border-insightblue h-12" src="https://ecomportal-images.storage.googleapis.com/images/insight.png"/>
                <a aria-label="Open SideShift.ai website" rel="noopener" data-turbo="false"  href="https://www.theinsightai.com"></a>
                <div className="ml-4"> 
                    <a aria-label="Open SideShift.ai website" rel="noopener" data-turbo="false" class="text-purple-500 hover:text-purple-600" href="https://insightai.beehiiv.com/subscribe">
                        <div class="font-bold text-lg hidden md:block text-insightblue">Leverage AI to 1000x productivity</div>
                        <div class="text-sm font-semibold  text-insightblue md:hidden">Leverage AI to 1000x productivity</div>
                    </a>
                    <a aria-label="Open SideShift.ai website" rel="noopener" data-turbo="false" class="block text-insightblue text-xs mt-0 md:mt-1"  href="https://insightai.beehiiv.com/subscribe">by the <b>InsightAI</b> newsletter</a>
                </div>
                {/* <a aria-label="Open SideShift.ai website" rel="noopener" data-turbo="false" class="my-btn-sm text-white bg-purple-500  rounded-md px-4 md:hidden text-xs  border border-solid border-purple-500  "  href="https://www.theinsightai.com">Learn More</a> */}
            </div>
         
            <div class="my-auto md:pl-3 pl-0">
                <a onmouseover="this.style.cssText='background-color: #be8fdb; color: black; border-style: solid; border-color: #be8fdb; box-shadow: 0px 0px 6px 3px #fe52ad;'" onmouseout="this.style.cssText='text-decoration: none; color: #be8fdb; border-style: solid; border-color: #be8fdb; box-shadow: 0px 0px 6px 3px #fe52ad;'" rel="noopener" data-turbo="false" class="my-btn-sm text-xs text-white bg-insightblue border border-solid border-black hidden md:block py-1 px-2 rounded-md" target="_blank" href="https://insightai.beehiiv.com/subscribe">Learn More</a>
            </div>
        </div>
    </div>
</div>
</Link>

              <div className="p-2 lg:p-4  searchBox -mb-4 lg:mb-0.5 -mx-8 lg:-mx-0 flex flex-row justify-center items-center gap-3  ">
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
                    <span className="font-Studio6 font-medium text-sm leading-30 text-lightGreen-300 hidden md:inline-block">
                      Filter
                    </span>
                  </button>
                </div>
              </div>
              {/* View Data Section */}
              <div className="-mx-10 mt-6 lg:-mx-0">
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
                <div className="max-w-xs mx-auto">
                  <Filter
                    clearFilter={clearFilter}
                    setClearFilter={setClearFilter}
                  />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
        {/* </div> )  :  (   */}
        {/* <div className="flex flex-row justify-between items-start px-7 xl:px-10 2xl:px-32 gap-6 mb-5">
          <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
            <Configure hitsPerPage={10} />

   
            <div className="max-w-xs w-full hidden lg:block">
              <Filter
                clearFilter={clearFilter}
                setClearFilter={setClearFilter}
              />
            </div>

            <div className="flex flex-col w-full gap-4">
              <div className="p-2 lg:p-4 border rounded-md border-lightGray-100 searchBox mb-0.5 flex flex-row justify-center items-center gap-3 lg:gap-5">
          
                <div className="w-full">
                  <CustomSearchBox clearFilter={clearFilter} />
                </div>
              
                <div className="h-12 self-end lg:hidden">
                  <button
                    className="h-full flex flex-row justify-center items-center gap-2 border border-lightGreen-300 rounded-md px-4 w-auto"
                    onClick={() => setFilterModelMobile(!filterModelMobile)}
                  >
                    <FilterIcon className="text-white" />
                    <span className="font-Poppins font-medium text-sm leading-30 text-white hidden md:inline-block">
                      Filter
                    </span>
                  </button>
                </div>
              </div>
       
              <div className="border border-lightGray-100 rounded-md p-6 min-h-[500px]">
                <InfiniteHits hitComponent={CompanyData} showPrevious={false} />
              </div>
            </div>

         
            <div
              className={`lg:hidden filterModelAnimation bg-lightGreen-50 w-full overflow-y-auto h-screen py-4 fixed top-0 left-0 ${filterModelMobile ? "block" : "hidden"
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
                <div className="max-w-xs mx-auto">
                  <Filter
                    clearFilter={clearFilter}
                    setClearFilter={setClearFilter}
                  />
                </div>
              </div>
            </div>
          </InstantSearch>
          </div>
      )} */}
      <FooterEmail/>
      <Footer/>
      <FooterCities/>
      <FooterJobs/>
      {/* <FooterRoles/> */}
      </div>
      </div>
    </>
  );
}


