import React, { useState } from "react";
import { useRouter } from "next/router";

const HeroBanner = () => {
  const [emails, setEmails] = useState({
    email: "",
  });

  const router = useRouter();

  const handleChange = ({ target }) => {
    setEmails({ ...emails, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });
  };

  const { email } = emails;

  return (
    <div className="">
      <section class="relative py-12  bg-white sm:py-16 lg:py-20">
        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class=" mx-auto text-center relative">
            <div className="svg_images top">
              <div className="spahes">
                <svg
                  width="58"
                  height="70"
                  viewBox="0 0 58 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.5 68.5L6.5 40L26.5 7L56.5 68.5Z"
                    stroke="#BEF8A5"
                    stroke-linecap="round"
                  />
                  <path d="M50 61.5L0 33L20 0L50 61.5Z" fill="#BEF8A5" />
                </svg>
              </div>

              <div className="shpesImg">
                <svg
                  width="84"
                  height="79"
                  viewBox="0 0 84 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00035 33.9235L49.2314 59.2292L65.3438 27.1185L2.00035 33.9235Z"
                    stroke="#94D743"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.7381 35.5814L57.9692 60.8872L74.0816 28.7765L10.7381 35.5814Z"
                    fill="#94D743"
                  />
                </svg>
              </div>
            </div>
            {/* 

                <h2  class="leading-normal text-4xl font-bold lg:leading-normal   lg:text-5xl">Hand-picked Jobs For The eCommerce Industry</h2>
               
                <p class="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-500">Join an eCommerce brand. Help shape the future by working with some of the fastest growing D2C companies. </p> */}
            <div className="mb-2 herobanners">
              <h1 class=" font-bold  ">
                <span className="find-text">Find a job in the </span>
                <br />
                <span class="text-transparent"> Ecommerce </span>
                Industry
              </h1>
              <h2 class="">
                Join thousands of people getting weekly alerts from brands
                hiring
              </h2>
            </div>
            <form
              action="#"
              onSubmit={handleSubmit}
              method="POST"
              class="max-w-md mx-auto  space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end"
            >
              <div class="flex-1">
                <label for="" class="sr-only">
                  {" "}
                  Email address{" "}
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    class="block w-full px-4 py-3 sm:py-3.5 text-base 
            font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg 
            sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                    placeholder="Type your email..."
                  />
                </div>
              </div>

              <div class="relative group">
                <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <button
                  type="submit"
                  value="Submit"
                  onClick={() =>
                    alert(
                      "Thank you for your  submission. Please check your inbox for a confirmation email"
                    )
                      ? ""
                      : router.push("/signup")
                  }
                  class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg  hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <ul class="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-xs font-medium text-gray-900 sm:text-sm">
                  {" "}
                  Updated Daily{" "}
                </span>
              </li>

              <li class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-xs font-medium text-gray-900 sm:text-sm">
                  {" "}
                  Curated & Vetted{" "}
                </span>
              </li>

              <li class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-xs font-medium text-gray-900 sm:text-sm">
                  {" "}
                  Over 2763+ DTC Jobs Available
                </span>
              </li>
            </ul>

            <div className="svg_images bottom">
              <div className="shpesImg">
                <svg
                  width="84"
                  height="79"
                  viewBox="0 0 84 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00035 33.9235L49.2314 59.2292L65.3438 27.1185L2.00035 33.9235Z"
                    stroke="#94D743"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.7381 35.5814L57.9692 60.8872L74.0816 28.7765L10.7381 35.5814Z"
                    fill="#94D743"
                  />
                </svg>
              </div>

              <div className="spahes">
                <svg
                  width="58"
                  height="70"
                  viewBox="0 0 58 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.5 68.5L6.5 40L26.5 7L56.5 68.5Z"
                    stroke="#BEF8A5"
                    stroke-linecap="round"
                  />
                  <path d="M50 61.5L0 33L20 0L50 61.5Z" fill="#BEF8A5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroBanner;
