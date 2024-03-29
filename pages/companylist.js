import React from 'react';
import Link from "next/link"
import { NextSeo } from 'next-seo';

const companylist = () => {        

 

    return (
        <div className="py-12 bg-gray-900  sm:py-16 lg:py-20">
        <NextSeo
      title="Company List | eCommerce Jobs"
      description="Search our directory of eCommerce companies. Find the brand you want to work for." 
      openGraph={{
        url: 'https://ecomportal.co/companylist',
        title: 'Company List | eCommerce Jobs',
        description: 'Search our directory of eCommerce companies. Find the brand you want to work for.',
        images: [
            {
                url: 'https://ecomportal.co/images/logo.png',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
            },
        ],
        
      }}
      twitter={{
        site: '@ecomprtal',
        cardType: 'Summary',
        image: "/logo.png"
      }}
    />
    <div className="-mt-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div class=" my-8 mb-20 text-center">
<h1 class="text-2xl text-[#17614A] md:text-4xl font-bold block md:inline text-blue-brand">Search our company list. </h1>
<h2 class="text-xl text-white md:text-4xl block md:inline font-normal md:font-light">Find a job at one of these ecommerce brands.</h2>
</div>
                {/* <div>
                    <p className="text-2xl font-bold text-white">Companies List</p>
                    <p className="mt-1  text-xl font-medium text-gray-500">Search through our directory of brands hiring for roles</p>
                </div>

                <div className="mt-4 sm:mt-0">
                    <label for="" className="sr-only"> Search brands</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input type="search" name="" id="" className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm: text-xl" placeholder="Search App" />
                    </div>
                </div> */}
            </div>

            <div className="flow-root mt-8">
                <div className="-my-5 divide-y divide-gray-200">
                <Link legacyBehavior href="/company/cole-haan-85896455" >
                    <div className="py-5 ">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0 ">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/colehaan.jpeg" alt="Cole Haan Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Cole Haan</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">We are advocates of the extraordinary </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/cole-haan-85896455"  className=" hidden lg:flex text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>
                                    
                           
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior href="/company/harry's-inc-57816028" >
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"   className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/harrys.jpeg" alt="Harrys Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Harrys</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Creating things more people like</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/harry's-inc-57816028" title="" className="hidden lg:flex text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                               
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link  legacyBehavior href="/company/henkel-91731948" >
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/henkel.jpeg"  alt="Henkel Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Henkel</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Pioneers at heart for the good of generations</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/henkel-91731948" title="" className=" hidden lg:flex text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior href="/company/garmin-25074268">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full"  src="./images/garmin.jpeg" alt="Garmin Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Garmin</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Engineered on the inside for life on the outside.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/garmin-25074268" title="" className=" hidden lg:flex text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior href="/company/anthropologie-42133316">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/anthropologie.jpeg" alt="Anthropologie Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Anthropologie</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Sharing Inspiration. Sending Love.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/anthropologie-42133316" title="" className="hidden lg:flex  text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior href="/company/marimekko-29768936">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/marimekko.jpeg" alt="Marimekko Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Marimekko</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Empowering people to be happy.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/marimekko-29768936" title="" className="hidden lg:flex text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior href="/company/the-hundreds-49944881">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/thehundreds.jpeg" alt="The Hundreds Logo " />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Hundreds</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">The Hundreds is Huge.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/the-hundreds-49944881" title="" className=" hidden lg:flex text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior  href="/company/bose-36965113">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/bose.jpeg" alt="Bose Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Bose</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Sound is Power.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/bose-36965113" title="" className="hidden lg:flex  text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior href="/company/cole-haan-85896455">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/colehaan.jpeg" alt="Cole Haan Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Cole Haan</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">We are advocates of the extraordinary.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/cole-haan-85896455" title="" className="hidden lg:flex  text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior href="/company/amazonia-57058216">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/amazonia.jpeg" alt="Amazonia Logo " />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Amazonia</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Australian Owned & Operated Health Food Business.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/amazonia-57058216" title="" className="hidden lg:flex  text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link legacyBehavior href="/company/casetify-94845554">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img loading="lazy"  className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/casetify.jpeg" alt="Casetify Logo" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-white truncate">Casetify</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Show Your Colors.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/casetify-94845554" title="" className="hidden lg:flex  text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>

                </div>
            </div>
        </div>
    </div>
</div>

    )
}
export default companylist;