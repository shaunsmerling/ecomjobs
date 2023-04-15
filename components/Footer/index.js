import styles from "./styles.module.css";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="">
        <div className={styles.footer}>
          <div className={styles.section_left}>
            <div className={styles.logo_section}>
            <img class="h-30 w-52 sm:h-18 sm:w-18" alt="" src="https://ecomportal-images.storage.googleapis.com/images/logo.png"/>
              
           
            </div>
            <div className="flex -mt-4 ml-3 mb-4">
            <p className="">In collaboration with </p>
            <a href="https://1800d2c.com" target="_blank" rel="noreferrer">
            <img src="https://ecomportal-images.storage.googleapis.com/images/d2c.png" class="ml-2  mt-1 h-auto w-20"></img>
            </a>
            </div>
            <div className={styles.socila_icons}>
              <a href="https://www.facebook.com/ecomprtal"  target="_blank">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22"
                  cy="22"
                  r="21.5"
                  fill="white"
                  stroke="#F1F1F1"
                />
                <path
                  d="M26 18.5047H23.2755V16.7403C23.2755 16.0777 23.7202 15.9232 24.0335 15.9232C24.346 15.9232 25.9562 15.9232 25.9562 15.9232V13.0102L23.3083 13C20.3689 13 19.6999 15.1726 19.6999 16.5629V18.5047H18V21.5063H19.6999C19.6999 25.3585 19.6999 30 19.6999 30H23.2755C23.2755 30 23.2755 25.3128 23.2755 21.5063H25.6882L26 18.5047Z"
                  fill="black"
                />
              </svg>
              </a>
            <a href="https://twitter.com/smerlinger" target="_blank" rel="noreferrer">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.twiter}
              >
                <circle cx="22" cy="22" r="22" fill="#2F604B" />
                <path
                  d="M31 17.6572C30.3383 17.9388 29.6261 18.1286 28.8789 18.2136C29.6419 17.7765 30.2268 17.0841 30.5027 16.2581C29.7891 16.6634 28.9991 16.9575 28.1577 17.1163C27.4843 16.4294 26.5244 16 25.4622 16C23.423 16 21.7696 17.5824 21.7696 19.5344C21.7696 19.8111 21.8021 20.0807 21.8654 20.3398C18.7961 20.1922 16.0747 18.7854 14.2533 16.6469C13.9354 17.1687 13.7534 17.7758 13.7534 18.4241C13.7534 19.6502 14.4053 20.7322 15.3962 21.3658C14.7911 21.3473 14.2215 21.1882 13.7235 20.9235C13.7231 20.9382 13.7231 20.9532 13.7231 20.9682C13.7231 22.6804 14.9961 24.1086 16.6856 24.4338C16.3758 24.5142 16.0495 24.5576 15.7126 24.5576C15.4744 24.5576 15.2431 24.5355 15.0177 24.4939C15.4879 25.898 16.8515 26.9202 18.4673 26.9485C17.2034 27.8965 15.6114 28.4617 13.8809 28.4617C13.5832 28.4617 13.289 28.4449 13 28.412C14.6347 29.4153 16.5757 30 18.6609 30C25.4538 30 29.168 24.6146 29.168 19.9439C29.168 19.7908 29.1647 19.638 29.1577 19.4862C29.879 18.9889 30.5053 18.3661 31 17.6572Z"
                  fill="white"
                />
              </svg>
            </a>
              <a href="https://www.linkedin.com/company/ecomportal" target="_blank">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22"
                  cy="22"
                  r="21.5"
                  fill="white"
                  stroke="#F1F1F1"
                />
                <path
                  d="M13.2156 18.8788H16.8589V29H13.2156V18.8788ZM15.0616 14C13.8147 14 13 14.7557 13 15.7476C13 16.7191 13.7908 17.4968 15.0139 17.4968H15.0372C16.308 17.4968 17.0993 16.7191 17.0993 15.7476C17.0755 14.7557 16.308 14 15.0616 14ZM25.8042 18.6411C23.8703 18.6411 23.0039 19.623 22.5206 20.3117V18.8788H18.8762C18.9244 19.8283 18.8762 29 18.8762 29H22.5206V23.3476C22.5206 23.0449 22.5444 22.7433 22.6403 22.5264C22.9042 21.9221 23.5038 21.2962 24.5096 21.2962C25.8292 21.2962 26.3562 22.2248 26.3562 23.5848V29H30V23.1963C30 20.0876 28.2028 18.6411 25.8042 18.6411Z"
                  fill="black"
                />
              </svg>
              </a>
            </div>
          </div>
       
          {/* <div className={styles.ul_content}>
            <h3 className="hover:text-black">For Talent</h3>
            <ul>
              <li>Sign In</li>
              <li>Create A Profile</li>
              <li>Learn eCommerce Skills</li>
              <li>FAQs</li>
              <li>Search Companies</li>
            </ul>
          </div> */}
          {/* <div className={styles.ul_content}>
            <h3 className="hover:text-black">For Employers</h3>
            <ul>
              <li>Pricing Page</li>
              <li> Employer Login</li>
              <li> Blog</li>
              <li> Company List</li>
              <li> For Companies</li>
            </ul>
          </div>
          <div className={styles.ul_content}>
            <h3 className="hover:text-black">For More</h3>
            <ul>
              <li>What is eCommerce?</li>
              <li>FAQ eCommerce Brands</li>
              <li>Sponsors </li>
              <li>Advertise With Us</li>
              <li>Partner With Us</li>
            </ul>
          </div> */}
        </div>
   
      </div>
    </>
  );
}

export default Footer;
