import React from 'react';
import {providers, signIn, getSession, getCsrfToken, useSession } from "next-auth/react";
import { getProviders } from "next-auth/react"
import { useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo"


// export async function getServerSideProps(context) {
//     const session = await getSession({ req: context.req });
//     if (session?.user) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       };
//     }
//     const providers = await getProviders();
//     return {
//       props: { providers },
//     };
//   }
export async function getServerSideProps(context) {

   const providers = await getProviders();
    return {
      props: { 
        providers,
        csrfToken:  await getCsrfToken(context)
     }, 

    };
  }



  const ComponentName = ({ providers, csrfToken }) => {   

    const router = useRouter();
    
    // const [userInfo, setUserInfo] = useState({ email: "", password: "" });

    // const handleChange = ({ target }) => {
    //     setUserInfo({ ...userInfo, [target.name]: target.value });
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =  async (e) => {
        e.preventDefault();
        await signIn("credentials", { 
            email: email,
            password: password,
            redirect: false, 
            callbackUrl: "/" });
            router.push("/");
    }

      return (
        
          <section className=" bg-white sm:py-16 lg:pb-20 ">
            
      <div className="px-4 mx-auto max-w-7xl sm:px-6  lg:px-8">
      <NextSeo
      title="Sign up | EcomPortal"
      description="Create an account to get started" 
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        site: '@ecomprtal',
        cardType: 'Summary',
        image: "/logo.png"
      }}
    />
          <div className="">
            <a href="../">
              <img alt="company logo" loading="lazy" className="w-auto h-16 mx-auto mb-20 mt-0" src="/logo.png"   />
              </a>
          </div>
  
          <div className="grid max-w-lg grid-cols-1 mx-auto  gap-y-12 lg:mt-10 lg:max-w-none lg:grid-cols-2">
              <div className="lg:px-12 xl:px-16">
                  <div className="text-center">
                      <h1 className="font-bold text-gray-900 text-4xl font-pj">Sign in with email</h1>
  
                      <div className="flex justify-center flex-shrink-0 mt-8 -space-x-4 overflow-hidden">
                          <img alt="user profile picture" loading="lazy" lassName="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-male-1.png"   />
                          <img alt="user profile picture" loading="lazy" className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-1.png"   />
                          <img alt="user profile picture" loading="lazy" className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-2.png"   />
                          <img alt="user profile picture" loading="lazy" className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-3.png"   />
                          <img alt="user profile picture" loading="lazy" className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-male-2.png"   />
                          <img alt="user profile picture" loading="lazy" className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-4.png"   />
                          <img alt="user profile picture" loading="lazy" className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-5.png"   />
                      </div>
  
                      <p className="px-4 mt-5 text-lg font-normal text-gray-900 sm:px-0 font-pj">Search over <span className="font-bold">4600+ eCommerce brands </span> that're hiring</p>
                  </div>

        

                  <form  action="/api/auth/signin/email" method="POST" className="mt-10">
                  <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                  <div className="space-y-3">
                          <div>
                              <label for="" className="sr-only"> Email address </label>
                              <div>
                       
                                  <input
                            
                                      type="email"
                                      name="email"
                                      id="email"
                                      placeholder="Email address"
                                      className="
                                          block
                                          w-full
                                          px-4
                                          py-4
                                          overflow-hidden
                                          text-base
                                          font-normal
                                          text-gray-900
                                          placeholder-gray-600
                                          transition-all
                                          duration-200
                                          border border-gray-300
                                          caret-gray-900
                                          rounded-xl
                                          bg-gray-50
                                          focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900
                                          font-pj
                                      "
                                  />
                              </div>
                          </div>
                      </div>

                   
  
                      <div className="relative mt-8">
                          <div className="absolute -inset-2">
                              <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}></div>
                          </div>
  
                          <button
                              type="submit"
                              className="relative flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                          >
                              Get Email Link
                          </button>
                      </div>
                  </form>
                        

               
  


                  <svg className="w-auto h-4 mx-auto mt-8 text-gray-300" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
                    </svg>


                    <div>
                        
                    {Object.values(providers).map((provider) => {

                        if (provider.name === 'Google') {
                            return (

        <div key={provider.name}>

<a
                        onClick={() => signIn(provider.id, { redirect: false, callbackUrl: '/' })}
                        href="#"
                        title=""
                        className="
                            flex
                            items-center
                            justify-center
                            w-full
                            px-8
                            py-4
                            mt-8
                            text-base
                            font-bold
                            text-gray-900
                            transition-all
                            duration-200
                            bg-gray-100
                            border border-transparent
                            rounded-xl
                            hover:bg-gray-200
                            focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200
                            font-pj
                        "
                        role="button"
                    >
                         <svg class="w-5 h-5 mr-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.2436 8.26113L11.0858 8.26074C10.7256 8.26074 10.4336 8.5527 10.4336 8.91293V11.519C10.4336 11.8791 10.7256 12.1712 11.0858 12.1712H15.6798C15.1767 13.4767 14.2378 14.57 13.0399 15.2647L14.9988 18.6557C18.1411 16.8384 19.9988 13.6497 19.9988 10.0803C19.9988 9.57203 19.9613 9.20871 19.8864 8.79961C19.8295 8.48879 19.5596 8.26113 19.2436 8.26113Z"
                                fill="#167EE6"
                            />
                            <path
                                d="M9.99957 16.0871C7.75137 16.0871 5.78871 14.8587 4.73461 13.041L1.34375 14.9955C3.06934 17.9862 6.30191 20.0001 9.99957 20.0001C11.8135 20.0001 13.5251 19.5117 14.9996 18.6606V18.6559L13.0407 15.2649C12.1447 15.7846 11.1078 16.0871 9.99957 16.0871Z"
                                fill="#12B347"
                            />
                            <path d="M15 18.6603V18.6557L13.0411 15.2646C12.1451 15.7843 11.1083 16.0868 10 16.0868V19.9998C11.8139 19.9998 13.5256 19.5114 15 18.6603Z" fill="#0F993E" />
                            <path d="M3.91305 10.0002C3.91305 8.89207 4.21547 7.85531 4.73504 6.95934L1.34418 5.00488C0.488359 6.47469 0 8.18164 0 10.0002C0 11.8188 0.488359 13.5258 1.34418 14.9956L4.73504 13.0411C4.21547 12.1452 3.91305 11.1084 3.91305 10.0002Z" fill="#FFD500" />
                            <path
                                d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
                                fill="#FF4B26"
                            />
                            <path d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z" fill="#D93F21" />
                        </svg>
                       
                        Sign in with {provider.name}
                    </a>
        </div>
        )
    }
 } )}
                                </div>

                  
  
                  {/* <p className="mt-4 text-base text-center text-gray-900 font-pj">Don’t have an account? <a href="/createaccount" title="" className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Create an account </a></p> */}
              </div>
  
              <div className="lg:px-12 xl:px-16">
                  <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">Search jobs from the top DTC brands</h3>
  
                  <svg className="w-auto h-4 mt-8 text-gray-300 lg:mt-12" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
                      <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
                  </svg>
  
                  <ul className="mt-8 space-y-6 lg:mt-12 md:space-y-9">
                      <li className="flex items-startt">
                          <img alt="thumbs up logo" loading="lazy" className="flex-shrink-0 w-10 h-10" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-thumb.png"   />
                          <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj"> <span className="font-bold">Jobs strictly from ecom brands.</span> If you're about the DTC life, generic jobs won't cut it. We've got the jobs specifically for you. </span>
                      </li>
  
                      <li className="flex items-startt">
                          <img alt="mailbox logo" loading="lazy" className="flex-shrink-0 w-10 h-10" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-mailbox.png"   />
                          <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj"> <span className="font-bold">Get email alerts for open positions.</span> If a company you love is hiring, or a job position you want is open - you'll know right away.</span>
                      </li>
  
                      <li className="flex items-startt">
                          <img alt="time logo" loading="lazy" className="flex-shrink-0 w-10 h-10" src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-sand-clock.png"   />
                          <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj"> <span className="font-bold">Apply to more jobs faster.</span> Spend less time smashing your keyboard looking for jobs, and more time applying to them. </span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  
      )
  }
  export default ComponentName;