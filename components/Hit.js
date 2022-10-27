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
    <Link href={`/job/${hit._id}`} hit={hit} >
    <div className={`flex flex-col mx-1 lg:mx-20 pb-2  ${hit.featured && 'text-xs '}`}>
        <ul className={`  rounded-lg text-left mb-2  flex  bg-white hover:bg-gray-100  bg-white  shadow-lg `}>
        <img className="z-1 mt-4 ml-4 w-14 h-14 rounded-full border border-[#17614A] border-2 " src={hit.logo} ></img>
          <li className="w-full ml-2 mt-2 mb-4 box-border ">
            <p className=" ml-2 mt-2 z-1 text-sm text-[#17614A] pb-1">
              {hit.company_name} 
              {getNew() && <span className="text-white z-1 bg-[#17614A] border border-black text-xs mt-2 mb-2 ml-4 py-1 px-2 rounded-full">
         New</span>}
             
            </p>
            
            <p className=" ml-2 -mb-2 z-1 text-xl text-[#17614A] z-0 font-bold pb-2 pr-20">{hit.job_position}</p>

            <p className="float-right mr-4 -mt-10 bold font-bold text-xs lg:text-sm">{hit.job_type} | {hit.location}</p>
              
          </li>
        </ul>
     </div>
     </Link>

   );
 }

 export default Hit