import React from 'react'
import Link from "next/link"
import { useState } from "react"
import { MuiAlert } from "./MuiAlert"


const apply = ({jobposition, companyname, application_url}) => {


    return (

      <div id="emailhead" className="fixed bottom-0 w-full text-white ">
      <div className=" justify-center pt-2 text-sm  flex ">
      <p className=" text-xs  mr-2 flex lg:text-lg my-auto lg:-ml-20 lg:mr-4 ">{jobposition}, {companyname} </p>
      
    
    <button 
   
    value="Submit" 
    id="emailbtn" 
    class=" ml-4 mr-2 px-3 pt-1 pb-1 lg:px-3 lg:pt-2 lg:pb-2  text-md bg-[#17614A]  text-white rounded-lg border border-white ">Apply Now
    </button>

</div>
</div>

)}

export default apply;