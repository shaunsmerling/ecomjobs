import React from 'react';
import Link from 'next/link';
import { useState, useEffect} from 'react';
import { NextSeo } from 'next-seo';

const Blog = () => {  

  // const [jobs, setJobs] = useState({
  //   company_name: "",
  //   job_type: "",
  //   job_position: "",
  //   job_url: "",
  // })

  // fetch("/api/jobs", {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .then((data) => setJobs(data));

  //   for (let i = 0; i < jobs.length; i++) {
  //     const data = jobs[i]
  //     console.log(`${data.company_name} is hiring a ${data.job_type} ${data.job_position}! Apply here: https://ecom-jobs.com/job/${jobs.job_url}`)
  //   }
    





    return (
      
         <section className="py-12 sm:py-16 lg:py-20">
           <NextSeo
      title="Blogs | eCommerce Jobs"
      description="Blog articles relating to marketing, logistics, product, and more." 
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
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
          <h2 className="max-w-xs mx-auto lg:mx-0 text-3xl font-bold text-gray-900 sm:text-4xl shrink-0">
            Get Insights About The eCommerce Industry
          </h2>
          <p className="max-w-xs mt-5 text-sm font-normal leading-6 text-gray-500 sm:mt-0">

          </p>
        </div>
             
        <div className="grid grid-cols-1 gap-6 px-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
        <Link passHref legacyBehavior  href="/blog/what-is-google-shopping">
          <a>
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg   hover:border-2 hover:-translate-y-1">
               
              <img loading="lazy" className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
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
                   
                     Marketing
                  
                  </p>
                  <span className="text-sm font-medium text-gray-900">
                    •
                  </span>
                  <p className="text-sm font-medium text-gray-900">
                    7 Mins Read
                  </p>
               
                </div>

              
                  <svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-[#17614A]"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
               
              </div>
            </div>
          </div>
          </a>
          </Link>

          <Link passHref legacyBehavior href="/blog/build-a-brand-on-shopify">
            <a>
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg   hover:border-2 hover:-translate-y-1">
               
              <img loading="lazy" className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
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
                    
                      Brand
                    
                  </p>
                  <span className="text-sm font-medium text-gray-900">
                    •
                  </span>
                  <p className="text-sm font-medium text-gray-900">
                    8 Mins Read
                  </p>
               
                </div>

            
                  <svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-[#17614A]"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
         
              </div>
            </div>
          </div>
          </a>
          </Link>

          <Link passHref legacyBehavior href="/blog/top-7-ecommerce-trends-in-2023">
            <a>
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg   hover:border-2 hover:-translate-y-1">
               
              <img loading="lazy" className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/ecomtrends.png" alt="">
                </img>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
                The Top 7 eCommerce Trends To Look Out For in 2023
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                The e-commerce industry is the future of buying and selling. As sales gain popularity among all age groups, the market is expected to hit almost 6.3 trillion dollars in 2022 and a 20.8% increase in 2023.
                </p>
                </div>
           
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                    
                     eCommerce Trends
                    
                  </p>
                  <span className="text-sm font-medium text-gray-900">
                    •
                  </span>
                  <p className="text-sm font-medium text-gray-900">
                    7 Mins Read
                  </p>
               
                </div>

                  <svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-[#17614A]"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
          
              </div>
            </div>
          </div>
          </a>
          </Link>

          <Link passHref legacyBehavior href="/blog/five-proven-methods-to-increase-your-shopify-brands-aov-in-2023">
            <a>
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg   hover:border-2 hover:-translate-y-1">
               
              <img loading="lazy"  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/aov.png" alt="">
                </img>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
                5 Proven Method's To Increase Your Shopify Brands AOV in 2023
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                In this article, we'll go over five tried-and-true methods that can help you boost your AOV and grow your business.
                </p>
                </div>
           
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                    
                     Brand
                    
                  </p>
                  <span className="text-sm font-medium text-gray-900">
                    •
                  </span>
                  <p className="text-sm font-medium text-gray-900">
                    7 Mins Read
                  </p>
               
                </div>

               
                  <svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-[#17614A]"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
         
              </div>
            </div>
          </div>
          </a>
          </Link>
         
          
        </div>
      </div>
    </section>
    )
}
export default Blog;