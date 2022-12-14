import React from "react"
import Learn from "./Learn"

export default function NavBarTwo() {

    return (

<header class="py-4 bg-white sm:py-5 lg:-mr-96 lg:-ml-60" x-data="{expanded: false}">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-center justify-between">
            <div class="shrink-0 -ml-60">
                <a href="#" title="" class="">
                    <img class="w-auto h-20" src="logo.png" alt="" />
                </a>
            </div>

            <div class="hidden lg:flex lg:items-center lg:space-x-4 lg:justify-end lg:ml-auto ">
                <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                   Learn {/* <Learn/> */}
                </a>

                <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Company List
                </a>

                <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Featured
                </a>

                <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                    Support
                </a>
            </div>

            <div class="hidden sm:flex sm:ml-auto lg:ml-4">
                <a
                    href="#"
                    title=""
                    class="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-black transition-all duration-200 bg-white border-2 rounded-lg hover:bg-[#17614A] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    role="button"
                >
                    Log In
                </a>
            </div>

            <div class="hidden sm:flex sm:ml-auto lg:ml-4">
                <a
                    href="#"
                    title=""
                    class="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white transition-all duration-200 bg-[#17614A] border border-2 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    role="button"
                >
                    Sign Up
                </a>
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