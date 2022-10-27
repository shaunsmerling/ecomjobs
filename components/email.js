import React from 'react'
import Link from "next/link"
import { useState } from "react"
import { MuiAlert } from "../components/MuiAlert"


const Email = () => {

      const [emails, setEmails] = useState({
            email: "",
          });
      
          const handleChange = ({ target }) => {
            setEmails({...emails, [target.name]: target.value })
          };
      
          const handleSubmit = e => {
            e.preventDefault();
      
            fetch("/api/emails", {
              method: "POST",
              body: JSON.stringify({
                email: email,
              })
            })
          }
      
          const {
            email,
          } = emails
      
  

    return (

<div id="emailhead" className="fixed opacity-95 bottom-0 w-full text-white ">
      <div className=" justify-center pt-2 text-sm flex ">
      <p className=" text-lg my-auto -ml-20 mr-4 ">Get new ecom jobs sent to </p>
      <form  class=" content-center py-2 align-center  " onSubmit={handleSubmit}>   
      <div class="flex md:block" >
          
            <input 
            type="text" 
            id="emailsubmit" 
            className="
            border border-blue placeholder-black text-md font-bold rounded-lg w-60  " 
            name="email" 
            value={email}
            onChange={handleChange}
            

            placeholder="Type your email...." 

           />
    
    <button 
    onClick={() => alert("Thank you for your  submission. Please check your inbox for a confirmation email") ? "" : location.reload()}
    type="submit" 
    value="Submit" 
    id="emailbtn" 
    class=" px-3 pt-3 pb-3 ml-4 text-md bg-[#17614A]  text-white -mt-1 rounded-lg border border-white ">Subscribe
    </button>
    </div>
    </form>
    </div>
</div>

)}

export default Email;