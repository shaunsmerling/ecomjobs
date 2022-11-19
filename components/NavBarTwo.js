
import React from 'react';

const Navbartwo = () => {
  return (
    <header className="py-4 bg-white sm:py-5" x-data="{expanded: false}">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className=" -ml-14 -mr-12 shrink-0">
            <a href="../" title="" className="">
              <img className="w-auto h-24" src="/logo.png" alt=""></img>
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:justify-center">
            <a href="/companylist" title=""
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
              Companies
            </a>

            <a href="/blog" title=""
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
              Blog
            </a>

            <a href="/contactus" title=""
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
              Contact Us
            </a>

        
          </div>

          <div className="hidden ml-auto sm:flex lg:ml-0">
            <a href="/postajob" title=""
              className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-[#17614A] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
              role="button">
             Post A Job $89
            </a>
          </div>

          <div className="flex ml-2 lg:hidden">
            <button type="button"
              className="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
              >
              <span x-show="!expanded" aria-hidden="true">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>

              <span x-show="expanded" aria-hidden="true">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbartwo;