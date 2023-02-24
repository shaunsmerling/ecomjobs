import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link"
import { useSession } from "next-auth/react";
import ModalSignIn from "./navModalSignIn";
import { useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function NavBarThree() {

  const [button, setButton] = useState(true)
  

  const { data: session } = useSession();

    return (
<div>
      {!session ? (
        <div class="relative bg-gray-900 z-20" data-controller="transition">
<div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
<div class="flex justify-start">
<a href="/">
<img class="h-14 w-14 sm:h-18 sm:w-18" alt="" src="/logobg.png"/>
</a> </div>

<div className="flex ml-2 lg:hidden">
            <button
              type="button"
              onClick={() => setButton(!button)}
              className="inline-flex items-center bg-lightGreen-300 p-2.5 text-gray-300 duration-200 border border-gray-300 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
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

<nav class="hidden md:flex space-x-5">
<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
{/* <button type="button" class="text-gray-600 group bg-white px-3 py-1 rounded-full inline-flex items-center text-base hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-expanded="false" data-action="transition#toggle">
<span class="whitespace-nowrap">Browse Jobs</span>
<svg class="text-gray-400 ml-1 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
</svg>
</button> */}
<Menu as="div" className="relative inline-block text-left">
              <div className="  rounded-full">
                <Menu.Button className="text-white     px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
                  <a
                    href=""
                    title=""

                  >
                    Find Jobs
                  </a>
                  <svg class="text-bold text-white ml-1 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                          href="/remote-jobs"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Remote Jobs
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/category"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        By Category
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/location"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        By Location
                        </a>
                      )}
                    </Menu.Item>
                    {/* <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/postajob"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Internships
                        </a>
                      )}
                    </Menu.Item> */}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
{/* 
<div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-full min-w-min sm:px-0 hidden" data-transition-target="container" data-transition-enter="transition ease-out duration-200" data-transition-enter-start="opacity-0 translate-y-1" data-transition-enter-end="opacity-100 translate-y-0" data-transition-leave="transition ease-in-out duration-150" data-transition-leave-start="opacity-100 translate-y-0" data-transition-leave-end="opacity-0 translate-y-1">
<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
<div class="relative grid bg-white p-1">
<div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
    
</div>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/">Most recent</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/remote-jobs">Remote jobs</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/part-time-jobs">Part-time jobs</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/internships">Internships</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/locations">By location</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/tags">By tag</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/roles">By role</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/collections">By collection</a>
</div>
</div>
</div> */}
</div>
<Link href="/brands" class="whitespace-nowrap text-base rounded-full px-3 py-1 -ml-1 text-white hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
  Brands
</Link>

<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
<Menu as="div" className="relative inline-block text-left">
              <div className="  rounded-full">
                <Menu.Button className="text-white group    px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
                  <a
                    href=""
                    title=""

                  >
                    More
                  </a>
                  <svg class="text-white ml-1 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                          href="/salaries"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Salaries
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/blogs"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Blogs
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/interviews"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Interviews
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
<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
<Menu as="div" className="relative inline-block text-left">
              <div className="">
                <Menu.Button className="text-white group px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
                  <a
                    href=""
                    title=""

                  >
                    For Employers
                  </a>
                  <svg class="text-white ml-1 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                          href="/signup"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Sign In
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/bulkdiscounts"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Bulk Discounts
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
                          href="/list-your-company"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        List Your Company
                        </a>
                      )}
                    </Menu.Item>
                
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

</div>
<a class="whitespace-nowrap inline-flex items-center justify-center pl-3 pr-1 py-1 border border-transparent rounded-full shadow-sm text-base font-medium text-white  bg-lightGreen-300 " href="/postajob">
Post a Job
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</a>
</div>
</div>

{/* 
<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden md:hidden" data-transition-target="container" data-transition-enter="duration-200 ease-out" data-transition-enter-start="opacity-0 scale-95" data-transition-enter-end="opacity-100 scale-100" data-transition-leave="opacity-100 ease-in" data-transition-leave-start="opacity-100 scale-100" data-transition-leave-end="opacity-0 scale-95">
<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
<div class="pt-5 pb-6 px-5">
<div class="flex items-center justify-between">
<div>
<img class="h-8 w-auto" alt="Startup Jobs" src="/assets/niches/primary/logo-05fd86c2e87557bcf28aae1f3dc45f0852762c2c11477fcbcb5660b3d673d8cb.svg"/>
</div>
<div class="-mr-2">
<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" data-action="transition#hide">
<span class="sr-only">Close menu</span>

<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>
</button>
</div>
</div>
<div class="mt-6">
<nav class="grid grid-cols-1 gap-7">
<a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="/">
<div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-brand text-white">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</div>
<div class="ml-4 text-base font-medium text-gray-900">Recent Jobs</div>
</a>
<a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="/startups">
<div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-brand text-white">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path>
</svg>
</div>
<div class="ml-4 text-base font-medium text-gray-900">Startups</div>
</a>
<a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="/locations">
<div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-brand text-white">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
</svg>
</div>
<div class="ml-4 text-base font-medium text-gray-900">Locations</div>
</a>
<a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="/tags">
<div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-brand text-white">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
<path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
</svg>
</div>
<div class="ml-4 text-base font-medium text-gray-900">Tags</div>
</a>
<a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="/collections">
<div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-brand text-white">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path>
</svg>
</div>
<div class="ml-4 text-base font-medium text-gray-900">Collections</div>
</a>
</nav>
</div>
</div>
</div>
</div> */}
</div>
      ) : (
          <div class="relative bg-gray-900 z-20" data-controller="transition">
<div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
<div class="flex justify-start">
<a href="/">
<img class="h-14 w-14 sm:h-18 sm:w-18" alt="" src="/logobg.png"/>
</a> </div>
<div className="flex ml-2 lg:hidden">
            <button
              type="button"
              onClick={() => setButton(!button)}
              className="inline-flex items-center bg-lightGreen-300 p-2.5 text-gray-300 duration-200 border border-gray-300 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
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


<nav class="hidden md:flex space-x-5">
<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
{/* <button type="button" class="text-gray-600 group bg-white px-3 py-1 rounded-full inline-flex items-center text-base hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-expanded="false" data-action="transition#toggle">
<span class="whitespace-nowrap">Browse Jobs</span>
<svg class="text-gray-400 ml-1 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
</svg>
</button> */}
<Menu as="div" className="relative inline-block text-left">
              <div className="  rounded-full">
                <Menu.Button className="text-white     px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
                  <a
                    href=""
                    title=""

                  >
                    Find Jobs
                  </a>
                  <svg class="text-bold text-white ml-1 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                          href="/remote-jobs"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Remote Jobs
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/category"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        By Category
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/location"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        By Location
                        </a>
                      )}
                    </Menu.Item>
                    {/* <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/postajob"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Internships
                        </a>
                      )}
                    </Menu.Item> */}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

<div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-full min-w-min sm:px-0 hidden" data-transition-target="container" data-transition-enter="transition ease-out duration-200" data-transition-enter-start="opacity-0 translate-y-1" data-transition-enter-end="opacity-100 translate-y-0" data-transition-leave="transition ease-in-out duration-150" data-transition-leave-start="opacity-100 translate-y-0" data-transition-leave-end="opacity-0 translate-y-1">
<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
<div class="relative grid bg-white p-1">
<div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
    
</div>
{/* <a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/">Most recent</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/remote-jobs">Remote jobs</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/part-time-jobs">Part-time jobs</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/internships">Internships</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/locations">By location</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/tags">By tag</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/roles">By role</a>
<a class="whitespace-nowrap p-3 py-2 block rounded-md hover:bg-gray-100" href="/collections">By collection</a> */}
</div>
</div>
</div>
</div>
<Link href="/brands" class="whitespace-nowrap text-base rounded-full px-3 py-1 -ml-1 text-white hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" >
  Brands
</Link>

<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
<Menu as="div" className="relative inline-block text-left">
              <div className="  rounded-full">
                <Menu.Button className="text-white group    px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
                  <a
                    href=""
                    title=""

                  >
                    More
                  </a>
                  <svg class="text-white ml-1 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                          href="/salaries"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Salaries
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/blogs"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Blogs
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/interviews"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Interviews
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
<div class="relative" data-controller="transition" data-action="keyup@window->transition#hideWithKeyboard click@window->transition#hideBackground">
  
<Menu as="div" className="relative inline-block text-left">
              <div className="">
                <Menu.Button className="text-white group px-3 py-1 rounded-full inline-flex items-center text-base hover:text-bold hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-blue-500" aria-expanded="false" data-action="transition#toggle ">
                  <a
                    href=""
                    title=""

                  >
                    Your Account
                  </a>
                  <svg class="text-white ml-1 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                          href="/employers/posts"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        My Jobs
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/bulkdiscounts"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                        Bulk Discounts
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
                     {/* <Menu.Item>
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
                        Company Profile
                        </a>
                      )}
                    </Menu.Item> */}
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/api/auth/signout"
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
<a class="whitespace-nowrap inline-flex items-center justify-center pl-3 pr-1 py-1 border border-transparent rounded-full shadow-sm text-base font-medium text-white  bg-lightGreen-300 " href="/employers/postajob">
Post a Job
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</a>
</div>
</div>
</div>
      )}
      </div>
    )

}


export default NavBarThree