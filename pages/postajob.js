
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import checkout from "../checkout.js"
import { NextSeo } from "next-seo";
import { generateJobUrl } from "../script.js";
import { useSession, getSession } from "next-auth/react"
import SalePage from "../components/salePage.js"
import Logo from "../components/logobanner"
import TestB from "../components/testimonialBanner"

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


  const [checkbox, setCheckbox] = useState({
    highlight: 0,
    top24: 0,
    week: 0,
    month: 0,
    email: 0,
    })


    
    const [total, setTotal] = useState(99);

    const currentDate = new Date();
    const unixDate = Math.floor(currentDate.getTime() / 1000);
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const date = ("0" + currentDate.getDate()).slice(-2);
    const formattedDate = month + "/" + date + "/" + year;






  const [fields, setFields] = useState({
    email: "",
    companyName: "",
    companyUrl: "",
    jobPosition: "",
    logo: "",
    jobCategory: "",
    jobType: "",
    location: "",
    city: "",
    salaryMin: 0,
    empcount: 0,
    salaryMax: 0,
    companyDescription: "",
    jobDescription: "",
    jobRequirements: "",
    applicationUrl: "",
  });


  function getLink() {
    switch (total) {
      case 99:
         router.push("https://buy.stripe.com/fZedTYdmEeLXa6AcMV")
         break;
      case 138:
         router.push("https://buy.stripe.com/6oE5ns1DWeLX2E814h")
         break;
      case 227:
         router.push("https://buy.stripe.com/6oE5ns1DWeLX2E814h")
         break;
      case 296:
         router.push("https://buy.stripe.com/dR68zE1DWcDP0w05kz")
         break;
      case 306:
        router.push("https://buy.stripe.com/dR66rwdmEcDP4Mg8wQ")
        break;
      case 375:
         router.push("https://buy.stripe.com/7sI7vAbeweLX3Ic8wM")
            break;
      case 337:
         router.push("https://buy.stripe.com/dR65nseqIeLX0w08wN")
         break;
      case 406:
         router.push("https://buy.stripe.com/dR6bLQ82kbzLdiM14m")
         break;
      case 416:
        router.push("https://buy.stripe.com/3cs5ns3M4eLX1A47sN")
        break;
      case 485:
         router.push("https://buy.stripe.com/dR68zE82kavHdiMdR9")
         break;
      case 437:
         router.push("https://buy.stripe.com/cN25nsgyQ9rDemQ3cy")
         break;
      case 506:
        router.push("https://buy.stripe.com/fZe6rwbew8nzfqUaF1")
        break;
      case 516:
        router.push("https://buy.stripe.com/dR6dTYeqI1ZbemQ14s")
        break;
      case 585:
         router.push("https://buy.stripe.com/cN217c96o33fbaE7sR")
         break;
      case 207:
        router.push("https://buy.stripe.com/14k17caasbzL2E8bJ8")
        break;
      case 217:
        router.push("https://buy.stripe.com/6oE3fkgyQeLXa6A7sT")
        break;
      case 286:
        router.push("https://buy.stripe.com/fZeaHM2I0fQ1emQ6oQ")
        break;
      case 188:
       router.push("https://buy.stripe.com/5kA5nsbew47j3Ic3cF")
       break;
      case 257:
       router.push("https://buy.stripe.com/dR66rw1DW7jvemQaF8")
       break;
      case 267:
      router.push("https://buy.stripe.com/6oEeY20zSdHT4MgfZt")
      break;
      case 336:
        router.push("https://buy.stripe.com/8wMaHM3M433fdiMdRm")
        break;
      case 298:
         router.push("https://buy.stripe.com/cN2g265Uc8nzceIbJf")
         break;
      case 367:
         router.push("https://buy.stripe.com/4gwaHMdmE47j5Qk28G")
         break;
      case 377:
       router.push("https://buy.stripe.com/3csg266YgavH0w07t1")
       break;
      case 446:
       router.push("https://buy.stripe.com/cN217cbewbzL6UoaFe")
       break;
      case 396:
        router.push("https://buy.stripe.com/6oE8zE5Uc5bn6Uo14F")
        break;
      case 467:
       router.push("https://buy.stripe.com/fZe3fk1DW47jguY5kW")
       break;
      case 477:
        router.push("https://buy.stripe.com/28o2bg4Q8bzLemQfZB")
        break;
      case 546:
       router.push("https://buy.stripe.com/00g038gyQ5bn2E88xa")
       break;
      case 168:
        router.push("https://buy.stripe.com/7sI8zEfuM6frdiM7t7")
        break;
      case 178:
        router.push("https://buy.stripe.com/fZe2bg1DWfQ1baE14K")
        break;
      case 247:
         router.push("https://buy.stripe.com/5kA0383M49rD6UofZF")
         break;
         default:
          break
    }
  }


function handleCheckboxChange(event) {
  const { name, value, checked } = event.target;
  setCheckbox(prevState => ({
    ...prevState,
    [name]: checked ? parseInt(value) : 0,
  }));
}

useEffect(() => {
  setTotal(
    Object.values(checkbox).reduce((acc, cur) => acc + cur, 99)
  );
}, [checkbox]);

  function delayLoad() {
    showSpinner()
    setTimeout(function() {
      getLink()
    }, 10000)
  
  }

  function showSpinner() {
    document.querySelector(".spinner").classList.add("show")
}

const currentTime = new Date().getTime() 
console.log(currentTime)


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
        empcount: empcount,
        salaryMin: salaryMin,
        salaryMax: salaryMax,
        job_category: jobCategory,
        postedat: formattedDate,
        datets: unixDate.toString(),
        job_type: jobType,
        location: location,
        highlight: checkbox.highlight > 0,
        top24: checkbox.top24 > 0,
        week: checkbox.week > 0,
        month: checkbox.month > 0 ,
        emailBlast: checkbox.emailBlast > 0,
        top24Timestamp: checkbox.top24 > 0 ? currentTime : null,
        weekTimestamp: checkbox.week > 0 ? currentTime : null,
        monthTimestamp: checkbox.month > 0 ? currentTime : null,
        city: city,
        company_description: companyDescription,
        job_description: jobDescription,
        job_requirements: jobRequirements,
        application_url: applicationUrl,
        jobUrl,

      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse, "JSON");
        console.log(total)

        // checkout({
        //   lineItems: [
        //     {
        //       price: total,
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


  const {
    email,
    companyName,
    salaryMin,
    salaryMax,
    companyUrl,
    jobPosition,
    logo,
    jobCategory,
    jobType,
    location,
    city,
    empcount,
    companyDescription,
    jobDescription,
    jobRequirements,
    applicationUrl,
  } = fields;

  const [companyLogo, setCompanyLogo] = useState();

  return (
    <>
    <NextSeo
        title="Post a job. Hire the best talent in the eCommerce industry."
        description="Post a job on Ecomportal to reach thousands of talented applicants in the ecommerce industry"
        openGraph={{
          url: 'https://ecomportal.co',
          title: "Post a job. Hire the best talent in the eCommerce industry.",
          description: "Post a job on Ecomportal to reach thousands of talented applicants in the ecommerce industry",
          images: [
              {
                  url: `https://ecomportal-images.storage.googleapis.com/images/logo.jpeg`,
                  width: 800,
                  height: 600,
                  alt: 'Og Image Alt',
              },
          ],
        }}
      />

      <SalePage />
   
        <Logo/>
        <TestB />
 

    <div className="bg-white  px-4 lg:px-20 lg:mx-10  rounded-lg">
      <div class="hugger">
<div class="hugger__content">
<div class="wizard">
<div class="max-w-5xl my-8">
<h1 id="hire-the-best" class="text-2xl md:text-4xl font-bold block md:inline text-[#2d4f42] ">Hire the best. </h1>
<h2 class="text-xl md:text-4xl block md:inline font-normal md:font-light">Post a job & reach thousands of potential employees working in the eCommerce industry.</h2>
</div>
<div class="grid grid-cols-5 mb-16">
<form class="col-span-5" onSubmit={handleSubmit} accept-charset="UTF-8">
<div class="space-y-8 divide-y divide-gray-200">

<div class="mt-2 grid grid-cols-1 font-monsterrant gap-y-6 gap-x-4 sm:grid-cols-6">

<div class="sm:col-span-4 form-field">
<label class="block mt-4 text-sm font-medium text-gray-700" >Email</label>
<div class="mt-2">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
value={email}
onChange={handleChange}
name="email"
/>
</div>
<label class="block text-sm mt-4 font-medium text-gray-700" >Company Name</label>
<div class="mt-2">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text" 
value={companyName}
onChange={handleChange}
name="companyName"
/>
</div>
<label class="block mt-4 text-sm font-medium text-gray-700" >Website URL</label>
<div class="mt-2">
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
<label class="block text-sm font-medium text-gray-700" > Location (State & Country) </label>
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
<label class="block text-sm font-medium text-gray-700" > City </label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
name="city"
value={city}
onChange={handleChange}
/>
</div>
</div>
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" > Employee # </label>
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
<div class="sm:col-span-2 form-field">
<label class="block text-sm font-medium text-gray-700">Job Type</label>
<div class="mt-1">
<select 
class="block w-full rounded-md border-gray-300 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
name="jobType"
value={jobType}
onChange={handleChange}>
<option value="">Select a Type</option>
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
                          handleChange(e);
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

<div class="mt-6 grid grid-cols-1 font-monsterrant gap-y-6 gap-x-4 sm:grid-cols-6">

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_user_attributes_first_name">Boost Your Job Post</label>
<p  class="text-xs font-normal text-black"> A normal job post with no addons is $99 and posts your job on our board for 1 month </p>
<div class="flex mt-4">
          <div className="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              name="highlight"
              value="39"
              className="w-4 h-4 bg-white border-black rounded focus:ring-blue-500 focus:ring-2"
              onChange={handleCheckboxChange}
            />
    </div>
    <div class="ml-2 text-sm">
        <label for="helper-checkbox" class="font-bold text-black "> Highlight Post (+$39) </label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-black"> ⚡️ Include our featured tag & highlight your job </p>
    </div>
</div>



<div class="flex mt-4">
    <div class="flex items-center h-5">
    <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              name="top24"
              value="89"
              className="w-4 h-4 bg-white border-black rounded focus:ring-blue-500 focus:ring-2"
              onChange={handleCheckboxChange}
            />
    </div>
    <div class="ml-2 text-sm">
    <label for="helper-checkbox" class="font-bold text-black ">Stick To The Top Page For 24 Hours (+$89)</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-black">📌 Pin your post to the top of the 1st page for 24 hours</p>
    </div>
</div>



<div class="flex mt-4">
    <div class="flex items-center h-5">
    <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              name="week"
              value="199"
              className="w-4 h-4 bg-white border-black rounded focus:ring-blue-500 focus:ring-2"
              onChange={handleCheckboxChange}
            />
    </div>
    <div class="ml-2 text-sm">
    <label for="helper-checkbox" class="font-bold text-black ">Stick To The Top Page For 1 Week (+$199)</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-black">📌 Pin your post to the top of the 1st page for 1 Week</p>
    </div>
</div>



<div class="flex mt-4">
    <div class="flex items-center h-5">
    <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              name="month"
              value="299"
              className="w-4 h-4 bg-white border-black rounded focus:ring-blue-500 focus:ring-2"
              onChange={handleCheckboxChange}
            />
    </div>
    <div class="ml-2 text-sm">
    <label for="helper-checkbox" class="font-bold text-black ">Stick To The Top Page For 1 Month (+$299)</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-black">📌 Pin your post to the top of the 1st page for 1 Month</p>
    </div>
</div>


<div class="flex mt-4">
    <div class="flex items-center h-5">
    <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              name="email"
              value="69"
              className="w-4 h-4 bg-white border-black rounded focus:ring-blue-500 focus:ring-2"
              onChange={handleCheckboxChange}
            />
    </div>
    <div class="ml-2 text-sm">
    <label for="helper-checkbox" class="font-bold text-black ">Email Blast to eComportal's Newsletter (+$69)</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-black">📢 Reach thousands subscribed to our email list</p>
    </div>
</div>

<div class="flex mt-4">
    <div class="flex items-center h-5">
    <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              name="email"
              value="79"
              className="w-4 h-4 bg-white border-black rounded focus:ring-blue-500 focus:ring-2"
              onChange={handleCheckboxChange}
            />
    </div>
    <div class="ml-2 text-sm">
    <label for="helper-checkbox" class="font-bold text-black ">Email Blast to <a href="https://1800d2c.com"> 1800-D2C's </a> Newsletter (+$79)</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-black">📢 Reach thousands subscribed to our email list</p>
    </div>
</div>
</div>
</div>
<div class="pt-5">
<div class="flex fixed w-full bottom-0 left-0 right-0 z-10 pt-1 justify-center bg-white border-t sm:justify-end sm:relative sm:w-auto sm:p-0 sm:border-none">
<button
            type="submit"
            href=""
            class="flex relative mt-4 items-center w-10/12 justify-center mb-4 lg:mb-4 mx-auto px-20 py-3 sm:text-sm text-base sm:py-3.5  text-white transition-all duration-200 bg-[#709771] border border-transparent rounded-lg font-monsterrant hover:bg-[#5a795a]   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Post a job for&nbsp;<span> {`${"$" + total}`}</span>
          </button>
</div>
</div>
</form></div>
</div>
</div>
</div>
<div class="spinner"></div>
    </div>
    </>
  );
}


export default PostAJob;
