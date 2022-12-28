import React from "react"
import { useState } from "react"
import Link from "next/link"
import {useSession} from "next-auth/react"




function Hit({ hit }) {


   const { data: session } = useSession()


  function getNew() {
    let date_1 = new Date(hit.postedat);
    let date_2 = new Date();
 
     let difference = date_1.getTime() - date_2.getTime();
     let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)) * -1;
    if (TotalDays <= 7) {
       return true
    } else {
       return false
    }
   }

   function getDate() {
    let date_1 = new Date(hit.postedat);
    let date_2 = new Date();
 
     let difference = date_1.getTime() - date_2.getTime();
     let TotalDays = Math.ceil(difference / (1000 * 3600 * 24) * -1);
    
     if (TotalDays === 0){
    return 'Today'
     } else if (TotalDays === 1) {
       return `${TotalDays} day ago`
       }  else if (TotalDays > 1 && TotalDays < 30) {
          return `${TotalDays} days ago`
       } else if (TotalDays >= 30 && TotalDays <= 60) {
          return "1 month ago"
       }  else if (TotalDays >= 60 && TotalDays <= 90) {
          return "2 months ago"
       } else if (TotalDays >= 90 && TotalDays <= 120) {
          return "3 months ago"
       } 
   }

   function ifSalary() {
    if (hit.salary === "null") {
       return ""
    } else {
       return "•" + " " + hit.salary
    }
   }


   return (
    <Link href={`/job/${hit.jobUrl}`} hit={hit} passHref>
      <a target="_blank">
    <div className={`flex flex-col border-2 rounded-lg mb-4 lg:mr-40 lg:ml-40 lg:pb-10 hover:bg-gray-100  lg:my-6 lg:py-2 pb-2  m${hit.featured && 'text-xs '}`}>
        <ul className={`  text-left  flex   `}>
        <img className="z-1  ml-4 my-4 w-14 h-14 lg:w-20 lg:h-20 lg:mt-6 border border-[#17614A] border-2 " src={`./images/${hit.logo}`} ></img>
          <li className="w-full mt-4 box-border ">
            <p className=" font-bold tracking-tighter lg:ml-8 text-black text-xl max-w-2xl ml-4 lg:mb-4 z-1 lg:text-3xl  hover:no-underline">
            {hit.job_position}
              {getNew() && <span className="text-white z-1 bg-[#17614A] border border-black text-xs  ml-4 px-2 py-1 rounded-full">
         New</span>}
             
            </p>
            
            <p className=" ml-4 lg:ml-8 z-1 text-md lg:text-2xl lg:-mt-2 text-[#17614A] z-0 font-bold pb-2 pr-20 ">  {hit.company_name} </p>
            <div className="ml-4 lg:ml-8 mb-2 mt-2 flex">
            <svg height="12" viewBox="0 0 12 12" width="12"><g fill="currentColor" transform="translate(1)">
               <path d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z"></path>
               <circle cx="8" cy="1.75" r="1.75"></circle>
               <path d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z"></path>
               <circle cx="3" cy="1.75" r="1.75"></circle><path d="M6.5 7v1.75c0 .087.022.274.024.305l.227 2.716c.01.13.12.229.249.229h2c.13 0 .24-.1.25-.229l.222-2.657A.125.125 0 019.595 9h.905a.25.25 0 00.25-.25V7a2.746 2.746 0 00-4.715-1.917.124.124 0 00-.019.15C6.333 5.768 6.5 6.378 6.5 7z"></path>
               <circle cx="8" cy="1.75" r="1.75"></circle><path d="M.25 8.75c0 .138.112.25.25.25h.905c.065 0 .119.05.125.114l.22 2.657c.01.13.12.23.25.229h2c.13 0 .24-.1.25-.229l.221-2.657A.125.125 0 014.595 9H5.5a.25.25 0 00.25-.25V7a2.75 2.75 0 00-5.5 0v1.75z"></path>
               <circle cx="3" cy="1.75" r="1.75"></circle></g></svg>
               <p className=" ml-2 font-bold -mt-2 text-lg">5-100 EMPLOYEES</p>
            </div>
            <p className=" ml-4 lg:ml-8 z-1 lg:mt-1 text-md lg:text-xl  text-black z-0 pb-2 pr-20 ">  {getDate()} • {hit.city} • {hit.location}  {ifSalary()}</p>
    

<div className="flex mt-4 ml-2">
      <div class="hidden sm:flex sm:ml-auto lg:ml-4">
                <a
                  //   href={session ? `/job/${hit.jobUrl}` : "/api/auth/signin"}
                  href={session ? "" : "/signup"}
                  
                    title=""
                    class="inline-flex items-center justify-center px-32 py-2.5 text-base font-medium text-black transition-all duration-200 bg-white border border-2 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    role="button"
                >
                  Save 
                </a>
            </div>
       
            <div class="hidden sm:flex sm:ml-auto lg:ml-4">
                <a
                  //   href={session ? `/job/${hit.jobUrl}` : "/api/auth/signin"}
                  href={`/job/${hit.jobUrl}`}
                    target="_blank"
                    title=""
                    class="inline-flex items-center justify-center px-32 py-2.5 text-base font-medium text-white transition-all duration-200 bg-[#17614A] border border-2 rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    role="button"
                >
                  Apply
                </a>
            </div>
      </div> 
           
            
          </li>
        </ul>
     </div>
     </a>
     </Link>
     

   );
 }

 export default Hit