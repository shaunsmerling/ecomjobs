import React from 'react'
import { useState } from "react"
import Link from "next/link"



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
      }).then(alert("Thank you for your email! We'll shoot you the right job alerts when they are available!") ? "" : location.reload() )
    }

    const {
      email,
    } = emails




  return ( 
    <form  onSubmit={handleSubmit}>   
      <div className="flex flex-wrap lg:py-2 justify-center fixed bottom-0 bg-lightGreen-300 items-center w-full">
      <p className="text-white"> Get the newest <span className="italic font-bold">{props}</span> ecom jobs in your inbox</p>
        
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
    class=" h-26 bg-emerald-900 hover:bg-neutral-800 px-2 py-2 text-sm text-white  rounded-lg  ">
    Notify Me</button> 
    </div>

    </form>
)}




export default EmailBar