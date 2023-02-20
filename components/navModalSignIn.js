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
                      href="/remote-jobs"
                    >
                      <div class="ml-2 flex text-base font-medium text-gray-900">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                        <img src="https://img.icons8.com/windows/32/FFFFFF/laptop-computer.png"/>
                        </div>
                        <div className="mt-2 ml-2 ">Remote Jobs</div>
                      </div>
                    </a>
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
                            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                          </svg>
                        </div>
                        <div className="mt-2 ml-2 ">Your Jobs</div>
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
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                          >
                            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                          </svg>
                       
                        </div>
                        <div className="mt-2 ml-2">Bulk Discounts</div>
                      </div>
                    </a>
                    <a
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      href="/list-your-company"
                    >
                      <div class="ml-2 flex text-base font-medium text-gray-900">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
      {/*             
                           <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                          >
                            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                          </svg>
                        */}
                                  <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/sorting-answers.png"/>
                        </div>
                        <div className="mt-2 ml-2">List Your Company</div>
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
                    <div className=" border-t-2 mb-4 -mt-4 mx-auto">
                      <a
                        href="/postajob"
                        title=""
                        className="inline-flex items-center justify-center px-20 mt-4 py-2.5 text-base font-medium  transition-all duration-200 border border-gray-900 rounded-full bg-[#17614A] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                        role="button"
                      >
                        Post A Job
                      </a>
                    </div>
                    <div className=" -mt-4 -mb-10 mx-auto">
            
                      <a
                        href="/api/auth/signout"
                        title=""
                        className="text-lightGreen-300 font-bold "
                       
                      >
                         Sign Out
                      </a>
                     
                    </div>
                  </nav>
                </div>

        ) : (
          <div class="mt-4">
            <nav class="grid grid-cols-1 gap-7">
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/remote-jobs"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
                  <img src="https://img.icons8.com/windows/32/FFFFFF/laptop-computer.png"/>
                  </div>
                  <div className="mt-2 ml-2 ">Remote Jobs</div>
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
                  <div className="mt-2 ml-2 ">Blogs</div>
                </div>
              </a>
               <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/location"
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
                  <div className="mt-2 ml-2">Locations</div>
                </div>
              </a>
              <a
                class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                href="/category"
              >
                <div class="ml-2 flex text-base font-medium text-gray-900">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#17614A]  text-white mr-2">
{/*             
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                    </svg>
                  */}
                            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/sorting-answers.png"/>
                  </div>
                  <div className="mt-2 ml-2">Categories</div>
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
              <div className=" border-t-2 mb-4 -mt-4 mx-auto">
                <a
                  href="/postajob"
                  title=""
                  className="inline-flex items-center justify-center px-20 mt-4 py-2.5 text-base font-medium  transition-all duration-200 border border-gray-900 rounded-full bg-[#17614A] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                  role="button"
                >
                  Post A Job
                </a>
              </div>
              <div className=" -mt-4 -mb-10 mx-auto">
                <p className="text-black">  Are you an employer? Sign in&nbsp;
                <a
                  href="/signup"
                  title=""
                  className="text-lightGreen-300 font-bold "
                 
                >
                   here
                </a>
                </p>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
export default Modal;
