import React from 'react'
import Link from "next/link"
import { useState } from "react"


const NavBar = () => {

      const [clicked, setClicked] = React.useState(false)


      function handleClick() {
            setClicked(prevState => !prevState)
      }

    

      return (

            <nav class="mt-4 relative border-[#B9C4C2]" >
                  <div class="container py-2 mx-auto">
                        <Link href="../">
                              <a  onClick={() => {setClicked(false)}} 
                              className="inline-flex p-2 -pb-10 tracking-wider"><img src="/logo.png" class=" h-10 w-40 " /></a>
                        </Link>
                        <button onClick={handleClick} className="inline-flex border-2 border-[#17614A] float-right mr-6 mt-2 item-center justify-center h-10 w-10 rounded-md lg:hidden">

                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-9">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                              </svg>

                        </button>

                        <div id="navdrop" className={`${clicked ? `bg-[#F5F6F7] w-full mb-6 float-right lg:inline-flex lg:bg-transparent lg:w-auto mt-2 lg:mt-0` : `hidden w-full float-right lg:inline-flex  lg:w-auto mt-2 lg:mt-0`}`}>
                              <ul className=" flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                                    <li onClick={handleClick}  className="  flex px-4 py-4 lg:border-none font-medium hover:text-[#22A956]  border-b-2 border-slate-200 lg:border-none">
                                          <Link href="../">
                                                <p>Home</p>
                                          </Link>
                                    </li>
                                    <li onClick={handleClick}  className="border-b-2 border-slate-200 flex px-4 py-4 font-medium hover:text-[#22A956] lg:border-none">
                                          <Link href="/blog">
                                                <p>Blog</p>
                                          </Link>
                                    </li>
                                    <li onClick={handleClick}  className=" -ml-3 flex px-4 pt-4 pb-2 font-medium  border-b-2 border-slate-200 lg:border-none">
                                          <Link href="/postajob">
                                                <button type="button" id="postbtn" class=" bg-[#26EB6B] border border-black rounded-full pb-3 pt-2 text-sm px-3 rounded mb-4 text-black lg:mt-0 h ">Post A Job  </button>
                                          </Link>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>

      )
}

export default NavBar;