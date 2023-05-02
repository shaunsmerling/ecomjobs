
import React from "react"
import {useRouter} from "next/router"

function FeaturedBrands() {
  const router = useRouter();

  function navigateToHireBest() {
    const hireBestElement = document.getElementById('hire-the-best');
    hireBestElement.scrollIntoView({ behavior: 'smooth' });
  }

 
  

return (

<section class="bg-white relative -mb-10">
  <div class="pb-4 px-4 -mb-4 mt-10 md:mt-28 mx-auto max-w-screen-xl text-center relative z-10">
    <h1 class="mb-6 text-3xl sm:text-4xl lg:text-7xl font-montserrat font-bold tracking-tight leading-none">
      Hire the best talent across the eCommerce industry
    </h1>
    <div class="flex-1">
      <div class="absolute transition-all duration-1000 opacity-70 inset-0 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <button onClick={navigateToHireBest} class="inline-flex relative items-center justify-center w-full sm:w-auto lg:px-40 py-3 sm:py-3.5 text-md font-montserrat text-white transition-all duration-200 bg-[#709771] border border-transparent rounded-lg hover:bg-[#5a795a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
        Post A Job
      </button>
    </div>
  </div>
  <p class="mt-4 text-sm text-center font-montserrat font-medium">Save up to 50% off - <a target="_blank" href="/bulkdiscounts" class="text-sky-300 underline font-bold">Buy a Bundle</a></p> 
  <ul class="flex flex-col  sm:flex-row items-center justify-center justify-start mt-20 space-y-6 sm:space-y-0 sm:space-x-8">
    <li class="flex items-center">
      <img src="/shopify.png" class="h-8 sm:h-10 w-auto" alt="Shopify logo" />
      <span class="text-md font-medium -ml-2 text-gray-900 ">
        Reach Candidates with DTC Experience
      </span>
    </li>
    <li class="flex items-center mt-6 sm:mt-0">
      <img src="/google.png" class="h-8 sm:h-10 w-auto" alt="Google logo" />
      <span class="text-md font-medium text-gray-900 ml-2 sm:ml-4">
        Distributed Across Google Jobs Network
      </span>
    </li>
    <li class="flex items-center mt-6 sm:mt-0">
      <img src="/email.png" class="h-8 sm:h-10 w-auto" alt="Email icon" />
      <span class="text-md font-medium text-gray-900 ml-2 sm:ml-4">
        Reach Our Highly Targeted Email List
      </span>
    </li>
  </ul>
</section>



)


}


export default FeaturedBrands