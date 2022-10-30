
import { checkout } from "../checkout.js";
import { useState } from "react";
import Preview from "../components/preview";




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
              className=" mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="elonmusk@spacex"
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
              className="  mt-2 mb-4 border-none rounded-lg pr-14"
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
            <label className="flex" htmlFor="logo">
              Logo:<img src="/reddot.svg"></img>
            </label>
            <p className="italic text-grey opacity-50">.jpg or .png</p>
            <div class=" relative w-64 mt-4 mb-4">
              <button class=" bg-[#26EB6B] border border-black rounded-full py-2 pl-14 w-full inline-flex items-center">
                  <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                    </svg>
                    <span class="ml-2">Upload Logo</span>
                    <input
                    id="logo"
                    class=" input absolute block py-2  w-full opacity-0"
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
      
            <select  className=" mt-2 mb-6 pl-4 border-none rounded-lg pr-14" value={jobCategory} onChange={handleChange} placeholder="Pick One" required name="jobCategory">
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
            <select  className=" mt-2 mb-6 pl-4 border-none rounded-lg pr-14" value={jobType} onChange={handleChange} placeholder="Pick One" required name="jobType">
            <option name="Null" value="Null">Pick an option</option>
              <option  name="Remote" value="Remote">Remote</option>
              <option  name="Hybrid" value="Hybrid">Hybrid</option>
              <option  name="In-Office" value="In-Office">In-Office</option>
            </select>
            <label className="flex" >
              Location:<img src="/reddot.svg"></img>
            </label>
            <input
              type="text"
              required
              className=" mt-2 mb-4 border-none rounded-lg pr-14"
              placeholder="USA"
              value={location}
              name="location"
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
              name="city"
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
        <Preview/>
        </div>
   
  );
}

export default PostAJob;
