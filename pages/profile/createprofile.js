
import { useState } from "react";
import {useRouter} from "next/router"
import {useSession} from "next-auth/react"




function EditProfile() {


  const router = useRouter()

  const { data: session } = useSession();


  const [fields, setFields] = useState({
    email: "",
    user_name: "",
    website_url: "",
    profilePicture: "",
    location: "",
    job_category: "",
    primary_role: "",
    years_of_exp: "",
    open_to_roles: "",
    bio: "",
    linkedin: "",
    twitter: "",
    github: "",
    work_exp_1: "",
    work_exp_2: "",
    work_exp_3: "",
    work_exp_4: "",
    work_exp_5: "",
    school_name: "",
    grad_year: "",
    degree: "",
    skills: "",
    achievements: "",
    jobIDs: [],
  });








  const handleChange = ({ target }) => {
    if (target.name === "profilePicture") {
      // read the contents of the selected image file and convert it to a base64 string
      const fileReader = new FileReader();
      fileReader.readAsDataURL(target.files[0]);
      fileReader.onload = (event) => {
        // update the fields state variable with the base64 string value
    setFields({ ...fields, [target.name]: event.target.result });
  }
  } else {
      setFields({ ...fields, [target.name]: target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: session.user.email,
        website_url: website_url,
        profilePicture: profilePic,
        location: location,
        job_category: job_category,
        primary_role: primary_role,
        years_of_exp: years_of_exp,
        open_to_roles: open_to_roles,
        bio: bio,
        linkedin: linkedin,
        twitter: twitter,
        github: github,
        work_exp_1: work_exp_1,
        work_exp_2: work_exp_2,
        work_exp_3: work_exp_3,
        work_exp_4: work_exp_4,
        work_exp_5: work_exp_5,
        school_name: school_name,
        grad_year: grad_year,
        degree: degree,
        skills: tags,
        achievements: achievements,
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
      router.push("/")
    }, 4000);
    
    if (router.pathname === "/") {
      clearTimeout(timerId);
      document.querySelector(".spinner").classList.remove("show")
    }

  }

  function showSpinner() {
    document.querySelector(".spinner").classList.add("show")
}




  const {
    user_name,
    website_url,
    location,
    job_category,
    primary_role,
    years_of_exp,
    open_to_roles,
    bio,
    linkedin,
    twitter,
    github,
    work_exp_1,
    work_exp_2,
    work_exp_3,
    work_exp_4,
    work_exp_5,
    school_name,
    grad_year,
    degree,
    achievements,
  } = fields;


  const [profilePic, setProfilePic] = useState()

  const [numJobs, setNumJobs] = useState(1); // initialize with one textarea

  // const handleChange = (e) => {
  //   // handle changes to textarea values here
  // };

  const renderTextareas = () => {
    const textareas = [];

    for (let i = 0; i < numJobs; i++) {
      textareas.push(
        <div key={i} className="sm:col-span-4 form-field">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor={`work_exp_${i}`}
          >{`Work Experience #${i + 1}`}</label>
          <div className="mt-1">
            <textarea
              name={`work_exp_${i}`}
              onChange={handleChange}
              className="block w-full rounded-md h-40  pl-2 pt-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder={`Work Experience #${i + 1}`}
            ></textarea>
          </div>
        </div>
      );
    }

    return textareas;
  };

  const addJob = () => {
    setNumJobs(numJobs + 1);
  };


  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleTagInputChange = (event) => {
    const newTagInput = event.target.value;
    setTagInput(newTagInput);

    // Check if the user entered a comma
    if (newTagInput.endsWith(',')) {
      const newTag = newTagInput.slice(0, -1).trim(); // Remove the comma and any leading/trailing whitespace
      if (newTag) {
        setTags([...tags, newTag]); // Add the new tag to the array
        setTagInput(''); // Clear the input field
      }
    }
  };
  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };


  return (
    <div className="bg-white pt-4 px-20 lg:mx-10 mx-2 rounded-lg">
      <div class="hugger">
<div class="hugger__content">
<div class="wizard">
<div class="max-w-5xl my-8">
<h1 class="text-2xl md:text-4xl font-bold block md:inline text-[#2c5043]">Create an Ecomportal profile. </h1>
<h2 class="text-xl md:text-4xl block md:inline font-normal md:font-light"> Building a solid profile allows employers to know more about you.</h2>
</div>
<div class="grid grid-cols-5 mb-16">
<form class="col-span-5" onSubmit={handleSubmit} accept-charset="UTF-8">
<div class="space-y-8 divide-y divide-gray-200">

<div>
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">About</h3>
<p class="mt-1 text-gray-500">Tell us a little more about yourself</p>
</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_company_attributes_name">Your Name</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input 
autofocus="autofocus" 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
required
placeholder="Shaun"
name="user_name" 
onChange={handleChange}
value={user_name}
/>
</div>
</div>

<div class="sm:col-span-3 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_company_attributes_website_url"> Personal Website</label>
<div class="mt-1 flex rounded-md shadow-sm">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="url" 
value={website_url}
placeholder="https://"
onChange={handleChange}
name="website_url" />
</div>
</div>
<div className="flex">
<img src={`${profilePic ? profilePic : "../avatar.svg"}`} className="rounded-full mt-5 mr-5 relative inline-block text-left h-10 w-auto" alt="" />
<div class="sm:col-span-4 form-field">
    
<label for="" class="block text-sm font-medium text-gray-700 mb-1">
                    {" "}
                    Upload a new photo
                  </label>
                  <div class="relative mt-2 sm:mt-0 sm:flex-1">
                  <input
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      
                      onChange={(e) => {
                        if (e?.target?.files?.[0]) {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setProfilePic(reader.result);
                          };
                          reader.readAsDataURL(file);
                          handleChange(e);
                        }
                      }}
                      class="block w-full lg:w-max px-4 border py-3 placeholder-gray-500 border border-gray-300 
                     rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    />

                    {profilePic && (
                      <img alt="" loading="lazy" src={profilePic} className="mt-4 object-cover" />
                    )}
                  </div>
</div>
</div>


</div>
</div>

<div class="pt-8">
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Details</h3>
<p class="mt-1 text-gray-500">Give brands a little more information on your work history</p>

</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_title">Location (City, State, Country)</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
placeholder="Santa Monica, California, USA"
name="location"
required
value={location}
onChange={handleChange} 
/>
</div>
</div>
<div class="sm:col-span-2 form-field">
<label class="block text-sm font-medium text-gray-700" >Job Category</label>
<div class="mt-1">
<select
value={job_category}  
onChange={handleChange} 
required
class="block w-full rounded-md border-gray-300 px-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
name="job_category"
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
<label class="block text-sm font-medium text-gray-700" for="post_title">Primary Role</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
name="primary_role"
required
placeholder="Growth Marketer"
value={primary_role}
onChange={handleChange} 
/>
</div>
</div>
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_title">Years of Experience</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="number"
placeholder="5"
name="years_of_exp"
required
value={years_of_exp}
onChange={handleChange} 
/>
</div>
</div>

<div class="sm:col-span-6 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_url">Open To The Following Roles</label>
<div class="mt-1">
<textarea 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
required
name="open_to_roles"
placeholder="Digital Marketer... Product Marketer... PPC Specialist.... etc"
value={open_to_roles}
onChange={handleChange}
/>
</div>
</div>
<div class="sm:col-span-6 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_url">Your Bio</label>
<div class="mt-1">
<textarea 
class="block w-full rounded-md border-gray-300 h-40 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
required
placeholder="8+ years in the digital marketing space..."
value={bio}
onChange={handleChange}
name="bio" 
/>
</div>
</div>

</div>
</div>

<div class="pt-8">
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Social Profiles</h3>
<p class="mt-1 text-gray-500">Where can brands find more about you online?</p>
</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_title">Linkedin</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
placeholder="https://linkedin.com/..."
name="linkedin"
value={linkedin}
onChange={handleChange} 
/>
</div>
</div>
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_title">Github</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
placeholder="https://github.com/..."
name="github"
value={github}
onChange={handleChange} 
/>
</div>
</div>
<div class="sm:col-span-4 form-field">
<label class="block text-sm font-medium text-gray-700" for="post_title">Twitter</label>
<div class="mt-1">
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
placeholder="https://twitter.com/..."
name="twitter"
value={twitter}
onChange={handleChange} 
/>
</div>
</div>
</div>
</div>
<div class="pt-8">
  <div>
    <h3 class="text-xl font-medium leading-6 text-gray-900">Work Experience</h3>
    <p class="mt-1 text-gray-500">What other positions have you held?</p>
  </div>
  <div class="flex flex-col mt-6 gap-6"></div>

  {renderTextareas()}
        <div className="pt-5">
          <button
            type="button"
            onClick={addJob}
            className="whitespace-nowrap  inline-flex items-center justify-center mt-1 pl-3 pr-3 py-1 border border-transparent rounded-full shadow-sm hover:bg-[#5a795a] text-base font-medium text-white  bg-[#709771]"
          >
            Add Another Job
          </button>
  </div>
  
</div>
<div class="pt-8">
<div>
<h3 class="text-xl font-medium leading-6 text-gray-900">Education</h3>
<p class="mt-1 text-gray-500">What school did you study at?</p>

</div>
<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
<div class="sm:col-span-4 form-field">
<div class="mt-1">
<label class="block text-sm font-medium text-gray-700" for="post_title">School Name</label>
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
placeholder="University of Oregon"
name="school_name"
value={school_name}
onChange={handleChange} 
/>
</div>
<div class="mt-4">
<label class="block text-sm font-medium text-gray-700" for="post_title">Graduation Year</label>
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="number"
placeholder="2021"
name="grad_year"
value={grad_year}
onChange={handleChange} 
/>
</div>
<div class="mt-4">
<label class="block text-sm font-medium text-gray-700" for="post_title">Degree</label>
<input 
class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
type="text"
placeholder="Bachelor of Science in Economics"
name="degree"
value={degree}
onChange={handleChange} 
/>
</div>
</div>
</div>
</div>
<div class="pt-8">
  <div>
    <h3 class="text-xl font-medium leading-6 text-gray-900">Your Skills</h3>
    <p class="mt-1 text-gray-500">What are the strengths you are known for?</p>
  </div>
  <div class="flex flex-col mt-6 gap-6">
    <div class="form-field">
      <label class="block text-sm font-medium text-gray-700" for="post_title">Add Skills</label>
      <p class="text-gray-500 text-xs">Seperated with a comma</p>
      <div class="mt-1">
      {tags.map((tag) => (
        <div key={tag} class="inline-block  mb-4 mx-1 text-white p-2 text-sm rounded-md bg-lightGreen-300">
          <span>{tag}</span>
          <button onClick={() => handleRemoveTag(tag)}> <img alt="" className="h-3 w-3 ml-1 -mt-2  rounded-md" src="https://img.icons8.com/fluency-systems-regular/48/000000/close-window.png"/> </button>
        </div>
      ))}
      <input name="skills" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"type="text" value={tagInput} placeholder="Enter your skills followed by a comma..."onChange={handleTagInputChange} />
      </div>
    </div>
</div>
</div>
<div class="pt-8">
  <div>
    <h3 class="text-xl font-medium leading-6 text-gray-900">Achievements</h3>
    <p class="mt-1 text-gray-500">What achievements are you most proud of?</p>
  </div>
  <div class="flex flex-col mt-6 gap-6">
    <div class="form-field">
      <div class="mt-1">
        <textarea 
          class="block w-full h-40  rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500  sm:text-sm" 
          type="text"
          required
          placeholder="Launched a succesful eCommerce brand in college"
          name="achievements"
          value={achievements}
          onChange={handleChange} 
        />
      </div>
    </div>
  </div>
</div>
{/* <div class="pt-8">
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
value={applicant_name}
onChange={handleChange} 
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
</div> */}
</div>
<div class="pt-5 mt-5">
<div class="flex fixed w-full bottom-0 left-0 right-0 z-10 py-1 justify-center bg-white border-t sm:justify-end sm:relative sm:w-auto sm:p-0 sm:border-none">
<button
            type="submit"
            href=""
            class="flex relative items-center w-10/12 justify-center lg:mb-4 mx-auto px-20 py-3 sm:text-sm text-base sm:py-3.5  text-white transition-all duration-200  bg-[#709771] border border-transparent rounded-lg  hover:bg-[#5a795a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Create Profile
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

export default EditProfile;
