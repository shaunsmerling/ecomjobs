import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs"


const CreateAccount = () => {     

  
    const router = useRouter(); 

    const [accpassword, setAccPassword] = useState("");
    
    const [fields, setFields] = useState({
        email: "",
        name: "",
        });

    const handleChange = ({ target }) => {
        setFields({ ...fields, [target.name]: target.value });
    };

    const redirectToHome = () => {
       if (router.pathname === "/createaccount") {
            router.push("/");
            } 
      }

    const hashedPassword = (e) => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(e, salt);
        return setAccPassword(hash);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/users", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            name: name,
            password: accpassword,
          }),
        })
        .then(async () => {
            await signIn("credentials", { email: email, password: accpassword, redirect: false, callbackUrl: "/" });
            redirectToHome();
            console.log(session)
        })
        //   .then((response) => response.json())
        //   .then((jsonResponse) => {
        //     console.log(jsonResponse, "JSON");
        //   })
          .catch((err) => {
            console.log(err, "Error");
          });
    
        
      };


      const {
        email,
        name,
      } = fields

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:pt-24 lg:pb-60">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="mb-10">
            <a href="../">
              <img className="w-auto h-24 mx-auto" src="/logo.png" alt="" />
              </a>
          </div>
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Find eCommerce brands that're hiring</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Join eComportal today and get access to thousands of brands hiring</p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-4 py-6 sm:px-8 sm:py-7">
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> First & Last name </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>

                                    <input
                                        type="text"
                                        value={name}
                                        onChange={handleChange}
                                        name="name"
                                        id=""
                                        placeholder="Enter your full name"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>

                                    <input
                                        type="email"
                                        value={email}
                                        name="email"
                                        onChange={handleChange}
                                        id=""
                                        placeholder="Enter email to get started"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Password </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                            />
                                        </svg>
                                    </div>

                                    <input
                                        type="password"
                                        name="password"
                                        onChange={(e)=>{hashedPassword(e.target.value)}} 
                                        id=""
                                        placeholder="Enter your password"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input type="checkbox" name="agree" id="agree" className="w-5 h-5 text-green-500 bg-white border-gray-200 rounded" />

                                <label for="agree" className="ml-3 text-sm font-medium text-gray-500">
                                    I agree to eComportal's <a href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and <a href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                                </label>
                            </div>

                            <div>
                                <button type="submit" className="inline-flex items-center bg-[#17614A] justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none hover:bg-black focus:bg-black">
                                    Create account
                                </button>
                            </div>

                            <div className="text-center">
                                <p className="text-base text-gray-600">Already have an account? <a href="/signup" title="" className="font-medium text-blue-500 transition-all duration-200 hover:underline hover:text-blue-500">Login here</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}
export default CreateAccount