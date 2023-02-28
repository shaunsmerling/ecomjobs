import React, {useState} from "react"
import useRouter from "next/router"
import styles from "./styles.module.css";

function FooterEmail() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <>
      <div className="">
        <div className={styles.footerEmail}>
        <div className="text-center mx-auto">
        <h1 class="mb-4 text-3xl lg:-mx-0 -mx-4 font-extrabold tracking-tight leading-none text-white">New Job Alerts</h1>
        <p class="mb-8 text-md font-normal text-white lg:text-md sm:px-16 xl:px-48 ">Subscribe to our email list to get new jobs sent <span className="italic font-bold">directly to your inbox </span></p>
        <form
              action="#"
              onSubmit={handleSubmit}
              method="POST"
              class="max-w-md mx-auto  space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end"
            >
              <div class="flex-1">
                <label for="" class="sr-only">
                  {" "}
                  Email address{" "}
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    class="block w-full px-4 py-3 sm:py-3.5 text-base 
            font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg 
            sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                    placeholder="Type your email..."
                  />
                </div>
              </div>

              <div class="relative group">
                <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <button
                  type="submit"
                  value="Submit"
                  onClick={() =>
                    alert(
                      "Thank you for your  submission. Please check your inbox for a confirmation email"
                    )
                      ? ""
                      : router.reload(window.location.pathname)
                  }
                  class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#000000] border border-transparent rounded-lg  hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </>
  );
}

export default FooterEmail;
