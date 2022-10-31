import React from "react"
import { useState } from "react"
import Link from "next/link"



function featured() {


   return (
    <div>
    
    <div className="  pl-2 pr-4">
            <div >

                <p  className="hidden lg:block mt-4 text-center text-2xl  "><span className="underline decoration-[#22A956] decoration-4 underline-offset-8 ">Featured Brands</span> </p>
                
            </div>
               
  
                
                
            
            </div> 
    <div className="hidden lg:flex mt-10 px-2 drop-shadow - w-max  mb-10  lg:w-max  lg:flex lg:mx-auto lg:mb-12 lg:text-center lg:drop-shadow lg:align-center ">
              <div id="featuredStart" className="mb-4  ">
              <Link href="/company/634f75a39f621dc748de2771" >
              <div className="flex flex-col mx-1 lg:mx-10 pb-2">
              <ul className={`  rounded-lg text-left mb-2  flex hover:text-white bg-white hover:bg-[#17614A] h-40 w-80 bg-white  shadow-lg `}>
              <img className="z-1 mt-10 ml-4 w-14 h-14 border border-[#17614A] border-2 " src="./images/harrys.jpeg" ></img>
                <li className="w-full ml-6 mt-8 mb-4 box-border">
                <h3 className="text-2xl font-semibold pb-2 ">Harrys</h3>
                
                <p className="my-auto text-lg mr-4 ">Creating things more people like. </p>
                </li>
              </ul>
              </div>
              </Link>
              </div>
              <div id="featuredStart" className="mb-4 ">
              <Link href="/company/63412e340cae287e0797c83d" >
              <div  className="flex flex-col mx-1 lg:mx-10 pb-2">
              <ul className={`  rounded-lg text-left mb-2 hover:text-white flex  bg-white hover:bg-[#17614A] h-40 w-80 bg-white  shadow-lg `}>
              <img className="z-1 mt-10 ml-4 w-14 h-14 border border-[#17614A] border-2 " src="./images/bose.jpeg" ></img>
                <li className="w-full ml-6 mt-8 mb-4 box-border ">
                <h3 className="text-2xl font-semibold pb-2 ">Bose</h3>
                
                <p className="my-auto text-lg">Sound is Power. </p>
                </li>
              </ul>
              </div>
              </Link>
               </div>
               <div id="featuredStart" className="mb-4">
               <Link href="/company/634f75a39f621dc748de274d" >
              <div  className="flex flex-col mx-1 lg:mx-10 pb-2">
              <ul className={`  rounded-lg text-left mb-2  flex  bg-white hover:text-white hover:bg-[#17614A] h-40 w-80  bg-white  shadow-lg `}>
              <img className="z-1 mt-10 ml-4 w-14 h-14 border border-[#17614A]  border-2 " src="./images/colehaan.jpeg" ></img>
              <li className="w-full ml-6 mt-8 mb-4 box-border  ">
                <h3 className="text-2xl font-semibold pb-2 ">Cole Haan</h3>
                
                <p className="my-auto text-lg ">We are advocates of the extraordinary. </p>
                </li>
              </ul>
              </div>
              </Link>
              </div>
              </div>
 
     </div>

   );
 }

 export default featured