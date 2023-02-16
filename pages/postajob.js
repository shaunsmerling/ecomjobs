
import { useState } from "react";
import { useRouter } from "next/router";
import Preview from "../components/preview";
import { NextSeo } from "next-seo";
import { generateJobUrl } from "../script.js";
import { useSession, getSession } from "next-auth/react"

export async function getServerSideProps(context) {
  return {
      props: {
          session: await getSession(context)
      },
  }
}

function PostAJob() {

  const router = useRouter()

  const { data: session } = useSession() 

const [addOn, setAddOn] = useState(0)

// function dateToUnixTimestamp(date) {
//   let datets = Math.floor(date.getTime() / 1000)
//   return datets.toString()
// }

// const now = new Date();
// const datets = dateToUnixTimestamp(now);





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
    salaryMin: 0,
    salaryMax: 0,
    companyDescription: "",
    jobDescription: "",
    jobRequirements: "",
    applicationUrl: "",
    user_id: "",
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
    // console.log(fields)
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
        salaryMin: salaryMin,
        salaryMax: salaryMax,
        job_category: jobCategory,
        postedat: postedat,
        job_type: jobType,
        location: location,
        city: city,
        company_description: companyDescription,
        job_description: jobDescription,
        job_requirements: jobRequirements,
        application_url: applicationUrl,
        jobUrl,
        user_id: session.id,
        // datets: datets
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

      // getLink()
  };

  {/* https://buy.stripe.com/7sI4joeqI5bnemQ5kp (Normal Job Post, no Addons) */}
{/* https://buy.stripe.com/6oEaHM1DW47ja6A6ou (Job Post + Highlight Addon) */}
{/* https://buy.stripe.com/dR66rw82kcDPa6AfZ5 (Job Post + Top Pinned Addon) */}
{/* https://buy.stripe.com/aEU2bgbew33f1A4dQY (Job Post + Top Pinned + Highlight) */}

  const {
    email,
    companyName,
    salaryMin,
    salaryMax,
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
    <div className="bg-white pt-4 px-20 lg:mx-10 mx-2 rounded-lg">
      <div class="hugger">
<div class="hugger__content">
<div class="wizard">
<div class="max-w-5xl my-8">
<h1 class="text-2xl md:text-4xl font-bold block md:inline text-lightGreen-300">Hire the best. </h1>
<h2 class="text-xl md:text-4xl block md:inline font-normal md:font-light">Post a job & reach thousands of potential employees working in the eCommerce industry.</h2>
</div>
<div class="grid grid-cols-5 mb-16">
<form class="col-span-5" onSubmit={handleSubmit} accept-charset="UTF-8">
<div class="space-y-8 divide-y divide-gray-200">

{session ? (
<div>
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Interested in creating a company profile?</h3>
<p class="mt-1 text-gray-500">Create a profile page for your brand so that future employees can learn more</p>
</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

<div class="sm:col-span-3 form-field">
<a class="whitespace-nowrap inline-flex items-center justify-center pl-3 pr-1 py-1 border border-transparent rounded-full shadow-sm text-base font-medium text-white  bg-lightGreen-300 " href="/list-your-company">
Register Here
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</a>
</div>

<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" >Company Name</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
value={companyName}
onChange={handleChange}
name="companyName"
/>
</div>
<label class="block mt-4 text-sm font-medium text-gray-700" >Website URL</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
value={companyUrl}
onChange={handleChange}
name="companyUrl"
/>
</div>
</div>




</div>
</div>
) : (
<div>
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Create an account with us</h3>
<p class="mt-1 text-gray-500">Create an account to save your jobs, create a company page, and get alerts</p>
</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

<div class="sm:col-span-3 form-field">
<a class="whitespace-nowrap inline-flex items-center justify-center pl-3 pr-1 py-1 border border-transparent rounded-full shadow-sm text-base font-medium text-white  bg-lightGreen-300 " href="/signup">
Sign In
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</a>
</div>

<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" >Company Name</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
value={companyName}
onChange={handleChange}
name="companyName"
/>
</div>
<label class="block mt-4 text-sm font-medium text-gray-700" >Website URL</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
value={companyUrl}
onChange={handleChange}
name="companyUrl"
/>
</div>
</div>




</div>
</div>

)}

{/* <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_company_attributes_name">Company Name</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input autofocus="autofocus" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" type="text" name="post[company_attributes][name]" id="post_company_attributes_name"/>
</div>
</div>

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_company_attributes_website_url">Website</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" type="text" name="post[company_attributes][website_url]" id="post_company_attributes_website_url"/>
</div>
</div>


</div> */}


<div>
<div class="pt-8">
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Job Details</h3>
<p class="mt-1 text-gray-500">Please be as detailed as possible describing the job opening.</p>
</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700">Job Title</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
value={jobPosition}
onChange={handleChange}
name="jobPosition"
/>
</div>
</div>
<div class="sm:col-span-2 form-field">
<label class="block text-sm font-medium text-gray-700" >Job Category</label>
<div class="mt-1">
<select
value={jobCategory}  
onChange={handleChange} 
class="block w-full rounded-md border-gray-300 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
name="jobCategory"
>
<option value="">Select a category</option>
<option value="Marketing">Marketing</option>
<option value="Biz Ops">Biz Ops</option>
<option value="Creative">Creative</option>
<option value="Customer Service">Customer Service</option>
<option value="Web Development">Web Dev</option>
<option value="Product">Product</option>
<option value="Finance">Finance</option>
<option value="People & HR">People & HR</option>
<option value="Sales">Sales</option>
<option value="Logistics">Logistics</option>

</select>
</div>
</div>
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" >Primary Location</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
name="location"
value={location}
onChange={handleChange}
/>
</div>
</div>
<div class="sm:col-span-2 form-field">
<label class="block text-sm font-medium text-gray-700">Job Type</label>
<div class="mt-1">
<select 
class="block w-full rounded-md border-gray-300 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
name="jobType"
value={jobType}
onChange={handleChange}>
<option value="Remote">Remote</option>
<option value="In-Office">In-Office</option>
<option value="Hybrid">Hybrid</option></select>
</div>
</div>
<div class="sm:col-span-6 form-field">
<label class="block text-sm font-medium text-gray-700" >Application URL or Public Email</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
name="applicationUrl"
value={applicationUrl}
onChange={handleChange}
/>
</div>
</div>
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" >Salary Range </label>
<div class="mt-1 flex">
<input 
class="block w-full mr-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="number" 
value={salaryMin}
onChange={handleChange}
placeholder="min"
name="salaryMin"

/>
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="number" 
name="salaryMax"
placeholder="max"
// value={empcount}
onChange={handleChange} 
value={salaryMax}
/>
</div>
</div>
<div class="sm:col-span-4 form-field">
<label  class="block text-sm font-medium text-gray-700 mb-1">
                    {" "}
                    Upload a logo: (Less than 100KB. To compress your image, visit <a href="https://tinypng.com/"> https://tinypng.com/ </a>):{" "}
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
<div class="sm:col-span-6 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_url">Job Description</label>
<div class="mt-1">
<textarea 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
name="jobDescription"
value={jobDescription}
onChange={handleChange}
/>
</div>
</div>
<div class="sm:col-span-6 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_url">Role Requirements</label>
<div class="mt-1">
<textarea 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
name="jobRequirements"
value={jobRequirements}
onChange={handleChange}
/>
</div>
</div>
</div>
</div>
</div>


{/* <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_title">Location (City, State, Country)</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
name="location"
value={location}
onChange={handleChange} 
/>
</div>
</div>

<div class="sm:col-span-4 form-field">
<label for="" class="block text-sm font-medium text-gray-700 mb-1">
                    {" "}
                    Upload a logo: (Less than 100KB. To compress your image, visit <a href="https://tinypng.com/"> https://tinypng.com/ </a>):{" "}
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
</div> */}
{/* {session ? "" : (
<div class="pt-8">
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Create your account</h3>
<p class="mt-1 text-gray-500">You'll use this to manage this and all future job listings.</p>
</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_user_attributes_first_name">Name</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
name="applicant_name"
/>
</div>
</div>

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_user_attributes_email">Email</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="email" 
value={email}
name="email" 
onChange={handleChange} />
</div>
</div>
</div>
</div>
)} */}
</div>

<div class="pt-5">
<div class="flex fixed w-full bottom-0 left-0 right-0 z-10 py-1 justify-center bg-white border-t sm:justify-end sm:relative sm:w-auto sm:p-0 sm:border-none">
<button
            type="submit"
            href=""
            class="flex relative items-center w-10/12 justify-center lg:mb-4 mx-auto px-20 py-3 sm:text-sm text-base sm:py-3.5  text-white transition-all duration-200 bg-[#17614A] border border-transparent rounded-lg  hover:bg-[#114031] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Post a job for $99
          </button>
</div>
</div>
</form></div>
</div>
</div>
</div>
<div class="spinner"></div>
    </div>
    
  );
}


export default PostAJob;
