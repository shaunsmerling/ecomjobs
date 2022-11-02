import React from 'react';
import Link from 'next/link';

const Blog = () => {        
    return (
         <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
          <h2 className="max-w-xs text-3xl font-bold text-gray-900 sm:text-4xl shrink-0">
            Get Insights About The eCommerce Industry
          </h2>
          <p className="max-w-xs mt-5 text-sm font-normal leading-6 text-gray-500 sm:mt-0">
            Your A-Z guide to the $27,000,000,000,000+ industry
          </p>
        </div>
             
        <div className="grid grid-cols-1 gap-6 px-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
        <Link href="/blog/first">
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:border-[#17614A] hover:border-2 hover:-translate-y-1">
               
              <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/googleshop.png" alt="">
                </img>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
                What is Google Shopping and How Does it Work?
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                How does Google Shopping work? And why are so many ecommerce retailers and entrepreneurs using Google Shopping to sell products and grow their brand?
                </p>
                </div>
           
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                    <a>
                     Marketing
                    </a>
                  </p>
                  <span className="text-sm font-medium text-gray-900">
                    •
                  </span>
                  <p className="text-sm font-medium text-gray-900">
                    7 Mins Read
                  </p>
               
                </div>

                <a href="/blog/first" title="" className="" role="button">
                  <svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-[#17614A]"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </Link>

          <Link href="/blog/second">
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:border-[#17614A] hover:border-2 hover:-translate-y-1">
               
              <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/shopblog.jpeg" alt="">
                </img>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
                How to Build Your Own Brand From Scratch in 7 Steps
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                Building a brand from the ground up that stands out is no easy task. What should it look like? How should it make people feel? Will it resonate with my target audience?
                </p>
                </div>
           
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                    <a>
                      Brand
                    </a>
                  </p>
                  <span className="text-sm font-medium text-gray-900">
                    •
                  </span>
                  <p className="text-sm font-medium text-gray-900">
                    8 Mins Read
                  </p>
               
                </div>

                <a href="/blog/second" title="" className="" role="button">
                  <svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-[#17614A]"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </Link>
          <Link href="/blog/third">
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:border-[#17614A] hover:border-2 hover:-translate-y-1">
               
              <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/dropship.jpeg" alt="">
                </img>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
                    What Is Dropshipping and How Does It Work? (2022)
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                Here is everything you need to know about the benefits of dropshipping for online store owners, and how you can start today.
                </p>
                </div>
           
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                    <a>
                     Logistics
                    </a>
                  </p>
                  <span className="text-sm font-medium text-gray-900">
                    •
                  </span>
                  <p className="text-sm font-medium text-gray-900">
                    6 Mins Read
                  </p>
               
                </div>

                <a href="/blog/third" title="" className="" role="button">
                  <svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-[#17614A]"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
    )
}
export default Blog;