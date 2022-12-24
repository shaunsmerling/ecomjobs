import React from "react"
import Learn from "./Learn"
import {useSession} from "next-auth/react"
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import {signOut} from "next-auth/react"
import { useRouter } from "next/router"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function NavBarTwo() {

    const router = useRouter()

  


    const { data: session, status } = useSession()



  
    return (

<header class="py-4 bg-white sm:py-5 " x-data="{expanded: false}">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-center justify-between">
            <div class="shrink-0  -ml-10">
                <a href="../" title="" class="">
                    <img class="w-auto h-14" src="/logo.png" alt="" />
                </a>
            </div>
        <div className={`-mr-20 flex`}>
            <div class="hidden lg:flex lg:items-center lg:space-x-4 lg:justify-end lg:ml-auto ">
            <Menu as="div" className="relative inline-block text-left">
      <div className="-ml-4">
        <Menu.Button className="inline-flex w-full text-sm justify-center px-4 py-2 font-medium text-gray-700   ">
        <a href="" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-[12px] font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Salaries <span className="text-white z-1 bg-[#17614A] border border-black text-[10px]  ml-4 px-1  rounded-full">
         Coming soon</span>
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
                href=""
                  // href="/salaries/highest-paying-ecommerce-jobs"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Highest Paying Jobs 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href=""
                  // href="/salaries/lowest-paying-ecommerce-jobs"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Lowest Paying Jobs
                </a>
              )}
            </Menu.Item>
           

           
          
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
          
  
    <Menu as="div" className="relative inline-block text-left">
      <div className="-ml-10">
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 font-medium text-gray-700   ">
        <a href="" title="" class="inline-flex items-center justify-center px-4 py-2.5  text-[12px] text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Internships <span className="text-white z-1 bg-[#17614A] border border-black text-[10px]  ml-4 px-1  rounded-full">
         Coming soon</span>
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
                  href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Top Internships 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Marketing Internships 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Creative Internships
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Technical Internships
                </a>
              )}
            </Menu.Item>

           
          
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    {/* <Menu as="div" className="relative inline-block text-left"> */}
      <div className="">
        {/* <Menu.Button className="inline-flex w-full justify-center px-4 py-2 font-medium text-gray-700   "> */}
        <a href="/blog" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-[12px] text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Blog
                </a>
        {/* </Menu.Button> */}
      </div>
{/* 
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      > */}
        {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <a
                  href="/blog"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  General 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/interviewquestions"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Interview Questions 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/googleads"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Google Ads
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/facebookads"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Facebook Ads
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/instagram"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Instagram
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/amazon"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Amazon
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/tiktok"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 TikTok
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/snapchat"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Snapchat
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/emailmarketing"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Email Marketing
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/smsmarketing"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  SMS Marketing
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/SEO"
                  href="" 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  SEO
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/cro"
                  href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  CRO
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/influencermarketing"
                  href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Influencer Marketing
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/ugc"
                  href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  UGC
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/creative"
                  href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Creative
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/ios14"
                  href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  IOS 14-15
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // href="/blog/landingpages"
                  href=""
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Landing Pages
                </a>
              )}
            </Menu.Item>
        

           
          
           
          </div>
        </Menu.Items> */}
      {/* </Transition> */}
    {/* </Menu> */}
                {/* <a href="/blog" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Blog
                </a> */}

                <a href="/companylist" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-[12px]  text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Company List
                </a>


                {/* <a href="/contactus" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Contact Us
                </a> */}
                <Menu as="div" className="relative inline-block text-left">
      <div className="-ml-4">
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 font-medium text-gray-700   ">
        <a href="" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-gray-900 text-[12px] transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    For Companies
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
                  href="/postajob"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Post A Job
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/bulkdiscounts"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
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
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                   Contact Us
                </a>
              )}
            </Menu.Item>
           
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                
{/* 
                <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    <SignIn/>
                </a> */}

            </div>
           
      
          
       
       {session ?  <Menu as="div" className={`relative inline-block text-left `}>
      <div>
        <Menu.Button className={`inline-flex w-full text-[12px] justify-center px-4 py-2 font-medium text-gray-700`} >
        <img src={session.user.image} alt="Avatar" className="h-10 w-10 mx-10 rounded-full" /> 
          <ChevronDownIcon className="mt-3 -ml-6 h-5 w-5" aria-hidden="true" />
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
          <div className={`py-1 `}>
          <Menu.Item>
              {({ active }) => (
                <a
                  href="/users/editprofile"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/privacy"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Privacy Policy
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={() => { signOut({ redirect: false, callbackUrl: "/"})}}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
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
       
    : 
     <div className={`flex  ${ status === "loading" ? "loading" : "loaded"}`}>
            <div class="hidden sm:flex sm:ml-auto lg:py-2 lg:mr-4 lg:ml-4">
                <a
                    href="/signup"
                    title=""
                    class="inline-flex items-center justify-center px-4 -pt-4 text-[12px] font-medium text-white transition-all duration-200 bg-[#17614A] border border-2 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    role="button"
                >
                    Log In
                </a>
            </div>
{/* 
            <div class="hidden sm:flex sm:ml-auto lg:ml-4">
                <a
                    href="/api/auth/signin"
                    title=""
                    class="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white transition-all duration-200 bg-[#17614A] border border-2 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    role="button"
                >
                    Sign Up
                </a>
            </div> */}
            </div>
            }
 </div>

            <div class="flex ml-4 lg:hidden">
                <button
                    type="button"
                    class="inline-flex items-center p-2.5 text-white duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                   
                >
                    <span x-show="!expanded" aria-hidden="true">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>

                    <span x-show="expanded" aria-hidden="true">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </button>
            </div>
            
        </div>
    </div>
</header>

)}