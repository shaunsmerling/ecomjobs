import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link"
import { useSession } from "next-auth/react";
import ModalSignIn from "./navModalSignIn";
import { useState, useEffect } from "react"
import { api_url } from "../config";
import { signOut } from "next-auth/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}



function NavBarThree() {

  const router = useRouter()




  const [button, setButton] = useState(true)
  const { data: session, status } = useSession();


  const [userData, setUserData ] = useState([])

  useEffect(() => {
    fetch(`/api/users?email=${session?.user?.email}`, {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) => setUserData(data))
  }, )
  


  // function showAlert() {
  //   if (userData[0].job_position !== "" && userData[0].location !== "") {
  //     return "🚨 33% Completed" 
  //   } else if (userData[0].bio !== "" && userData[0].degree !== "") {
  //     return "🚨 75% Completed" 
  //   } else {
  //     return "" 
  //     } 
  //    }
  

 
    return (
<div className={`${!session && status === "loading" ? 'loading' : 'loaded'}`}>
      {!session  ? (
        
        <div class={` lg:relative bg-white mb-3  z-20 `} data-controller="transition">

<div class="flex justify-between items-center  px-4 py-6 sm:px-6 md:justify-start md:space-x-10 ">
  
<div class="flex justify-start  lg:-ml-0 -mr-10">
<a href="/">
<img class="h-14 w-auto sm:h-18 sm:w-18" alt="" src="/ll.png"/>
</a> </div>

<div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setButton(!button)}
              className="inline-flex items-center border border-green bg-lightGreen-300 p-2.5 text-black duration-200 border border-gray-300 rounded-full hover:bg-gray-900 hover:text-black "
            >
              {button ? (
                <div>
                  <span x-show="!expanded" aria-hidden="true">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                </div>
              ) : (
                <div>
                  <ModalSignIn />
                  <span x-show="expanded" aria-hidden="true">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              )}
            </button>
          </div>

<nav class="hidden md:flex space-x-4">
<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
</div>
<Link href="/salaries" class="whitespace-nowrap font-montserrant  rounded-full px-3 py-1  text-black hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
  Salaries
</Link>
<Link href="/interviews" class="whitespace-nowrap text-base font-montserrant  rounded-full px-3 py-1 -ml-1 text-black hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
  Interviews
</Link>


<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
<Menu as="div" className="relative inline-block text-left">
              <div className="  rounded-full">
                <Menu.Button className="text-black group  font-montserrant  px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
                  <a
                    href=""
                    title=""

                  >
                    More
                  </a>
                  <svg class="text-black ml-1 h-5 w-5 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
</svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                  <Menu.Item>
                      {({ active }) => (
                        <a
                          target="_blank"
                          href="https://www.dtcdrive.com/podcast?utm_source=ecommportal&utm_medium=website&utm_campaign=ecommportal"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        DTC Drive
                        </a>
                      )}
                    </Menu.Item>
             
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/blog"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Blog
                        </a>
                      )}
                    </Menu.Item>
                 
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/courses"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Courses
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/tools"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Tools
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/entry-level"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Entry Level
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/loyalty-programs"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Loyalty Programs
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/printondemand"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Print On Demand
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/ecommerce-platforms"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        eCommerce Platforms
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/building-a-brand"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Building A Brand
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/top-canadian-brands"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Top Canadian Brands
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/getting-hired"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Getting Hired
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          


</div>
</nav>
<div class="hidden md:flex items-center justify-end gap-5 md:flex-1 lg:w-0">
{/* <Link href="/createaccount" class="whitespace-nowrap font-montserrant rounded-full px-3 py-1 -ml-1 text-black hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
  Sign Up
</Link> */}
<Link href="/login" class=" whitespace-nowrap font-montserrant rounded-full px-3 py-1 -ml-1 text-black hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
  Log In
</Link>

<Link href="/contactus" class="whitespace-nowrap font-montserrant rounded-full px-3 py-1 -ml-1 text-black hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
  Contact Us
</Link>
{/* <a target="_blank" class="border border-black whitespace-nowrap  transform transition duration-300 hover:-translate-y-1 hover:shadow-lg inline-flex items-center  justify-center pl-3 pr-3 py-1  rounded-full shadow-sm text-base font-Studio6 text-white  bg-insightblue " href="https://insightai.beehiiv.com/subscribe">
The Insight
</a> */}
<a class="border border-black whitespace-nowrap transform transition duration-300 hover:bg-[#5a795a]  inline-flex items-center justify-center pl-3 pr-1 py-1 rounded-full shadow-sm font-montserrant text-white   bg-[#709771] " href="/postajob">
Post a Job
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</a>
</div>
</div>
</div>

      ) : (
          
        <div class="lg:relative bg-white mb-3  z-20 " data-controller="transition">

        <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          
        <div class="flex justify-start  lg:-ml-0 -mr-10">
        <a href="/">
        <img class="h-14 w-auto sm:h-18 sm:w-18" alt="" src="/ll.png"/>
        </a> </div>
        
        <div className="flex lg:hidden">
                    <button
                      type="button"
                      onClick={() => setButton(!button)}
                      className="inline-flex items-center border border-green bg-lightGreen-300 p-2.5 text-black duration-200 border border-gray-300 rounded-full hover:bg-gray-900 hover:text-black "
                    >
                      {button ? (
                        <div>
                          <span x-show="!expanded" aria-hidden="true">
                            <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M4 6h16M4 12h16M4 18h16"
                              />
                            </svg>
                          </span>
                        </div>
                      ) : (
                        <div>
                          <ModalSignIn />
                          <span x-show="expanded" aria-hidden="true">
                            <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </div>
                      )}
                    </button>
                  </div>
        
        <nav class="hidden md:flex space-x-4">
        <div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
        </div>
        <Link href="/salaries" class="whitespace-nowrap font-montserrant  rounded-full px-3 py-1  text-black hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
          Salaries
        </Link>
        <Link href="/interviews" class="whitespace-nowrap text-base font-montserrant  rounded-full px-3 py-1 -ml-1 text-black hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
          Interviews
        </Link>
      
        
        <div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
        <Menu as="div" className="relative inline-block text-left">
                      <div className="  rounded-full">
                        <Menu.Button className="text-black group  font-montserrant  px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
                          <a
                            href=""
                            title=""
        
                          >
                            More
                          </a>
                          <svg class="text-black ml-1 h-5 w-5 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
                        </Menu.Button>
                      </div>
        
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                          <Menu.Item>
                              {({ active }) => (
                                <a
                                  target="_blank"
                                  href="https://www.dtcdrive.com/podcast?utm_source=ecommportal&utm_medium=website&utm_campaign=ecommportal"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                DTC Drive
                                </a>
                              )}
                            </Menu.Item>
                     
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/blog"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Blog
                                </a>
                              )}
                            </Menu.Item>
                         
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/courses"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Courses
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/tools"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Tools
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/entry-level"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Entry Level
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/loyalty-programs"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Loyalty Programs
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/printondemand"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Print On Demand
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/ecommerce-platforms"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                eCommerce Platforms
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/building-a-brand"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Building A Brand
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/top-canadian-brands"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Top Canadian Brands
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/getting-hired"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                Getting Hired
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  
        
        
        </div>
        </nav>
       

       {/* User Prifle */}
       <div class="hidden md:flex items-center justify-end gap-5 md:flex-1 lg:w-0 ">
       <Link class="whitespace-nowrap text-base font-montserrant  rounded-full px-3 py-1 -ml-1 text-black hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" 
                          href="/profile/jobs"
                          
                        > 
                       Saved Jobs <span className="bg-gray-300 ml-1 py-1 px-2 text-sm rounded-full">{userData[0]?.jobIDs.length >= 1 ? userData[0]?.jobIDs.length : "0"}</span>
                        </Link>
<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
<Menu as="div" className="relative inline-block text-left">
              <div className="">
                <Menu.Button className="text-black group px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
           <a>
<div className="flex ">
  <img src={(userData[0]?.profilePicture || status === "loading")  ? userData[0]?.profilePicture : "../avatar.svg" }
  className="rounded-full relative  inline-block text-left h-10 w-auto" alt="" />
  <svg class="text-black mt-4 ml-1 h-5 w-5 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
</svg>
  </div>
  </a>

 
                  
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                  <Menu.Item>
                      {({ active }) => (
                        <a
                          // href={users.achievements ? "/editprofile" : "/profile"}
                          href="/profile"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm w-full text-left"
                          )}
                        >
                         Profile
                        </a>
                      )}
                    </Menu.Item>
                
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/contactus"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Contact Us
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                        onClick={() => 
                          signOut({
                            callbackUrl: `${window.location.origin}`
                          })}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Sign Out
                        </a>
                      )}
                    </Menu.Item>
                
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
</div>
</div>
</div>
</div>
      )}
      </div>
    )

}


export default NavBarThree