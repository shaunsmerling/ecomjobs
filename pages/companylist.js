import React from 'react';
import Link from "next/link"
import { NextSeo } from 'next-seo';

const companylist = () => {        
    return (
        <div className="py-12 bg-white sm:py-16 lg:py-20">
        <NextSeo
      title="Company List | eCommerce Jobs"
      description="Search our directory of eCommerce companies." 
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
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-2xl font-bold text-gray-900">Companies List</p>
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
                </div>
            </div>

            <div className="flow-root mt-8">
                <div className="-my-5 divide-y divide-gray-200">
                <Link href="/company/6365d74ea1e5cfc099f83bfd" >
                    <div className="py-5  hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0 ">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/colehaan.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Cole Haan</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">We are advocates of the extraordinary </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365d74ea1e5cfc099f83bfd"  className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>
                                    
                           
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6363a3a6d20d4aec518386c6" >
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/harrys.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Harrys</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Creating things more people like</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6363a3a6d20d4aec518386c6" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                               
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link  href="/company/6365c517a1e5cfc099f83bcc" >
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/henkel.jpeg"  alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Henkel</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Pioneers at heart for the good of generations</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365c517a1e5cfc099f83bcc" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6365c80aa1e5cfc099f83bd5">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full"  src="./images/garmin.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Garmin</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Engineered on the inside for life on the outside.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365c80aa1e5cfc099f83bd5" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6365ca58a1e5cfc099f83bdf">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/anthropologie.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Anthropologie</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Sharing Inspiration. Sending Love.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365ca58a1e5cfc099f83bdf" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6365cd5da1e5cfc099f83be5">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/marimekko.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Marimekko</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Empowering people to be happy.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365cd5da1e5cfc099f83be5" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6365d237a1e5cfc099f83bf0">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/thehundreds.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Hundreds</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">The Hundreds is Huge.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365d237a1e5cfc099f83bf0" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6365d478a1e5cfc099f83bf6">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/bose.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Bose</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Sound is Power.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365d478a1e5cfc099f83bf6" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6365d74ea1e5cfc099f83bfd">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/colehaan.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Cole Haan</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">We are advocates of the extraordinary.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365d74ea1e5cfc099f83bfd" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6365d9e8a1e5cfc099f83c03">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/amazonia.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Amazonia</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Australian Owned & Operated Health Food Business.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365d9e8a1e5cfc099f83c03" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link href="/company/6365dad2a1e5cfc099f83c08">
                    <div className="py-5 hover:bg-gray-100">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                            <div className="flex items-center flex-1 min-w-0">
                                <img className="flex-shrink-0  w-14 h-14 border-2 border-gray rounded-full" src="./images/casetify.jpeg" alt="" />
                                <div className="flex-1 min-w-0 ml-4">
                                    <p className=" text-xl font-bold text-gray-900 truncate">Casetify</p>
                                    <p className="mt-1  text-xl font-medium text-gray-500 truncate">Show Your Colors.</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                <a href="/company/6365dad2a1e5cfc099f83c08" title="" className=" text-xl font-medium text-gray-400 transition-all duration-200 hover:text-[#17614A] hover:font-bold"> Learn More </a>

                             
                             
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