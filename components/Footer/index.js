import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import styles from "./styles.module.css";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className={styles.footer}>
          <div className={styles.section_left}>
            <div className={styles.logo_section}>
              <Image src={logo} alt="footer-logo" />
              <p>
                Join thousands of people getting weekly alerts <br /> from
                brands hiring
              </p>
            </div>
            <div className={styles.socila_icons}>
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.9361 18.4189C29.0482 17.7881 29.0453 17.1382 28.6581 16.6481C28.1167 15.9602 26.9649 15.9346 26.1755 16.0562C25.5328 16.1546 23.3619 17.1178 22.6231 19.4224C23.9319 19.3221 24.6187 19.5171 24.4926 20.9653C24.4392 21.572 24.1345 22.2358 23.7951 22.8721C23.4022 23.6055 22.6658 25.0468 21.7001 24.008C20.8305 23.0731 20.8957 21.2856 20.6965 20.095C20.5858 19.4271 20.4691 18.5948 20.2511 17.9078C20.0636 17.3169 19.6333 16.6044 19.1073 16.4503C18.542 16.2832 17.843 16.5441 17.4324 16.7868C16.1259 17.5592 15.1307 18.657 14 19.5626V19.6475C14.2245 19.8624 14.2836 20.2157 14.6146 20.2635C15.3923 20.3786 16.1339 19.5352 16.6519 20.4125C16.9659 20.9491 17.0639 21.5376 17.266 22.1155C17.535 22.8856 17.7436 23.7248 17.964 24.6105C18.3357 26.1102 18.7942 28.3526 20.0842 28.9012C20.7429 29.1816 21.7324 28.8061 22.2331 28.5076C23.5907 27.7004 24.6478 26.5303 25.553 25.3401C27.6226 22.5231 28.7645 19.3314 28.9361 18.4189Z"
                  fill="black"
                />
              </svg>
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
            </div>
          </div>
          <div className={styles.ul_content}>
            <h2>Links</h2>
            <ul>
              <li>Salaries</li>
              <li> Internships</li>
              <li> Blog</li>
              <li> Company List</li>
              <li> For Companies</li>
            </ul>
          </div>
          <div className={styles.ul_content}>
            <h2>Resources</h2>
            <ul>
              <li>Support</li>
              <li> Latest Updates</li>
              <li> Updates Newsletter</li>
              <li> Flow Management</li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>Copyright©ecomportal 2022, All right Reserved</p>
          <div className={styles.arrow_up} onClick={handleScrollToTop}>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="42" height="42" rx="6" fill="#7ED957" />
              <path
                d="M20 29C20 29.5523 20.4477 30 21 30C21.5523 30 22 29.5523 22 29L20 29ZM21.7071 11.2929C21.3166 10.9024 20.6834 10.9024 20.2929 11.2929L13.9289 17.6569C13.5384 18.0474 13.5384 18.6805 13.9289 19.0711C14.3195 19.4616 14.9526 19.4616 15.3431 19.0711L21 13.4142L26.6569 19.0711C27.0474 19.4616 27.6805 19.4616 28.0711 19.0711C28.4616 18.6805 28.4616 18.0474 28.0711 17.6569L21.7071 11.2929ZM22 29L22 12L20 12L20 29L22 29Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

Footer.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Footer;
