import React from 'react';
import { getCsrfToken } from "next-auth/react"

  
export default function SignIn({ csrfToken }) {


   function handleSubmit(){
           // show the spinner
    showSpinner();

    // hide the spinner after 3 seconds
    const timer = setTimeout(() => {
      hideSpinner();
    }, 5000);

    // clean up the timer on unmount
  clearTimeout(timer);

  function showSpinner() {
    document.querySelector(".spinner").classList.add("show");
  }

  function hideSpinner() {
    document.querySelector(".spinner").classList.remove("show");
  }
  
    }
    return (
        <section className=" bg-gray-50 py-20 ">
        <div className="px-4 mx-auto max-w-7xl -pt-20  mb-10 lg:px-8">
      
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-montserrant leading-tight text-black sm:text-4xl lg:text-5xl">Log Into Your Ecomportal Account</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Access your user profile & browse all your saved jobs </p>
            </div>
    
            <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                <div className="overflow-hidden bg-white rounded-md shadow-md">
                    <div className="px-4 py-6 sm:px-8 sm:py-7">
                    <form method="post" action="/api/auth/signin/email">
                    <div class="space-y-4">
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                                <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">We'll send a link to your email for verification </p>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <input
                                   placeholder="user@example.com"
                                   className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    type="email" id="email" name="email" />
                                  
                                </div>
                        
                 
            
                    <button 
                    className="inline-flex items-center bg-[#709771] justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none hover:bg-[#5a795a]"
                    onClick={handleSubmit} type="submit">Sign in with Email</button>
            
            </div>
                    
                    
                    </form>
                </div>
            </div>
        </div>
              <div class="spinner"></div>
    </div>
</section>

    )
}

export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context)
    return {
      props: { csrfToken },
    }
  }