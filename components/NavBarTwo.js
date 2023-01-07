import SignIn from "./signIn";
import SignOut from "./signOut";
import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ModalSignIn from "./navModalSignIn";
import {useRouter} from "next/router"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbartwo = () => {
  const { data: session } = useSession();



  const [button, setButton] = useState(true);

  return (
    <header className="py-4 sm:py-5 " x-data="{expanded: false}">
      <div className="px-4 sm:px-6 lg:border-b-2 lg:px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className=" shrink-0">
            <a href="../" title="" className="">
              <img
                className="w-auto h-16 -ml-2 lg:h-14 lg:-ml-0"
                src="/logo.png"
                alt=""
              ></img>
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center  lg:space-x-0 lg:justify-center">
            <div className="nav_slaries">
              {/* <Menu.Button className="inline-flex w-full text-sm justify-center px-4 py-2 font-medium text-gray-700   "> */}
              <a
                href="/salaries"
                title=""
                class="inline-flex font-bold items-center justify-center px-4 py-2.5 text-[14px]  text-gray-900 transition-all duration-200 border border-transparent rounded-full "
              >
                Salaries
              </a>
              {/* </Menu.Button> */}
            </div>

            {/* <Learn /> */}
            <div className="nav_slaries">
              {/* <Menu.Button className="inline-flex w-full justify-center px-4 py-2 font-medium text-gray-700   "> */}
              <a
                href="/blog"
                title=""
                class="inline-flex items-center  font-bold justify-center px-4 py-2.5 text-[14px] text-gray-900 transition-all duration-200 border border-transparent rounded-full  "
              >
                Blog
              </a>
              {/* </Menu.Button> */}
            </div>
            <div className="nav_slaries">
              {/* <Menu.Button className="inline-flex w-full justify-center px-4 py-2 font-medium text-gray-700   "> */}
              {/* <a
                href="/companylist"
                title=""
                class="inline-flex items-center  font-bold justify-center px-4 py-2.5 text-[14px] text-gray-900 transition-all duration-200 border border-transparent rounded-full "
              >
                Brand List
              </a> */}
              {/* </Menu.Button> */}
            </div>
            {/* <a
              href="/contactus"
              title=""
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full  "
            >
              For Companies
            </a> */}
            <Menu as="div" className="relative inline-block text-left">
              <div className="">
                <Menu.Button className="inline-flex w-full justify-center py-2 font-medium text-gray-700   ">
                  <a
                    href=""
                    title=""
                    class="inline-flex items-center -ml-4 font-bold justify-center px-6 py-2.5 text-gray-900 text-[14px] transition-all duration-200 border border-transparent rounded-full  "
                  >
                    Companies
                  </a>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/postajob"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Post A Job
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/bulkdiscounts"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Bulk Discounts
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/contactus"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Contact Us
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="hidden ml-auto  sm:flex lg:ml-0">
            {/* <div className="mt-1 mr-5">
              {session ? <SignOut /> : <SignIn />}
            </div> */}

            {session ? (
              <div>
              <a
                href="/employers/postajob"
                title=""
                className="inline-flex items-center mb-4  justify-center px-5 py-2.5 text-base font-medium  transition-all duration-200 border border-gray-900 rounded-full bg-[#17614A] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                role="button"
              >
                Post A Job
              </a>
              <a
                href="/api/auth/signout"
                title=""
                class="inline-flex items-center  -mr-4 ml-4 font-bold justify-center px-4 py-2.5 text-[14px] text-gray-900 transition-all duration-200 border border-transparent rounded-full  "
              >
                Sign out
              </a>
              </div>
              

            ) : (
              <a
                href="/signup"
                title=""
                className="inline-flex items-center  mb-4 justify-center px-10 py-2.5 text-base font-medium  transition-all duration-200 border border-gray-900 rounded-full bg-[#17614A] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                role="button"
              >
                Log In
              </a>
            )}
          </div>

          <div className="flex ml-2 lg:hidden">
            <button
              type="button"
              onClick={() => setButton(!button)}
              className="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
            >
              {button ? (
                <div>
                  <span x-show="!expanded" aria-hidden="true">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                </div>
              ) : (
                <div>
                  <ModalSignIn />
                  <span x-show="expanded" aria-hidden="true">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbartwo;
