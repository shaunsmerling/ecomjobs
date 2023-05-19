import React, {useState, useEffect} from "react"

function EmailBox() {

    const [emails, setEmails] = useState({
        email: "",
      })

      const handleChange = ({ target }) => {
        setEmails({ ...emails, [target.name]: target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();

      fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });
    }
    
  
    const { email } = emails;


    return (
<div className="bg-slate-200 my-10 p-4 rounded-sm">
<h2 className="text-center">Find a job from a eCommerce brand</h2>
<p className="text-center mx-10">Sign up to hear about new jobs from the best brands. Straight to your inbox 1-2x a week.</p>
        <form action="#" onSubmit={handleSubmit} method="POST" class="max-w-md mx-auto space-y-4 m-10 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end">
            
  <div class="flex-1">

    <label for="email" class="sr-only">Email address</label>
    <input type="email" id="email" name="email" value={email} onChange={handleChange} class="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Get weekly job alerts..." />
  </div>
  <div class="relative group">
    <div class="absolute transition-all duration-1000 opacity-70 inset-0 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
    <button type="submit" value="Submit" onClick={() => {
      alert("Thank you for your submission.");
      document.getElementById('email').style.display = 'none';
    }} class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-montserrat text-white transition-all duration-200 bg-[#709771] border border-transparent rounded-lg hover:bg-[#5a795a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
      Subscribe
    </button>
  </div>
</form>
</div>


    )
}

export default EmailBox;