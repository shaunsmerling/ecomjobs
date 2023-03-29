
import { useState } from "react";
import { generateCompanyUrl } from "../scriptcompany.js";
import {useRouter} from "next/router"




function ListCompany() {


  const router = useRouter()

  const [fields, setFields] = useState({
    company_name: "",
    company_url: "",
    location: "",
    logo: "",
    empcount: "",
    company_description: "",
    mission: "",
    email: "",
    applicant_name: "",
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const val = type === 'file' ? event.target.files[0] : value; // Extract file object if type is file
    setFields({ ...fields, [name]: val });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const companyUrl = generateCompanyUrl(company_name);
    fetch("/api/company", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        company_name: company_name,
        company_url: company_url,
        logo: companyLogo,
        empcount: empcount,
        location: location,
        company_description: company_description,
        mission: mission,
        applicant_name: applicant_name,
        companyUrl
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
      delayLoad()
  };

  function delayLoad() {
    let timerId;
    showSpinner()
    timerId = setTimeout(() => {
      router.push('/brands');
    }, 4000);

    if (router.pathname === '/brands') {
      clearTimeout(timerId);
    }

  }

  function showSpinner() {
    document.querySelector(".spinner").classList.add("show")
}





  const {
    company_name,
    company_url,
    location,
    logo,
    empcount,
    company_description,
    mission,
    email,
    applicant_name,
  } = fields;

  const [companyLogo, setCompanyLogo] = useState();

  return (
    <div className="bg-white pt-4 px-20 lg:mx-10 mx-2 rounded-lg">
      <div class="hugger">
<div class="hugger__content">
<div class="wizard">
<div class="max-w-5xl my-8">
<h1 class="text-2xl md:text-4xl font-bold block md:inline text-black">Showcase your brand. </h1>
<h2 class="text-xl md:text-4xl block md:inline font-normal md:font-light">Reach thousands of employees working in the eCommerce industry.</h2>
</div>
<div class="grid grid-cols-5 mb-16">
<form class="col-span-5" onSubmit={handleSubmit} accept-charset="UTF-8">
<div class="space-y-8 divide-y divide-gray-200">

<div>
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Company Details</h3>
<p class="mt-1 text-gray-500">We will automatically create a company profile with all your job listings.</p>
</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_company_attributes_name">Company Name</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input
autofocus="autofocus"
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
type="text"
required
name="company_name"
onChange={handleChange}
value={company_name}
/>
</div>
</div>

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_company_attributes_website_url">Website</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
type="url"
value={company_url}
onChange={handleChange}
rqeuired
name="company_url" />
</div>
</div>


</div>
</div>

<div class="pt-8">
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Company Details</h3>

</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
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
<label class="block text-sm font-medium text-gray-700" for="post_location_str">Employee Count</label>
<div class="mt-1">
<input
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
type="number"
name="empcount"
value={empcount}
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
      handleChange(e); // Pass the event object to handleChange
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
<label class="block text-sm font-medium text-gray-700" for="post_url">Company Description</label>
<div class="mt-1">
<textarea
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
type="text"
name="company_description"
value={company_description}
onChange={handleChange}
/>
</div>
</div>
<div class="sm:col-span-6 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_url">Company Mission</label>
<div class="mt-1">
<textarea
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
type="text"
value={mission}
onChange={handleChange}
name="mission"
/>
</div>
</div>

</div>
</div>

{/* <div class="pt-8"> */}
{/* <div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Create your account</h3>
<p class="mt-1 text-gray-500">You'll use this to manage this and all future job listings.</p>
</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"> */}

{/* <div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_user_attributes_first_name">Name</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
type="text"
name="applicant_name"
value={applicant_name}
onChange={handleChange}
/>
</div>
</div> */}

{/* <div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_user_attributes_email">Email</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
type="email"
value={email}
name="email"
onChange={handleChange} />
</div>
</div> */}
{/* </div> */}
{/* </div> */}
</div>
<div class="pt-5">
<div class="flex fixed w-full bottom-0 left-0 right-0 z-10 py-1 justify-center bg-white border-t sm:justify-end sm:relative sm:w-auto sm:p-0 sm:border-none">
<button
            type="submit"
            href=""
            class="flex relative items-center w-10/12 justify-center lg:mb-4 mx-auto px-20 py-3 sm:text-sm text-base sm:py-3.5  text-black text-bold transition-all duration-200 bg-[#fef266] border border-transparent rounded-lg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Register
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

export default ListCompany;
