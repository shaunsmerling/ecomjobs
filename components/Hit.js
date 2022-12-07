import React from "react"
import { useState } from "react"
import Link from "next/link"



function Hit({ hit }) {



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

   return (
    <Link href={`/job/${hit.jobUrl}`} hit={hit} passHref>
      <a target="_blank">
    <div className={`flex flex-col border-2 rounded-lg mb-4 lg:mx-20 hover:bg-gray-100  lg:my-6 lg:py-6 pb-2  m${hit.featured && 'text-xs '}`}>
        <ul className={`  text-left  flex   `}>
        <img className="z-1  ml-4 my-4 w-14 h-14 lg:w-20 lg:h-20 rounded-full border border-[#17614A] border-2 " src={`./images/${hit.logo}`} ></img>
          <li className="w-full mt-4 box-border ">
            <p className=" font-bold tracking-tighter lg:ml-8 text-black sm:text-5xl max-w-2xl ml-4 lg:mb-4 z-1 text-xl text-[#17614A]  hover:no-underline">
            {hit.job_position}
              {getNew() && <span className="text-white z-1 bg-[#17614A] border border-black text-xs  ml-4 px-2 rounded-full">
         New</span>}
             
            </p>
            
            <p className=" ml-4 lg:ml-8 z-1 text-md lg:text-2xl lg:-mt-2 text-[#17614A] z-0 font-bold pb-2 pr-20 ">  {hit.company_name} </p>
      
            <p className="hidden lg:bg-green-200 lg:px-2 lg:py-2 lg:rounded-lg lg:float-right lg:-mt-20 lg:flex lg:mr-10 lg:text-[20px]  lg:text-green-700 lg:text-xl">{hit.city} {hit.location}</p>
            
          </li>
        </ul>
     </div>
     </a>
     </Link>
     

   );
 }

 export default Hit