
import { useState, useEffect } from "react";
import {useSession} from "next-auth/react"





function EditProfile() {


  const [userData, setUserData] = useState([]);
  const {data: session, status }  = useSession();

  useEffect(() => {
    // show the spinner
    showSpinner();

    // hide the spinner after 3 seconds
    const timer = setTimeout(() => {
      hideSpinner();
    }, 3000);

    // clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  function showSpinner() {
    document.querySelector(".spinner").classList.add("show");
  }

  function hideSpinner() {
    document.querySelector(".spinner").classList.remove("show");
  }


  useEffect(() => {


    fetch(`api/users?email=${session?.user?.email}`, {
    method: "GET",
    })
    .then((res) => res.json())
    .then((data) => setUserData(data));
    }, );



  return (
    <div className=" font-Montserrant ">
      {/* <NextSeo
      title={`${userData?.company_name} | eCommerce Jobs `}
      description={`${userData?.company_name} | eCommerce Jobs `}
    /> */}
    

      <main className=" my-20 ">
      
        <section className="relative ">
        <img src="/hh.png" className="hidden lg:flex absolute top-8 right-8 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/cm.png" className="hidden lg:flex absolute -top-14 right-96 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/kk.png" className="hidden lg:flex absolute bottom-0 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/bb.png" className="hidden lg:flex absolute -bottom-10 left-60 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/qq.png" className="hidden lg:flex absolute top-8 left-80 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/to.png" className="hidden lg:flex absolute -top-6 left-16 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/gg.png" className="hidden lg:flex absolute top-72 right-32 z-0 w-16 md:w-20" alt="EP logo" />
  <img src="/rr.png" className="hidden lg:flex absolute bottom-20 right-96 z-0 w-16 md:w-20" alt="EP logo" />
  

  
  <img src="/pr.png" className="hidden lg:flex absolute bottom-32 right-10 z-0 w-16 md:w-20" alt="EP logo" />

  <img src="/dsc.png" className="hidden lg:flex absolute top-40  z-0 w-16 md:w-20" alt="EP logo" />

  <img src="/gs.png" className="hidden lg:flex absolute -top-28 left-96 z-0 w-16 md:w-20" alt="EP logo" />

  <img src="/g2.png" className="hidden lg:flex absolute top-96 -right-12 z-0 w-16 md:w-20" alt="EP logo" />

  <img src="/pm.png" className="hidden lg:flex absolute bottom-28 left-10 z-0 w-16 md:w-20" alt="EP logo" />

  <img src="/fn.png" className="hidden lg:flex absolute -bottom-12 right-16 z-0 w-16 md:w-20" alt="EP logo" />

  <img src="/na.png" className="hidden lg:flex absolute -bottom-14 right-96 z-0 w-16 md:w-20" alt="EP logo" />






          <div className="container mx-auto   px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-20 border border-gray-200">
            <a href="/profile/editprofile" class="gear-icon hover:text-[#709771] text-md font-montserrant absolute italic top-0 right-0 p-4">
  {/* <span class="desktop-only">⚙️ Edit Profile</span> */}
  <span class="mobile-only">⚙️</span>
</a>
              <div className="mx-10 lg:mx-0">
                <div className="flex flex-wrap justify-center">
                  <div className=" lg:w-3/12  lg:order-2 flex justify-center">
                    <div className="relative">
                      <img  alt="" className=" p-2 border border-gray-200 bg-white rounded-md h-44  -mt-16 " src={userData[0]?.profilePicture ? userData[0]?.profilePicture : "../avatar.svg"}/>
                    </div>
                   
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className=" px-3 lg:mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-montserrant font-bold block tracking-wide text-blueGray-600">
                          {userData[0]?.years_of_exp} 
                        </span>
                        <span className="text-sm text-blueGray-400">
                         Years of Experience
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-montserrant block font-bold tracking-wide text-blueGray-600">
                         {userData[0]?.primary_role}
                        </span>
                        <span className="text-sm text-blueGray-400">Job Position</span>
                      </div>
                    
                   
                    </div>
                  </div>
                  
                  
                </div>

                
                <div className="px-0 lg:mx-0 text-center  ">
                  <h3 className="text-xl lg:text-4xl font-montserrant leading-normal mb-2 text-blueGray-700 mb-2">
                    {session?.user?.name}
                   
                  </h3>
                  <p className="text-sm font-montserrant leading-normal mb-2 hover:text-[#709771] mb-2">
                 {/* <a href="/profile/createprofile">
                  ⚙ Edit Profile 
                  </a> */}
                  </p>
                 
                  <div className="text-sm leading-normal  mb-2 text-blueGray-400 font-bold font-montserrant">

                    {userData[0]?.location}
                  </div>
                  <div className="mb-2 text-blueGray-600 ">
                  
                    <a href={userData[0]?.website_url} className="text-sky-400">
                      {userData[0]?.website_url}
                    </a>
                  </div>
                
                  <p className="font-montserrant text-sm lg:text-sm lg:px-10 mx-20 mb-8 ">
                
                    {" "}
                    {userData[0]?.bio}

                  </p>
                  </div>
                 
           
                
                  <p className="my-6 font-montserrant space-x-2 font-bold text-md lg:text-md  lg:px-10 mx-auto   "> Skills: </p>
                  <p className="text-md lg:text-md  font-montserrant lg:px-10 mx-auto  mt-6 mb-12 ">
                    {" "}
                    {userData[0]?.skills.map((skill) => (
                      skill + ", "
                    ))}
                  </p>

       
                  <p className=" font-montserrant space-x-2 font-bold text-md lg:text-md  lg:px-10 mx-auto my-6 "> Applying For:</p>
                  <p className="text-md lg:text-md  font-montserrant lg:px-10 mx-auto mt-6 mb-12 ">
                    {" "}
                    {userData[0]?.open_to_roles}
                  </p>
                 


                  <p className="font-montserrant space-x-2 font-bold text-md lg:text-md  lg:px-10 mx-auto my-6  "> Achievements:</p>
                  <p className="text-md lg:text-md   font-montserrant lg:px-10 mx-auto mt-6 mb-12">
                    {" "}
                    {userData[0]?.achievements}
                  </p>
                 
                  
                  <p className="my-6 font-montserrant space-x-2 font-bold text-md lg:text-md  lg:px-10 mx-auto  "> Work Experience #1</p>
                  <p className="text-md g:text-md   font-montserrant lg:px-10 mx-auto mt-6 mb-12">
                    {" "}
                    {userData[0]?.work_exp_1}
          
                  </p>

                  {userData[0]?.work_exp_2 ? 
                  <div>
                  <p className="my-6 font-montserrant space-x-2 font-bold text-md lg:text-md  lg:px-10 mx-auto"> Work Experience #2: </p>
                  <p className="text-md g:text-md  font-montserrant lg:px-10 mx-auto mt-6 mb-12">
                    {" "}
                    {userData[0]?.work_exp_2}
                
                  </p>
                  </div>
                  :
                  ""
                  }

                  {userData[0]?.work_exp_3 ? 
                  <div>
                  <p className="my-6 font-montserrant space-x-2 font-bold text-md lg:text-md  lg:px-10 mx-auto"> Work Experience #3: </p>
                  <p className="text-md g:text-md   font-montserrant lg:px-10 mx-auto mt-6 mb-12">
                    {" "}
                    {userData[0]?.work_exp_3}
                
                  </p>
                  </div>
                  :
                  ""
                  }
                  {userData[0]?.work_exp_4 ? 
                  <div>
                  <p className="my-6 font-montserrant space-x-2 font-bold text-md lg:text-md  lg:px-10 mx-auto"> Work Experience #4: </p>
                  <p className="text-md g:text-md   font-montserrant lg:px-10 mx-auto mt-6 mb-12">
                    {" "}
                    {userData[0]?.work_exp_4}
                
                  </p>
                  </div>
                  :
                  ""
                  }
                  {userData[0]?.work_exp_5 ? 
                  <div>
                  <p className="my-6 font-montserrant space-x-2 font-bold text-md lg:text-md  lg:px-10 mx-auto"> Work Experience #5: </p>
                  <p className="text-md g:text-md  font-montserrant lg:px-10 mx-auto mt-6 mb-12 ">
                    {" "}
                    {userData[0]?.work_exp_5}
                
                  </p>
                  </div>
                  :
                  ""
                  }


                  
                 
                  {/* <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  </div> */}
               
                 
              </div>
            </div>
          </div>
        </section>
      </main>
      <div class="spinner"></div>
    </div>
  );
}

export default EditProfile;
