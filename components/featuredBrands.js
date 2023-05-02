import Logo from "./logobanner"
import React, {useState, useEffect} from "react"
import algoliasearch from "algoliasearch/lite";
import {useRouter} from "next/router"



function FeaturedBrands() {
    const [filterModelMobile, setFilterModelMobile] = useState(false);
    const [clearFilter, setClearFilter] = useState(false);
    const searchClient = algoliasearch(
      "RCW293MLIV",
      "bc44fb196bcec6b9602b254bc96f6e71"
    );
    const [emails, setEmails] = useState({
      email: "",
    })

    const router = useRouter()

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
    };
  
    const { email } = emails;
  
    useEffect(() => {
      if (typeof window !== undefined) {
        if (filterModelMobile) {
          document.body.classList.add("lg:overflow-auto", "overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }
    }, [filterModelMobile]);

return (

<section class="bg-white relative">
  <img src="/hh.png" class="hidden lg:flex absolute top-8 right-8 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/pr.png" class="hidden lg:flex absolute -top-4 right-96 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/kk.png" class="hidden lg:flex absolute bottom-20 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/bb.png" class="hidden lg:flex absolute -bottom-4 left-60 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/qq.png" class="hidden lg:flex absolute top-8 left-80 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/to.png" class="hidden lg:flex absolute -top-6 left-16 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/gg.png" class="hidden lg:flex absolute top-72 right-32 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/rr.png" class="hidden lg:flex absolute bottom-20 right-96 z-0 w-16 md:w-20" alt="EP logo" />
  

  
  <div class="pb-4 px-4 mt-4  mx-auto max-w-screen-xl text-center lg:py-28 lg:pb-0  lg:relative z-10">
    <h1 class="mb-10 text-4xl lg:text-6xl lg:-mx-0  font-montserrat font-bold tracking-tight leading-none">Find jobs & hire talent in <br></br>eCommerce</h1>
    <form action="#" onSubmit={handleSubmit} method="POST" class="max-w-md mx-auto space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end">
      <div class="flex-1">
        <label for="" class="sr-only">
          Email address
        </label>
        <div>
          <input type="email" name="email" value={email} onChange={handleChange} class="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Get weekly job alerts..." />
        </div>
      </div>
      <div class="relative group">
        <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
        <button type="submit" value="Submit" onClick={() => alert("Thank you for your submission. Please check your inbox for a confirmation email") ? "" : router.reload(window.location.pathname)} class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-montserrat text-white transition-all duration-200 bg-[#709771] border border-transparent rounded-lg hover:bg-[#5a795a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
          Subscribe
        </button>
      </div>
    </form>
    <div class="flex items-center font-montserrat mb-20 mt-6 justify-center">
      <p>In collaboration with</p>
      <a href="https://1800d2c.com" target="_blank" rel="noreferrer">
        <img src="https://ecomportal-images.storage.googleapis.com/images/d2c.png" class="ml-2 h-auto w-20" alt="D2C logo"></img>
      </a>
    </div>
   
  </div>
</section>


)


}


export default FeaturedBrands