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

function EmailBar() {

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
      })
    }

    const {
      email,
    } = emails




  return ( 
    <form  class=" -mt-20 pt-10 pb-10 my-20 w-auto " onSubmit={handleSubmit}>   
    <div class="flex items-center w-full" >
        
        <input 
        type="text" 
        id="emailsubmit" 
        className="
         w-80 mx-auto border border-solid border-2 border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
           dark:focus:border-blue-500 lg: w-6/12 " 
        name="email" 
        value={email}
        onChange={handleChange}
        

        placeholder="✉️ Enter email for weekly job alerts..." 

        /> 
    </div>
   <button 
    type="submit" 
    value="Submit" 
    id="emailbtn" 
    class="align-baseline mb-10 px-20 mt-4 py-1  ml-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    </button>
    </form>
)}


export default EmailBar