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
    <div className={`flex flex-col mx-1 lg:mx-20 pb-2 bg-white ${hit.featured && 'text-xs '}`}>
        <ul className={` border-2 border-[#17614A] rounded-lg text-left mb-2  flex  bg-white hover:bg-gray-100  bg-white  shadow-lg `}>
          <li className="w-full ml-2 mt-2 mb-4 box-border ">
            <p className="  z-1 text-sm text-[#17614A] pb-1">
              {hit.company_name} 
              {getNew() && <span className="text-white z-1 bg-[#17614A] border border-black text-xs mt-2 mb-2 ml-4 py-1 px-2 rounded-full">
         New</span>}
              {hit.featured && (<span className="bg-[#26EB6B] z-1 border border-black text-black  m-2 py-1 px-2 rounded-full">Featured</span>)}
            </p>
            
            <p className="  z-1 text-xl text-[#17614A] z-0 font-bold pb-2 pr-20">{hit.job_position}</p>

            <p className=" text-xs flex z-1 text-[#17614A]">
                  <img src="./location-gray.svg" className=" -ml-1 mr-1"></img> {hit.city ? hit.city + "," : ""} {hit.location}
              </p>
            <p className= "z-1 text-xs mt-2 -mb-2 italic font-bold text-[#17614A]">
            {getDate()}
            </p>
              <img className="z-1 float-right -mt-20 mr-4 w-16 h-16 rounded-full border border-[#17614A] border-2 " src={hit.logo} ></img>
          </li>
        </ul>
     </div>
     </Link>

   );
 }

 export default Hit