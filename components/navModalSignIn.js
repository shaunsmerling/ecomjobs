import React from "react";
import { useSession } from "next-auth/react";

function Modal() {
  const { data: session } = useSession();

  return (
    <div className="fixed top-0  left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white mb-10 w-11/12 h-5/6 md:max-w-md mx-auto rounded shadow-lg text-left px-6">
        <div class="flex items-center justify-between">
          <div>
            <a href="../">
              <img
                href="../"
                className="w-auto h-10 mt-4 -ml-2 mb-4 "
                src="../logo.png"
                alt=""
              ></img>
            </a>
          </div>
          <div className=" -mr-36 mb-4 mt-4">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              data-action="transition#hide"
            >
              <span class="sr-only">Close menu</span>

              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="text-left"></nav>
        </div>
        {session ? (
          <div class="mt-4">
            <nav class="grid grid-cols-1 gap-7">
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/employers/posts"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2 ">My Jobs</div>
                </div>
              </a>
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/employers/companyprofile"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                      <path
                        fill-rule="evenodd"
                        d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2 ">Company Profile</div>
                </div>
              </a>

              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/contactus"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2 ">Contact Us</div>
                </div>
              </a>
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/bulkdiscounts"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2 ">Bulk Discounts</div>
                </div>
              </a>
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/api/auth/signout"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2  mb-4">Sign out</div>
                </div>
              </a>
              <div className=" border-t-2 mx-auto">
                <div className="mt-4">
                  <a
                    href="/postajob"
                    title=""
                    className="inline-flex items-center justify-center px-20 mt-6 py-2.5 text-base font-medium  transition-all duration-200 border border-gray-900 rounded-full bg-[#17614A] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                    role="button"
                  >
                    Post A Job
                  </a>
                </div>
              </div>
            </nav>
          </div>
        ) : (
          <div class="mt-4">
            <nav class="grid grid-cols-1 gap-7">
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/salaries"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2 ">Salaries</div>
                </div>
              </a>
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/blog"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2 ">Blog</div>
                </div>
              </a>
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/internships"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2 ">Internships</div>
                </div>
              </a>
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/bulkdiscounts"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2 ">Bulk Discounts</div>
                </div>
              </a>
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/contactus"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 ml-2  mb-4">Contact Us</div>
                </div>
              </a>
              <div className=" border-t-2 mb-10 -mt-4 mx-auto">
                <a
                  href="/postajob"
                  title=""
                  className="inline-flex items-center justify-center px-20 mt-4 py-2.5 text-base font-medium  transition-all duration-200 border border-gray-900 rounded-full bg-[#17614A] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                  role="button"
                >
                  Post A Job
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
export default Modal;
