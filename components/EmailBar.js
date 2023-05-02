import React from 'react'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"



// Searchbar should, upon click, show a drop down menu of all job categories
// Job categories include: 
// 1. Marketing
// 2. Biz Ops
// 3. Sales
// 4. Design
// 5. Data Analytics
// 7. Product
// 8. Web Development
// 9. Creative
// 10. People & HR
// 11. Customer Service
// 12. Copywriting
// Upon click of a category, Searchbar should parse through list of jobs
// Jobs with category including clicked category should show

function EmailBar({props}) {

  const router = useRouter()

    const [emails, setEmails] = useState({
      email: "",
    });

    const handleChange = ({ target }) => {
      setEmails({...emails, [target.name]: target.value })
    };

    const handleSubmit = e => {
      e.preventDefault();
      window.lintrk('track', { conversion_id: 10364860 });
      fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      }).then(alert("Thank you for your email! We'll shoot you the right job alerts when they are available!") ? "" : router.reload(window.location.pathname) )
    }

    const {
      email,
    } = emails




  return ( 
    <form  onSubmit={handleSubmit}>   
      <div className="flex flex-wrap py-1 lg:py-0 justify-center fixed bottom-0 bg-[#709771] items-center w-full">
      <p className="mb-1 text-black"> Get the newest <span className="italic font-bold">{props}</span> ecom jobs in your inbox</p>
        
        <div className=" flex flex-row items-center  mb-1 lg:mr-0 mr-4 justify-center w-full">
        <input 
        type="text" 
        id="emailsubmit" 
        className="
         w-80  border mx-4 border-solid border-2 border-blue-700 text-black text-sm rounded-lg h-26 focus:ring-blue-500 focus:border-blue-500 
           dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 
           dark:focus:border-blue-500 lg: w-100 " 
        name="email" 
        value={email}
        onChange={handleChange}
        

        placeholder="Your email"

        />
           <button 
    type="submit" 
    value="Submit" 
    id="emailbtn" 
    class=" lg:h-26 bg-black hover:bg-neutral-800 px-2 lg:py-2 text-sm text-white  rounded-lg  ">
    Notify Me</button> 
    </div>
    </div>

    </form>
)}




export default EmailBar