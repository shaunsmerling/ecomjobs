import React from "react"
import Link from "next/link"
import { NextSeo } from "next-seo"
import {sanityClient, urlFor} from "../../sanity"



export const getServerSideProps = async () => {
  const query = `*[_type == "post" &&  "Print On Demand" in categories[]->title] {
    _id,  
    title,
    author -> {
      name,
      image
    },
      description,
      
      mainImage,
      slug
      
  }`
  
  const posts = await sanityClient.fetch(query)
  
  return {
    props: {
      posts,
    }
  } 
  }


export default function salaries({posts}) {

  console.log(posts.categories)

    return (
        <section className="py-12 sm:py-16 lg:py-20">
        <NextSeo
   title="Print On Demand | eComPortal"
   description="Everything to do with Print On Demand" 
   openGraph={{
     url: 'https://www.url.ie/a',
     title: "Print On Demand | eComPortal",
     description: "Everything to do with Print On Demand" ,
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
     site: '@cecomptral',
     cardType: 'summary',
     image: "/logo.png"
   }}
 />
   <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
     <div className="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
       <h2 className="max-w-xs text-3xl mx-auto sm:mx-0 font-bold text-black sm:text-4xl shrink-0">
       Everything to do with Print On Demand
       </h2>
       <p className="max-w-xs mt-5 text-sm font-normal leading-6 text-gray-500 sm:mt-0">

       </p>
     </div>
     <div className="grid grid-cols-1 gap-6 px-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
      {posts.map((post) => {
        return (
       <Link key={post._id} passHref legacyBehavior href={`/printondemand/post/${post.slug.current}`} >
<a>
            <div
              className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg   hover:border-2 hover:-translate-y-1">
               
  
                <img loading="lazy" className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={urlFor(post.mainImage).url()} alt="">
                  </img>
              <div className="flex-1 px-4 py-5 sm:p-6">
                  <p className="text-lg font-bold text-gray-900">
                 {post.title}
                  </p>
                  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                {post.description} 
                  </p>
                  
                  <img 
                  className="w-10 h-10 mt-4 mb-4 rounded-full"
                  src={urlFor(post.author.image).url()}
                  />
                  by {post.author.name} 
                  </div>
             
              <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-900">
                  
                      Print On Demand
                  
                    </p>
                    <span className="text-sm font-medium text-gray-900">
                      •
                    </span>
                    <p className="text-sm font-medium text-gray-900">
                      5 Mins Read
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
        )
      })}
     </div>
{/*     
     <div className="grid grid-cols-1 gap-6 px-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
      <Link passHref legacyBehavior href="/salaries/influencer-marketing-manager-salary">
     <a>
      
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg   hover:border-2 hover:-translate-y-1">
             

              <img loading="lazy" className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/social-media-influencer.jpeg" alt="">
                </img>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
               Influencer Marketing Manager Salaries
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                In this article we breakdown influencer marketing salaries & the range of pay you can expect as an influencer marketing manager.
                </p>
                </div>
           
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                
                     Salaries
                
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
          <Link passHref legacyBehavior href="/salaries/social-media-specialist-salary">
     <a>
      
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg   hover:border-2 hover:-translate-y-1">
             

              <img loading="lazy" className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/social-media-specialist.png" alt="">
                </img>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
              Social Media Specialist Salary
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                In this article we breakdown Social Media Specialist salaries & the range of pay you can expect as an Social Media expert.
                </p>
                </div>
           
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                
                     Salaries
                
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
          <Link passHref legacyBehavior href="/salaries/tiktok-creator-salary">
     <a>
      
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg   hover:border-2 hover:-translate-y-1">
             

              <img loading="lazy" className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/tiktok-creator.png" alt="">
                </img>
            <div className="flex-1 px-4 py-5 sm:p-6">
                <p className="text-lg font-bold text-gray-900">
             TikTok Creator Salary
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                In this article we breakdown TikTok Creator salaries & the range of pay you can expect as a TikTok expert.
                </p>
                </div>
           
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                
                     Salaries
                
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
     */}
   </div>
 </section>
    )
}

