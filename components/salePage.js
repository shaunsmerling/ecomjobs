
import React from "react"
import {useRouter} from "next/router"

function FeaturedBrands() {
  const router = useRouter();

  function navigateToHireBest() {
    const hireBestElement = document.getElementById('hire-the-best');
    hireBestElement.scrollIntoView({ behavior: 'smooth' });
  }

 
  

return (

<section class="bg-white relative">
  
  <div class="pb-4 px-4 -mb-4 mt-28 mx-auto max-w-screen-xl text-center  relative z-10">
    <h1 class="mb-10 text-4xl lg:text-7xl  font-montserrat font-bold tracking-tight leading-none">Hire the best talent across <br></br>the eCommerce industry<br></br></h1>
      <div class="flex-1">

        <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
        <button onClick={navigateToHireBest} class="inline-flex relative items-center justify-center w-full sm:w-auto px-40 py-3 text-md  sm:py-3.5 font-montserrat text-white transition-all duration-200 bg-[#709771] border border-transparent rounded-lg hover:bg-[#5a795a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
          Post A Job
        </button>

      </div>
      </div>

      <p className="mt-4 text-sm text-center font-montserrant font-medium"> Save up to 50% off - <a target="_blank" href="/bulkdiscounts" className="text-sky-300 underline font-bold ">   Buy a Bundle  </a></p> 

      
      <ul class="flex items-center justify-center mt-20 space-x-6 sm:space-x-8">
              <li class="flex items-center">
              <img src="/shopify.png" className="h-10 w-auto " />
                <span class="text-md  font-montserrant text-gray-900 sm:text-sm">
                  {" "}
                  Reach Canidates <br></br> with DTC Experience {" "}
                </span>
              </li>

              <li class="flex items-center">
              <img src="/google.png" className="h-10 w-auto" />
                <span class="text-md  ml-4 font-montserrant text-gray-900 sm:text-sm">
                  {" "}
                  Distributed Across <br></br> Google Jobs Network <br></br>{" "}
                </span>
              </li>

              <li class="flex items-center">
              <img src="/email.png" className="h-10 w-auto " />
                <span class="text-md font-montserrant text-gray-900 sm:text-sm">
                  {" "}
                  Emailed To Our Growing List <br></br> (341+ new emails this week)
                </span>
              </li>
            </ul>
           


</section>


)


}


export default FeaturedBrands