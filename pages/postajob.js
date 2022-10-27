
import { checkout } from "../checkout.js";
import { useState } from "react";
import Display from "../components/displayFormData.js";

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

  const handleSubmit = e => {
    e.preventDefault();
    
    fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        company_name: companyName,
        company_url: companyUrl,
        job_position: jobPosition,
        logo: logo,
        job_category: jobCategory,
        postedat: postedat,
        job_type: jobType,
        location: location,
        city: city,
        company_description: companyDescription,
        job_description: jobDescription,
        job_requirements: jobRequirements,
        application_url: applicationUrl,
      }),
    }).then((response) => response.json()).then(jsonResponse => {
      console.log(jsonResponse, "JSON")
        checkout({
             lineItems: [
               {
                price: "price_1LeCiRJ3L3qVyujTCoNl7lpe",
               quantity: 1,
              },
            ],
           });
    }).catch(err => {
      console.log(err, "Error")
    })
  }

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

  return (



      <div className="">
        <form onSubmit={handleSubmit} className=" ">
          <div className="mx-6 my-10 flex flex-col items-center ">

      
            <label className="flex" htmlFor="email">
              Email:<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className="  mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="elonmusk@spacex.com"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <label className="flex" htmlFor="companyname">
              Company Name:<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className=" mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="Space X"
              value={companyName}
              name="companyName"
              onChange={handleChange}
            />
            <label className="flex" htmlFor="companyurl">
              Company URL:<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className=" mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="www.spacex.com"
              value={companyUrl}
              name="companyUrl"
              onChange={handleChange}
            />
             <label className="flex" htmlFor="jobposition">
              Position:<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className=" mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="PPC Specalist "
              value={jobPosition}
              name="jobPosition"
              onChange={handleChange}
            />
            <label className="flex" htmlFor="location">
              Logo:<img src="/reddot.svg"></img>
            </label>
            <div class=" relative w-64 mt-4 mb-4">
              <button class=" bg-[#26EB6B] border border-black rounded-full py-2 pl-14 w-full inline-flex items-center">
                  <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                    </svg>
                    <span class="ml-2">Upload Logo</span>
                    <input
                    class=" absolute block py-2  w-full opacity-0"
                    type="file"
                    name="logo"
                    accept="image/png, image/jpeg"
                    required
                />
                </button>
               
              </div>
              <label className="flex" htmlFor="jobcategory">
              Category:<img src="/reddot.svg"></img>
            </label>
      
            <select className="mt-2 mb-6 pl-4 border-none rounded-lg pr-14" value={jobCategory} onChange={handleChange} placeholder="Pick One" required name="jobCategory">
            <option name="Null" value="Null">Pick an option</option>
              <option name="Marketing" value="Marketing">Marketing</option>
              <option name="Customer Service"  value="Customer Service">Customer Service</option>
              <option name="Creative" value="Creative">Creative</option>
              <option name="Web Development" value="Web Development">Web Development</option>
              <option name="People & HR" value="People & HR">People & HR</option>
              <option name="Sales" value="Sales">Sales</option>
              <option name="Biz Ops" value="Biz Ops">Biz Ops</option>
              <option name="Product" value="Product">Product</option>
              <option name="Finance" value="Finance">Finance</option>
            </select>
               <label className="flex" htmlFor="postedat">
              Date Of Posting:<img src="/reddot.svg"></img>
            </label>
            <input
              type="date"
              required
              className="mt-2 mb-6 border-none rounded-lg "
              placeholder="Mars"
              value={postedat}
              name="postedat"
              onChange={handleChange}
            />
        
            <label className="flex" htmlFor="contract">
             Remote/Hybrid/In-Office:<img src="/reddot.svg"></img>
            </label>
            <select className="mt-2 mb-6 pl-4 border-none rounded-lg pr-14" value={jobType} onChange={handleChange} placeholder="Pick One" required name="locationType">
            <option name="Null" value="Null">Pick an option</option>
              <option name="Remote" value="Remote">Remote</option>
              <option name="Hybrid" value="Hybrid">Hybrid</option>
              <option name="In-Office" value="In-Office">In-Office</option>
            </select>
            <label className="flex" htmlFor="jobposition">
              Location:<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className=" mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="USA"
              value={location}
              name="jobPosition"
              onChange={handleChange}
            />
            <label className="flex" htmlFor="jobposition">
             City:<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className=" mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="New York"
              value={city}
              name="jobPosition"
              onChange={handleChange}
            />
            <label className="flex" htmlFor="compdesc">
              Company Description<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className="mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="SpaceX is a..."
              value={companyDescription}
              name="companyDescription"
              onChange={handleChange}
            />
            <label className="flex" htmlFor="jobdesc">
              Job Description<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className="mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="A PPC Specialist..."
              value={jobDescription}
              name="jobDescription"
              onChange={handleChange}
            />
            <label className="flex" htmlFor="jobreq">
              Job Requirements<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className="mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="3+ years of... "
              value={jobRequirements}
              name="jobRequirements"
              onChange={handleChange}
            />
            <label className="flex" htmlFor="applicationurl">
              Application URL<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className="mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="www.applyhere.com"
              value={applicationUrl}
              name="applicationUrl"
              onChange={handleChange}
            />
            
            <button
              type="submit"
             
              className="bg-[#26EB6B] text-black border border-black text-sm mb-10 w-1/2 rounded-full py-2 text-center content-center mt-6 hover:rounded-full"
              id="jobbtn"
              value="Submit"
            >
              Post Your Job
            </button>
           
          </div>
        </form>

        <div>
         
        </div>
     
        </div>
   
  );
}

export default PostAJob;
