
import { useState } from "react";
import { useRouter } from "next/router";
import Preview from "../components/preview";
import { NextSeo } from "next-seo";
import { generateJobUrl } from "../script.js";



function PostAJob() {

  const router = useRouter()


const [addOn, setAddOn] = useState(0)

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


  function getLink() {
    switch (addOn) {
      case 0:
        return router.push("https://buy.stripe.com/7sI4joeqI5bnemQ5kp")
      case 1:
        return router.push("https://buy.stripe.com/6oEaHM1DW47ja6A6ou")
      case 2:
        return router.push("https://buy.stripe.com/dR66rw82kcDPa6AfZ5")
      case 3:
        return router.push("https://buy.stripe.com/aEU2bgbew33f1A4dQY")
    }
  }

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

        // checkout({
        //   lineItems: [
        //     {
        //       price: "price_1M6CyrJ3L3qVyujTFalmvGtb",
        //       quantity: 1,
        //     },
        //   ],
        // });
      })
      .catch((err) => {
        console.log(err, "Error");
      });

      getLink()
  };

  {/* https://buy.stripe.com/7sI4joeqI5bnemQ5kp (Normal Job Post, no Addons) */}
{/* https://buy.stripe.com/6oEaHM1DW47ja6A6ou (Job Post + Highlight Addon) */}
{/* https://buy.stripe.com/dR66rw82kcDPa6AfZ5 (Job Post + Top Pinned Addon) */}
{/* https://buy.stripe.com/aEU2bgbew33f1A4dQY (Job Post + Top Pinned + Highlight) */}

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

<div class=" my-8 mb-10 text-center ">
<h2 class="text-3xl text-[#17614A] md:text-4xl font-bold  md:inline d">Hire the best. </h2>
<h2 class="text-3xl md:text-4xl  md:inline font-normal md:font-light">Reach thousands of job seekers in the ecommerce industry.</h2>
</div>

<div class="max-w-3xl mx-auto text-center">
            <p class="mt-4 text-base font-normal mx-4 leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">Each job listing costs $199 & will remain active for 30 days. Your job will also be sent to our active email list. If you're interested in buying job posts in bulk at a discount & saving them as pre-purchased credits, visit our <a className="text-sky-500" href="/bulkdiscounts">bulk pricing page.</a></p>
        </div>
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
                    

                    <input
                      type="url"
                      required
                      name="companyUrl"
                      placeholder="https://www.spacex.com"
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
                      <img loading="lazy" src={companyLogo} className="mt-4 object-cover" />
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
                   
                    <input
                      type="url"
                      required
                      name="applicationUrl"
                      placeholder="https://www.applyhere.com"
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

          <div class="py-12 -mt-12 bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-sm mx-auto">

            <div class="mt-6 space-y-4 lg:-mx-28" x-data="{ selected: 3 }">
                <div class="flex items-start">
                    <div class="flex items-center h-5 pt-1.5">
                        <input type="radio" name="visibility" id="public" class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0" x-model="selected" onChange={() => setAddOn(1)} value="1" />
                    </div>

                    <div class="ml-4 mb-4">
                        <label for="public" class="text-lg font-bold text-gray-900 cursor-pointer"> $99 | Highlight Add-on </label>
                        <p class="mt-1 text-md font-medium text-gray-500">Make your job post stand out from the rest by making it pop with it a flashy yellow color</p>
                    </div>
                </div>

                <div class="mt-4 flex items-start">
                    <div class="flex items-center h-5 pt-1.5">
                        <input type="radio" name="visibility" id="private" class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0" x-model="selected" onChange={() => setAddOn(2)} value="2" />
                    </div>

                    <div class="ml-4 mb-4">
                        <label for="private" class="text-lg font-bold text-gray-900 cursor-pointer"> $99 | Top Pinned </label>
                        <p class="mt-1 text-md font-medium text-gray-500">For 30 days, we'll pin your job post to the top to get 50% more interactions</p>
                    </div>
                </div>

                <div class="flex items-start">
                    <div class="flex items-center h-5 pt-1.5">
                        <input type="radio" name="visibility" id="unlisted" class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0" x-model="selected" onChange={() => setAddOn(3) }value="3" />
                    </div>

                    <div class="ml-4">
                        <label for="unlisted" class="text-lg font-bold text-gray-900 cursor-pointer"> $150 | Highlight Add-on + Top Pinned 🔥</label>
                        <p class="mt-1 text-md font-medium text-gray-500">Add on both! We'll pin your post to the top & highlight it. This is our most effective addon choice for reaching all our applicants</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



          <button
            type="submit"
            href=""
            class="flex relative items-center justify-center mb-10 sm:w-auto mx-auto w-1/2 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg  hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
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
              loading="lazy"
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
                    loading="lazy"
                      src={companyLogo ? `${companyLogo}` : "/logo.png"}
                      alt="..."
                      class="my-10 border-4 h-16 max-w-120-px"
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

  
      <Preview />
    </div>
  );
}

export default PostAJob;
