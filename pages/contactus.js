import React, {useState} from 'react';
import { NextSeo } from 'next-seo';


const ContactUs = () => {  

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)
  
const handleSubmit = (e) => { 
  e.preventDefault()
  console.log('Sending')
  let data = {
    name,
    email,
    message
  }


  fetch(`api/contact`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
    }
  }).then(alert("Thank you for your submission. We will get back to your inquiry as soon as possible!") ? "" : window.reload() )

}


    return (
<section className="py-12 sm:py-16 lg:py-20 xl:py-24">
<NextSeo
      title="Contact Us | eCommerce Jobs"
      description="Contact us to find out about available ecommerce jobs, posts, and more." 
    />
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32">
          <div className="flex flex-col self-stretch justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                Love to hear from you, Get in touch 👋
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-black lg:text-lg lg:mt-6 lg:leading-8">
                Feel free to reach out if you have any questions regarding job posting, recruiting, company profiles, talent acquisition.
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden bg-black lg:mt-0 rounded-3xl -rotate-3">
              <div
                className="absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96">
              </div>

              <div className="relative p-6 sm:px-8 sm:py-9">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <blockquote className="mt-8">
                  <p className="text-xl font-normal text-white">
                    "eComportal has helped us find really high quality candidates for our open positions. We've been able to sift through all the other generic job boards like Linkedin or Indeed & get right to the industries-finest."
                  </p>
                </blockquote>
                <div className="flex items-center mt-6">
                  <img loading="lazy" className="object-cover rounded-full w-11 h-11 shrink-0" src="../avatar-male.png"
                    alt="">
                    </img>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-white">
                      HR Manager
                    </p>
                    <p className="text-sm font-normal text-gray-300">
                      Your Favorite DTC Brand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl">
            <div className="p-6 sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Send us a message
              </h3>
              <form action="#" method="POST" className="mt-8 space-y-6" >
                <div>
                  <label for="fullName" className="sr-only">
                    Your name
                  </label>
                  <div>
                    <input type="text" name="fullName" id="name" placeholder="Your name" required onChange={(e)=>{setName(e.target.value)}} 
                      className="block w-full px-2 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0">
                      </input>
                  </div>
                </div>

                <div>
                  <label for="email" className="sr-only">
                    Email address
                  </label>
                  <div>
                    <input type="email" name="email" id="email" placeholder="Email address" required onChange={(e)=>{setEmail(e.target.value)}} 
                      className="block w-full px-2 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0">
                        </input>
                  </div>
                </div>

                <div>
                  <label for="message" className="sr-only">
                    Write your message
                  </label>
                  <div>
                    <textarea type="text" name="message" id="message" placeholder="Write your message" rows="4" required onChange={(e)=>{setMessage(e.target.value)}} 
                      className="block w-full px-2 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0"></textarea>
                  </div>
                </div>

                <button type="submit" onClick={(e)=>{handleSubmit(e)}}
                  className="inline-flex items-center justify-center w-full px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-black border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                  Send message
                </button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default ContactUs;