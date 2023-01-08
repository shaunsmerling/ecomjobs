import React, { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
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
import Filter from "../components/Filter";
import FilterIcon from "../components/icons/FilterIcon";
import Close2 from "../components/icons/Close2";

export default function HomePage() {
  const [filterModelMobile, setFilterModelMobile] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);
  const searchClient = algoliasearch(
    "RCW293MLIV",
    "bc44fb196bcec6b9602b254bc96f6e71"
  );

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
      <div className="relative">
        <div>
          <HeroBanner />
          {/* <Featured /> */}
          <div className="mb-10">
            <LogoBanner />
          </div>
        </div>
        <div className="flex flex-row justify-between items-start px-7 xl:px-10 2xl:px-32 gap-6 mb-5">
          <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
            <Configure hitsPerPage={10} />

            {/* Filter Section */}
            <div className="max-w-xs w-full hidden lg:block">
              <Filter
                clearFilter={clearFilter}
                setClearFilter={setClearFilter}
              />
            </div>

            <div className="flex flex-col w-full gap-4">
              <div className="p-2 lg:p-4 border rounded-md border-lightGray-100 searchBox mb-0.5 flex flex-row justify-center items-center gap-3 lg:gap-5">
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
              <div className="border border-lightGray-100 rounded-md p-6 min-h-[500px]">
                <InfiniteHits hitComponent={CompanyData} showPrevious={false} />
              </div>
            </div>

            {/* Filter Model For Mobile View */}
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
      </div>
    </>
  );
}

// import React from "react";
// import HeroBanner from "../components/HeroBanner";
// import "@stripe/stripe-js";
// import algoliasearch from "algoliasearch/lite";
// import {
//   InstantSearch,
//   RefinementList,
//   SearchBox,
//   Hits,
// } from "react-instantsearch-hooks-web";
// import Hit from "../components/Hit";
// import { FacetDropdown } from "/components/FacetDropdown";
// import Featured from "../components/featured";
// import { NextSeo } from "next-seo";
// import { useSession } from "next-auth/react";
// import LogoBanner from "../components/logobanner";
// import JobsByCompany from "../components/jobsByCompany";

// export default function HomePage() {
//   const { data: session, status } = useSession();

//   // const {user, error, isLoading } = useUser()

//   // if (user) {
//   //   return (
//   //     <>
//   //       <h1>Welcome {user.name}</h1>
//   //       <a href="/api/auth/logout">Logout</a>
//   //     </>
//   //   )
//   // }

//   // return <a href="/api/auth/login">login</a>

//   const searchClient = algoliasearch(
//     "RCW293MLIV",
//     "bc44fb196bcec6b9602b254bc96f6e71"
//   );

//   return (
//     <>
//       <NextSeo
//         title="Jobs For the eCommerce Industry"
//         description="Join an eCommerce brand. Help shape the future by working with some of the fastest growing Direct-To-Consumer companies."
//       />
//       {!session || status === "loading" ? (
//         <div>
//           <HeroBanner />
//           {/* <Featured /> */}
//           <div className="mb-10">
//             <LogoBanner />
//           </div>
//           <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
//             <h1 className="text-center -mb-20 font-bold text-[30px]">
//               {" "}
//               Search Our List Of{" "}
//               <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
//                 {" "}
//                 Over 2000+ Brands Hiring
//               </span>{" "}
//             </h1>
//             <div className=" mt-32 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-gray-200 rounded-lg align-center drop-shadow my-10 mb-10 mx-4 lg:mx-52  ">
//               <div className="rounded-lg bg-white border-2 border-black/10 overflow-hidden">
//                 <div className="ml-2 -mr-6">
//                   <div className="mt-2 mr-10 mb-2">
//                     <SearchBox
//                       autofocus={true}
//                       placeholder="Search by job titles, companies, or keywords...."
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap w-100 justify-center  mt-10 px-2 drop-shadow -  mb-10 mx-auto lg:w-max  lg:flex lg:mx-auto lg:mb-12 lg:text-center lg:drop-shadow lg:align-center ">
//               <div className="mb-4 ">
//                 <FacetDropdown
//                   closeOnChange={() => window.innerWidth >= 400}
//                   buttonText={({ refinements }) => {
//                     return `Job Type (${refinements.length}) `;
//                   }}
//                 >
//                   <RefinementList attribute="job_type" />
//                 </FacetDropdown>
//               </div>
//               <div className="mb-4 ">
//                 <FacetDropdown
//                   closeOnChange={() => window.innerWidth >= 400}
//                   buttonText={({ refinements }) => {
//                     return `Category (${refinements.length}) `;
//                   }}
//                 >
//                   <RefinementList attribute="job_category" />
//                 </FacetDropdown>
//               </div>
//               <div className="mb-4">
//                 <FacetDropdown
//                   closeOnChange={() => window.innerWidth >= 400}
//                   classNames={{ root: "my-LocDropdown" }}
//                   buttonText={({ refinements }) => {
//                     return `Location (${refinements.length}) `;
//                   }}
//                 >
//                   <RefinementList attribute="location" />
//                 </FacetDropdown>
//               </div>
//             </div>

//             <div className="ml-2 mr-2 mb-2 -mt-2">
//               <Hits hitComponent={Hit} />
//             </div>
//           </InstantSearch>
//           {/* <JobsByCompany /> */}
//         </div>
//       ) : (
//         <InstantSearch searchClient={searchClient} indexName="ecomjobs_index">
//           <h3 class="leading-[3rem] mx-auto  text-center font-bold tracking-tighter text-black text-5xl max-w-2xl ">
//             Search by Job Titles or Company Name
//           </h3>

//           <div className=" mt-12 md:grid-cols-3 divide-y md:divide-x md:divide-y-0 divide-gray-200 rounded-lg align-center drop-shadow my-10 mb-10 mx-4 lg:mx-52  ">
//             <div className="rounded-lg bg-white border-2 border-black/10 overflow-hidden">
//               <div className="ml-2 -mr-6">
//                 <div className="mt-2 mr-10 mb-2">
//                   <SearchBox autofocus={true} placeholder="Search..." />
//                   {/* <Search/> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap w-100 justify-center  mt-10 px-2 drop-shadow -  mb-10 mx-auto lg:w-max  lg:flex lg:mx-auto lg:mb-12 lg:text-center lg:drop-shadow lg:align-center ">
//             <div className="mb-4 ">
//               <FacetDropdown
//                 closeOnChange={() => window.innerWidth >= 400}
//                 buttonText={({ refinements }) => {
//                   return `Job Type (${refinements.length}) `;
//                 }}
//               >
//                 <RefinementList attribute="job_type" />
//               </FacetDropdown>
//             </div>
//             <div className="mb-4 ">
//               <FacetDropdown
//                 closeOnChange={() => window.innerWidth >= 400}
//                 buttonText={({ refinements }) => {
//                   return `Category (${refinements.length}) `;
//                 }}
//               >
//                 <RefinementList attribute="job_category" />
//               </FacetDropdown>
//             </div>
//             <div className="mb-4">
//               <FacetDropdown
//                 closeOnChange={() => window.innerWidth >= 400}
//                 classNames={{ root: "my-LocDropdown" }}
//                 buttonText={({ refinements }) => {
//                   return `Location (${refinements.length}) `;
//                 }}
//               >
//                 <RefinementList attribute="location" />
//               </FacetDropdown>
//             </div>
//           </div>

//           <div className="ml-2 mr-2 mb-2 -mt-2">
//             <Hits hitComponent={Hit} />
//           </div>
//         </InstantSearch>
//       )}
//     </>
//   );
// }
