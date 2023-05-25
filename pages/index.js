import React, { useEffect, useState } from "react";
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
import { Autocomplete }from "../components/AutoComplete.js"


export default function HomePage() {
  const [filterModelMobile, setFilterModelMobile] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);
  const searchClient = algoliasearch(
    "RCW293MLIV",
    "bc44fb196bcec6b9602b254bc96f6e71"
  );
  const { data: session } = useSession();


  const fetchUser = async () => {
    if (session) {
      // Make a GET request to check if the user exists in your database
      const res = await fetch(`/api/users`);
      const data = await res.json();
      let userExists = false;

      // Check if the user already exists in the database
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === session.user.email) {
          userExists = true;
          break;
        }
      }

      // If the user does not exist, make the POST request
      if (!userExists) {
        await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
            email: session.user.email,
            website_url: "",
            profilePicture: "",
            location: "",
            job_category: "",
            primary_role: "",
            years_of_exp: "",
            open_to_roles: "",
            bio: "",
            linkedin: "",
            twitter: "",
            github: "",
            work_exp_1: "",
            school_name: "",
            grad_year: "",
            degree: "",
            skills: [],
            achievements: "",
            jobIDs: [],
          })
        });
      }
    }
  };

  fetchUser()


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
        <div className="relative font-montserrant">
          <FeaturedBrands/>
          {/* <HeroBanner /> */}
       
          {/* <div className="mb-10">
            <LogoBanner />
          </div> */}
        </div>

 
        <div className="flex flex-row -mt-2 justify-between items-start px-7 xl:px-10 2xl:px-32 gap-6 mb-5">
  
          <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
            <Configure hitsPerPage={10} />

    
            <div className="max-w-xs w-full hidden lg:block">
              <Filter
                clearFilter={clearFilter}
                setClearFilter={setClearFilter}
              />
            </div>
            

            <div className="flex font-montserrant flex-col w-full gap-4">
  {/* Sponsorship Section */}
  <div className={`hidden lg:mx-auto border border-1 border-black w-full rounded-md lg:rounded-full lg:py-2 py-6 lg:flex items-center bg-[#edebea]`}>
    {/* Sponsorship Logo */}
    <img src="/spotlight.png" alt="Sponsor Logo" className="lg:flex w-10 h-10 ml-4 rounded-full" />
    
    <div className="lg:flex lg:flex-col justify-center ml-4 mb-4 lg:mb-0">
      {/* Sponsorship Heading */}
      <h1 className="mt-2 lg:mt-0 text-xl font-bold">The Spotlight</h1>
      {/* Sponsorship Text */}
      <p className="text-sm text-gray-500 mt-1">The latest developments in artificial intelligence, in less than 5 minutes per day</p>
    </div>

  {/* Sponsorship Call to Action Button */}
  <a href="https://thespotlight.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className=" bg-black text-white px-4 py-2 ml-4 lg:ml-auto lg:mr-10 rounded-lg transition duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-200">
    Join 3000+ readers
  </a>
  </div>


              <div className="p-2 lg:p-4  searchBox -mb-4 lg:mb-0.5 -mx-7 lg:-mx-0 flex flex-row justify-center items-center gap-3  ">
                {/* Custom Search Box */}
                
                <div className="w-full">
                
                  <CustomSearchBox  clearFilter={clearFilter}
                setClearFilter={setClearFilter} 
                searchClient={searchClient} />
                </div>
                {/* Filter Button For Mobile Filter Open */}
                <div className="h-12 self-end lg:hidden">
                  <button
                    className="h-full flex flex-row justify-center items-center gap-2 border border-lightGreen-300 rounded-md px-4 w-auto"
                    onClick={() => setFilterModelMobile(!filterModelMobile)}
                  >
                    <FilterIcon className="text-lightGreen-300" />
                    <span className="font-montserrant font-medium text-sm leading-30 text-lightGreen-300 hidden md:inline-block">
                      Filter
                    </span>
                  </button>
                </div>
              </div>
              {/* View Data Section */}
              <div className="-mx-6
               mt-6 lg:-mx-0">
                <InfiniteHits hitComponent={CompanyData} showPrevious={false} />
              </div>
              <div>
              </div>
            </div>

            {/* Filter Model For Mobile View */}
            <div
              className={`lg:hidden filterModelAnimation bg-white w-full overflow-y-auto h-full py-4 fixed top-0 left-0 ${filterModelMobile ? "block" : "hidden"
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

      </div>
      </div>
    </>
  );
}


