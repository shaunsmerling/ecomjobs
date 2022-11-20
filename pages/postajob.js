import { checkout } from "../checkout.js";
import { useState } from "react";
import Preview from "../components/preview";
import { NextSeo } from "next-seo";
import { generateJobUrl } from "../script.js";

function PostAJob() {
  const [fields, setFields] = useState({
    email: "",
    companyName: "",
    companyUrl: "",
    jobPosition: "",
    logo: "",
    jobCategory: "",
    postedat: "",
    jobType: "",
    location: "",
    city: "",
    companyDescription: "",
    jobDescription: "",
    jobRequirements: "",
    applicationUrl: "",
  });

  const handleChange = ({ target }) => {
    setFields({ ...fields, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobUrl = generateJobUrl(companyName, jobPosition, jobType);
    fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        company_name: companyName,
        company_url: companyUrl,
        job_position: jobPosition,
        logo: companyLogo,
        job_category: jobCategory,
        postedat: postedat,
        job_type: jobType,
        location: location,
        city: city,
        company_description: companyDescription,
        job_description: jobDescription,
        job_requirements: jobRequirements,
        application_url: applicationUrl,
        jobUrl
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse, "JSON");
        checkout({
          lineItems: [
            {
              price: "price_1M6CyrJ3L3qVyujTFalmvGtb",
              quantity: 1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  const {
    email,
    companyName,
    companyUrl,
    jobPosition,
    logo,
    jobCategory,
    postedat,
    jobType,
    location,
    city,
    companyDescription,
    jobDescription,
    jobRequirements,
    applicationUrl,
  } = fields;

  const [companyLogo, setCompanyLogo] = useState();

  return (
    <div className="">
      <NextSeo
        title="Post A Job | eCommerce Jobs"
        description="Post a job on the #1 eCommerce job board"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "SiteName",
        }}
        twitter={{
          site: "@ecomjobs_",
          cardType: "summary",
          image: "/logo.png",
        }}
      />
      <form onSubmit={handleSubmit} className=" ">
        <div className="mx-6 my-10 flex flex-col ">
          <div class="py-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    Email{" "}
                  </label>
                  <div class="mt-2">
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="elonmusk@spacex"
                      value={email}
                      onChange={handleChange}
                      class="block w-full pr-14  py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-medium text-gray-600">
                    {" "}
                    Company Name{" "}
                  </label>
                  <div class="relative mt-2">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      required
                      name="companyName"
                      placeholder="Space X"
                      value={companyName}
                      onChange={handleChange}
                      class="block w-full pl-10 pr-4 py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    {" "}
                    Company URL:{" "}
                  </label>
                  <div class="relative flex mt-2">
                    <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">
                      https://
                    </div>

                    <input
                      type="url"
                      required
                      name="companyUrl"
                      placeholder="www.spacex.com"
                      value={companyUrl}
                      onChange={handleChange}
                      class="flex-1 border block w-full min-w-0 px-4 py-3 placeholder-gray-500 
                    border-gray-300 border-2 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    Job Position:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      required
                      name="jobPosition"
                      placeholder="Social Media Manager"
                      value={jobPosition}
                      onChange={handleChange}
                      class="block w-full pr-14  py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div class="sm:flex sm:items-center sm:space-x-8">
                  <label for="" class="block text-xs font-bold text-gray-900">
                    {" "}
                    Upload a logo: <br></br>(Please upload a photo less <br></br>than 100KB. <br></br> To compress your image, <br></br> visit <a href="https://tinypng.com/"> https://tinypng.com/ </a>):{" "}
                  </label>
                  <div class="relative mt-2 sm:mt-0 sm:flex-1">
                    <input
                      type="file"
                      name="logo"
                      accept="image/*"
                      required
                      onChange={(e) => {
                        if (e?.target?.files?.[0]) {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setCompanyLogo(reader.result);
                          };
                          reader.readAsDataURL(file);
                          handleChange;
                        }
                      }}
                      class="block w-full px-4 border py-3 placeholder-gray-500 border border-gray-300 
                     rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />

                    {companyLogo && (
                      <img src={companyLogo} className="mt-4 object-cover" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-medium text-black">
                    Category
                  </label>
                  <div class="relative mt-2">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <select
                      value={jobCategory}
                      onChange={handleChange}
                      required
                      name="jobCategory"
                      class="block w-full py-3 pl-12 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    >
                      <option name="null" value="null">
                        Pick an option
                      </option>
                      <option name="Customer Service" value="Customer Service">
                        Customer Service
                      </option>
                      <option name="Marketing" value="Marketing">
                        Marketing
                      </option>
                      <option name="Creative" value="Creative">
                        Creative
                      </option>
                      <option name="Web Development" value="Web Development">
                        Web Development
                      </option>
                      <option name="People & HR" value="People & HR">
                        People & HR
                      </option>
                      <option name="Sales" value="Sales">
                        Sales
                      </option>
                      <option name="Biz Ops" value="Biz Ops">
                        Biz Ops
                      </option>
                      <option name="Product" value="Product">
                        Product
                      </option>
                      <option name="Finance" value="Finance">
                        Finance
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    Date Of Posting:
                  </label>
                  <div class="mt-2">
                    <input
                      type="date"
                      required
                      name="postedat"
                      value={postedat}
                      onChange={handleChange}
                      class="block w-full  py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-medium text-black">
                    Job Type:
                  </label>
                  <div class="relative mt-2">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <select
                      value={jobType}
                      onChange={handleChange}
                      required
                      name="jobType"
                      class="block w-full py-3 pl-12 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    >
                      <option name="Null" value="Null">
                        Pick an option
                      </option>
                      <option name="Remote" value="Remote">
                        Remote
                      </option>
                      <option name="Hybrid" value="Hybrid">
                        Hybrid
                      </option>
                      <option name="In-Office" value="In-Office">
                        In-Office
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    Country:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      required
                      name="location"
                      placeholder="USA"
                      value={location}
                      onChange={handleChange}
                      class="block w-full pr-14  py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    City:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      required
                      name="city"
                      placeholder="New York"
                      value={city}
                      onChange={handleChange}
                      class="block w-full pr-14  py-3 placeholder-gray-500 border-gray-300 
                    border-2 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-medium text-black">
                    Company Description{" "}
                  </label>
                  <div class="relative mt-2">
                    <div class="absolute top-0 left-0 flex items-center pt-4 pl-4 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>

                    <textarea
                      name="companyDescription"
                      id=""
                      placeholder="Describe your company..."
                      onChange={handleChange}
                      value={companyDescription}
                      rows="3"
                      class="border-2 block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-medium text-black">
                    Job Description{" "}
                  </label>
                  <div class="relative mt-2">
                    <div class="absolute top-0 left-0 flex items-center pt-4 pl-4 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>

                    <textarea
                      name="jobDescription"
                      placeholder="A Social Media Manager knows how to schedule creatives..."
                      onChange={handleChange}
                      value={jobDescription}
                      rows="3"
                      class="border-2 block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-medium text-black">
                    Job Requirements{" "}
                  </label>
                  <div class="relative mt-2">
                    <div class="absolute top-0 left-0 flex items-center pt-4 pl-4 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>

                    <textarea
                      name="jobRequirements"
                      placeholder="-3+ years experience in managing 100k+ account followers...."
                      onChange={handleChange}
                      value={jobRequirements}
                      rows="3"
                      class="border-2 block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-8 bg-white">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="max-w-xl mx-auto">
                <div>
                  <label for="" class="block text-sm font-bold text-gray-900">
                    {" "}
                    Application URL:{" "}
                  </label>
                  <div class="relative flex mt-2">
                    <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">
                      https://
                    </div>

                    <input
                      type="url"
                      required
                      name="applicationUrl"
                      placeholder="www.applyhere.com"
                      value={applicationUrl}
                      onChange={handleChange}
                      class="flex-1 border block w-full min-w-0 px-4 py-3 placeholder-gray-500 
                    border-gray-300 border-2 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="flex relative items-center justify-center  sm:w-auto mx-auto w-1/2 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg  hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Post Your Job
          </button>
        </div>
      </form>
      <div className="hidden lg:block bg-gray-100 pb-10">
        <div className="text-center mt-10 pt-10 mx-48">
          <div className=" mx-28">
            <ul className="rounded-lg text-left  pl-10 py-4 flex  bg-white hover:bg-gray-100  bg-white  shadow-lg">
              <img
                className="mx-auto ml-10 border-2 rounded-full border-[#17614A] my-auto h-14 w-14 "
                src={companyLogo ? `${companyLogo}` : "/mock.png"}
                name="image"
              ></img>
              <li className="w-full ml-2 mt-2 mb-4 box-border ">
                <p className=" ml-2 mt-2 z-1 text-sm text-[#17614A] pb-1">
                  {companyName ? `${companyName}` : "Company"}
                </p>
                <p className=" ml-2 -mb-2 z-1 text-xl text-[#17614A] z-0 font-bold pb-2 pr-20">
                  {jobPosition ? `${jobPosition}` : "Position"}
                </p>
                <p className="float-right mr-4 text-[8px] -mt-10 bold font-bold lg:text-sm">
                  {jobType ? `${jobType}` : "Remote"} |{" "}
                  {location ? `${location}` : "USA"}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <br></br>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />

        <main class="profile-page">
          <section class="relative block  h-500-px">
            <div class="absolute top-0 w-full h-full bg-center bg-cover"></div>
          </section>
          <section class="relative">
            <div class="container mx-auto  px-4">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
                <div>
                  <div class="mt-4 ml-6">
                    <img
                      src={companyLogo ? `${companyLogo}` : "/mock.png"}
                      alt="..."
                      class="my-10 border-4  max-w-120-px"
                    />

                    <a
                      target="_blank"
                      href={applicationUrl}
                      class="flex float-right  justify-center w-auto text-xs px-6 mr-4 lg:text-lg  -mt-20 rounded-full lg:px-10   lg:mr-10  py-4  text-base  font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                      Apply Now
                    </a>

                    <h2 class="text-3xl my-4 text-black font-bold">
                      {companyName ? `${companyName} ` : "Company "}
                    </h2>

                    <div class="text-sm leading-normal  text-blueGray-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {city ? `${city}` : "Los Angeles"},{" "}
                      {location ? `${location}` : "USA"}
                    </div>

                    <div class=" text-blueGray-600 my-2">
                      <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      <a href={companyUrl} className="text-sky-400">
                        {companyUrl
                          ? `${companyUrl}`
                          : "https://www.ecom-jobs.com"}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="sm:text-2xl lg:text-5xl my-4 mx-auto font-bold underline ">
                    {jobPosition ? `${jobPosition}` : "Position"}
                  </h2>
                  <h3 className="my-1 text-md lg:text-xl text-[#6879a5]">
                    {" "}
                    {jobCategory ? `${jobCategory}` : "Marketing"} •{" "}
                    {jobType ? `${jobType}` : "Remote"} • 1s ago
                  </h3>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p>
                        {companyDescription
                          ? `${companyDescription} `
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                      </p>
                      <br></br>
                      <br></br>

                      <p>
                        {jobDescription
                          ? `${jobDescription} `
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                      </p>
                      <br></br>
                      <br></br>

                      <p>
                        {jobRequirements
                          ? `${jobRequirements} `
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                      </p>
                      <br></br>
                      <br></br>

                      <a
                        target="_blank"
                        href={applicationUrl}
                        class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg  hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/*<div className="hidden lg:block">
        <div className="text-center my-6">
        <p className="font-bold text-3xl my-2 text-[#17614A]">Preview </p>
        <p>Here's a preview of how your job post will look like</p>
        </div>
        <div className="text-center border border-black mx-48">
            <div className="my-6 mx-28">
              <ul className="rounded-lg text-left py-4 flex  bg-white hover:bg-gray-100  bg-white  shadow-lg">
              <img className="mx-auto ml-4 border-2 rounded-full border-[#17614A] my-auto h-14 w-14 " src={logo ? `${logo}` : "/mock.png"}></img>
              <li className="w-full ml-2 mt-2 mb-4 box-border ">
                <p className=" ml-2 mt-2 z-1 text-sm text-[#17614A] pb-1">
                  {companyName}
                </p>
                <p className=" ml-2 -mb-2 z-1 text-xl text-[#17614A] z-0 font-bold pb-2 pr-20">{jobPosition}</p>
                <p className="float-right mr-4 text-[8px] -mt-10 bold font-bold lg:text-sm">{jobType || location ? `${jobType} | ${location}` : " "}</p>
              </li>
            </ul>
            </div>
            <br></br>
            <div>
  
                <img className="mx-auto border-2 rounded-full border-[#17614A] h-28 w-28 " src={logo ? `${logo}` : "/mock.png"}></img>
                <br></br>
  
                <p classaName="font-bold text-[#17614A]">{companyName ? `${companyName} ` : "Company "}<span className="italic">is hiring a</span></p>
                <h2 className="text-3xl  text-[#17614A] my-2 font-bold">{jobPosition ? `${jobPosition}` : "Position"}</h2>
                <div className="my-2">
                <h3 className="my-1">Category: <span className=" text-[#17614A]">{jobCategory}</span></h3>
                <h3 className="my-1">Location: <span className=" text-[#17614A]">{city}, {location}</span></h3>
                <h3 className="my-1">Type: <span className="text-[#17614A]">{jobType}</span></h3>
                <p className="my-1">1s ago</p>
                <br></br>
                <a
                id="applybtn"
                target="_blank"
                className=" text-black border border-black bg-[#26EB6B] font-medium rounded-lg text-sm px-20 py-2 text-center  content-center hover:rounded-full"
              >
       
          Apply Now
        </a>
        <br></br>
        <br></br>
        
        <div className="mx-2 border border-[#17614A] rounded-lg pb-4 lg:mx-32 mb-4">
          <div className="mx-4 my-2">
            <h3>
              <b className="bold">Who We Are:</b>
            </h3>
            <p>{companyDescription ? `${companyDescription} ` : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
            <br></br>
            <br></br>
            <h3>
              <b className="bold">Job Description:</b>
            </h3>
            <p>{jobDescription ? `${jobDescription} ` : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
            <br></br>
            <br></br>
            <h3 className="">
              <b className="bold">Candidate Requirements:</b>
            </h3>
            <p>{jobRequirements ? `${jobRequirements} ` : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
            <br></br>
            <br></br>
            <a
              id="applybtn"
              target="_blank"

              className=" text-black border border-black bg-[#26EB6B] font-medium rounded-lg text-sm px-20 py-2 text-center  content-center hover:rounded-full"
            >
            
              Apply Now
            </a>
          </div>
            </div>
            
            </div>
        </div>
      
        </div>
        </div>*/}
      <Preview />
    </div>
  );
}

export default PostAJob;
