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

<div id="emailhead" className="fixed opacity-90 bottom-0 w-full text-white ">
      <div className=" ml-16 justify-center pt-2 text-sm lg:ml-0 flex ">
      <p className=" text-xs -ml-12 mr-2 flex lg:text-lg my-auto lg:-ml-20 lg:mr-4 ">Get new ecommerce jobs sent to: </p>
      <form  class=" content-center py-2 align-center  " onSubmit={handleSubmit}>   
      <div class="flex md:block" >
          
            <input 
            type="text" 
            id="emailsubmit" 
            className="
            border border-blue placeholder-black text-xs lg:text-md font-bold rounded-lg w-30 lg:w-60  " 
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
    class=" ml-4 mr-2 px-3 pt-1 pb-1 lg:px-3 lg:pt-2 lg:pb-2  text-md bg-[#17614A]  text-white rounded-lg border border-white ">Subscribe
    </button>
    </div>
    </form>
    </div>
</div>

)}

export default Email;