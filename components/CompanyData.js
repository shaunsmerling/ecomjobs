import React from "react";
import UserIcon from "./icons/UserIcon";
import SalaryIcon from "./icons/SalaryIcon";
import { useEffect } from "react";
import Location from "./icons/Location";
import Image from "next/image"
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api_url } from "../config";


const CompanyData = ({ hit }) => {


  
    const [isSaved, setIsSaved] = useState(false)
    const {data: session} = useSession();

    
    
  
    const handleClick = async () => {
      if (!session) {
        setIsSaved(true);
        await router.push("/login");
      } else if (session) {
        setIsSaved(true);

        
        
      

       

      
        // Update the user's jobIDs with the updated saved jobs array
        const userEmail = session.user.email;
        console.log(userEmail)
        const res = await fetch(`api/users?email=${userEmail}`);
        const userData = await res.json();
        const savedJobs = userData[0]?.jobIDs || [];

        if (!userData[0]?.jobIDs) {
          userData[0].jobIDs = [];
        }
      
        // Add this job's ID to the saved jobs array if it doesn't already exist
        if (!savedJobs.includes(hit.objectID)) {
          savedJobs.push(hit.objectID);
        }

  
        
        // Check for duplicates and add new job IDs
        const newJobIDs = savedJobs.filter((jobID) => !userData[0].jobIDs.includes(jobID));
      
        userData[0].jobIDs = [...userData[0].jobIDs, ...newJobIDs];
        console.log(savedJobs)
  
        await fetch(`/api/users`, {
          method: "PUT",
          body: JSON.stringify({
            jobIDs: userData[0].jobIDs,
            id: userData[0].id,

          })
        
        });
      

  }
};
function checkPinned() {
  // retrieve the timestamps for the pinned add-on from your database
  const top24 = hit?.top24Timestamp;
  const week = hit?.weekTimestamp;
  const month = hit?.monthTimestamp;
  
  // check if any of the timestamps is null and return early if so
  if (top24 === null || week === null || month === null) {
    return;
  }
  
  // get current time
  const currentTime = new Date().getTime();
  
  // get time diff for each add on
  const timeDiff24 = currentTime - top24;
  const timeDiffWeek = currentTime - week;
  const timeDiffMonth = currentTime - month;

  // check if each add-on is still valid
  const top24Valid = timeDiff24 < (24 * 60 * 60 * 1000); // check if the time difference is less than 24 hours
  const topWeekValid = timeDiffWeek < (7 * 24 * 60 * 60 * 1000); // check if the time difference is less than 1 week
  const topMonthValid = timeDiffMonth < (30 * 24 * 60 * 60 * 1000); // check if the time difference is less than 1 month
  
  // return an object with the validity status of each add-on
  return {
    top24: top24Valid,
    week: topWeekValid,
    month: topMonthValid
  };
}

const pinnedStatus = checkPinned();







    const router = useRouter();

    const goToJob = (e) => {
      if (isSaved === false) {
        router.push(`/job/${hit?.jobUrl}`);
      }
    };
    
    

 

  // Date Calculation
  function getDate() {
    let date_1 = new Date(hit.postedat);
    let date_2 = new Date();




    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil((difference / (1000 * 3600 * 24)) * -1);

    if (TotalDays === 0) {
      return "Today";
    } else if (TotalDays === 1) {
      return `${TotalDays} day ago`;
    } else if (TotalDays > 1 && TotalDays < 30) {
      return `${TotalDays} days ago`;
    } else if (TotalDays >= 30 && TotalDays <= 60) {
      return "1 month ago";
    } else if (TotalDays >= 60 && TotalDays <= 90) {
      return "2 months ago";
    } else if (TotalDays >= 90 && TotalDays <= 120) {
      return "3 months ago";
    }
  }



  return (
    !session ? 
    <>
      <div
        className={` mx-4 rounded-lg  mb-4 lg:mb-7 border border-[#2c4f43] lg:rounded-lg py-4 pl-4 hover:bg-[#dbd7d4] ${hit?.featured ? "bg-amber-200" : "bg-[#edebea]"
          }`}
      >
        <div className="z-0" onClick={goToJob}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-3 md:gap-4">
              {hit?.logo && (
                <div className="self-start lg:self-center">
                  
                  <img
                    src={hit?.logo.startsWith("data:image/") ? hit?.logo : `https://ecomportal-images.storage.googleapis.com/images/${hit?.logo}`}
                    alt=""
                    className="w-14 h-14 min-w-[56px] min-h-[56px] border border-lightGray-200 rounded-lg"
                  />

                </div>
              )}
              <div>
                <div className="flex flex-col font-montserrant md:flex-row items-center gap-1 lg:gap-3 xl:gap-6">
                  <div>
                    {hit?.job_position && (
                      <h2 className="text-black md:text-lg leading-5 md:leading-6 lg:!leading-30 font-montserrant tracking-common font-medium">
                        <a href={`/job/${hit?.jobUrl}`}>{hit.job_position}</a>
                      </h2>
                    )}
                    <div className="flex flex-wrap flex-row  items-center justify-start gap-2 lg:gap-3">
                    {hit?.emp_count && (
                        <p className="flex flex-row items-center gap-2 ">
                          <UserIcon />
                          <span className="font-montserrant font-normal text-sm text-black tracking-common opacity-60 leading-6 lg:!leading-30">
                            {hit.emp_count <= 100 && '1 - 100 Employees'}
                            {hit.emp_count > 100 && hit.emp_count <= 500 && '100 - 500 Employees'}
                            {hit.emp_count > 500 && hit.emp_count <= 2000 && '500 - 2000 Employees'}
                            {hit.emp_count > 2000 && hit.emp_count <= 5000 && '2000 - 5000 Employees'}
                            {hit.emp_count > 5000 && '5000+ Employees'}
                          </span>
                        </p>
                      )}
                      {(hit?.salaryMin && hit?.salaryMax !== "null") || 0 ? (
                        <p className="flex flex-row items-center gap-2 ">
                          <SalaryIcon />
                          <span className="font-montserrant font-normal text-sm text-black tracking-common opacity-60 leading-6 lg:!leading-30">
                            {hit?.salaryMin && hit?.salaryMax && hit.salaryMin !== "0"
  ? hit.salaryMin === hit.salaryMax
    ? hit.salaryMax >= 10000
      ? `$${hit.salaryMax}/yr`
      : ""
    : hit.salaryMin >= 10000 && hit.salaryMax >= 10000
      ? `$${hit.salaryMin} - $${hit.salaryMax}`
      : hit.salaryMin >= 10000
        ? `$${hit.salaryMin} -`
        : hit.salaryMax >= 10000
          ? ` - $${hit.salaryMax}`
          : ""
  : ""}
                          </span>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-2  md:gap-6 self-start">
                    {hit?.postedat && (
                      <div className="flex flex-row items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-lightGray-300" />
                        <p className="font-montserrant font-medium text-black text-sm leading-6 lg:!leading-30 tracking-common opacity-50">
                          {getDate()}
                        </p>
                        {/* {(pinnedStatus?.top24 && hit?.top24) || (pinnedStatus?.week && hit?.week) || (pinnedStatus?.month && hit?.month) ? (
                    <p className="ml-1 font-medium text-lg tracking-common text-black font-montserrant rounded-lg">
                      📌
                    </p>
                  ) : null} */}
                    {(hit?.top24) || (hit?.week) || ( hit?.month) ? (
                    <p className="ml-1 font-medium text-lg tracking-common text-black font-montserrant rounded-lg">
                      📌
                    </p>
                  ) : null}
                      </div>
                    
                    )}
                    {hit?.featured && (
                      <p className="font-medium text-xs tracking-common text-black font-montserrant bg-lightGreen-100 rounded-lg px-4 py-2">
                        Featured
                      </p>
                    )}
                    
                  

                  </div>
                </div>
              </div>
            </div>


          </div>
         
          <div className="w-full lg:mt-2  flex flex-row flex-wrap gap-2 justify-start items-center">
            {hit?.job_category && (
              <div className="py-1.5 px-4 bg-[#709771] rounded-xl">
                <p className="font-montserrant font-medium text-xs text-white leading-4">
                  {hit.job_category}
                </p>
              </div>
            )}
            {hit?.job_type && (
              <div className="py-1.5 px-4 bg-[#2d4f42] rounded-xl">
                <p className="font-montserrant font-medium text-xs text-white
                 leading-4">
                  {hit.job_type}
                </p>
              </div>
            )}
            
                   {(hit?.city || hit?.location) && (
                <p className="flex flex-row items-center  gap-2 cursor-pointer">
                  <Location />
                  <span className="font-montserrant font-normal text-sm leading-6 lg:!leading-30 tracking-common text-black opacity-80 break-all">
                    {hit?.city} {hit?.location}
                  </span>
                </p>
              )}
              
          
          </div>

     
        </div>
      </div>
      <div className="w-full md:w-auto ">
              <button
                id="save-btn"
                onClick={handleClick}
                className=" bg-[#2d4f42] absolute right-12 font-monteserrant text-white md:ml-20 font-semibold text-xs leading-6 md:!leading-30 py-1.5 px-2 md:px-4 md:py-2 rounded-3xl hover:bg-[#567369]"
              >
           Save 
              </button>
            </div>
      </div> 
    </> :  <>
      <div
        className={` mx-4 rounded-lg  mb-4 lg:mb-7 border border-[#2c4f43]  lg:rounded-lg py-4 pl-4 hover:bg-[#dbd7d4] ${hit?.featured ? "bg-amber-200" : "bg-[#edebea]"
      }`}
      >
        <div className="z-0" onClick={goToJob}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-3 md:gap-4">
              {hit?.logo && (
                <div className="self-start lg:self-center">
                  

                  <img
                    src={`https://ecomportal-images.storage.googleapis.com/images/${hit.logo}`}
                    alt=""
                    className="w-14 h-14 min-w-[56px] min-h-[56px] border border-lightGray-200 rounded-lg"
                  />
                </div>
              )}
              <div>
                <div className="flex flex-col font-montserrant md:flex-row items-center gap-1 lg:gap-3 xl:gap-6">
                  <div>
                    {hit?.job_position && (
                      <h2 className="text-black md:text-lg leading-5 md:leading-6 lg:!leading-30 font-montserrant tracking-common font-medium">
                        <a href={`/job/${hit?.jobUrl}`}>{hit.job_position}</a>
                      </h2>
                    )}
                    <div className="flex flex-wrap flex-row  items-center justify-start gap-2 lg:gap-3">
                    {hit?.emp_count && (
                        <p className="flex flex-row items-center gap-2 ">
                          <UserIcon />
                          <span className="font-montserrant font-normal text-sm text-black tracking-common opacity-60 leading-6 lg:!leading-30">
                            {hit.emp_count <= 100 && '1 - 100 Employees'}
                            {hit.emp_count > 100 && hit.emp_count <= 500 && '100 - 500 Employees'}
                            {hit.emp_count > 500 && hit.emp_count <= 2000 && '500 - 2000 Employees'}
                            {hit.emp_count > 2000 && hit.emp_count <= 5000 && '2000 - 5000 Employees'}
                            {hit.emp_count > 5000 && '5000+ Employees'}
                          </span>
                        </p>
                      )}
                      {(hit?.salaryMin && hit?.salaryMax !== "null") || 0 ? (
                        <p className="flex flex-row items-center gap-2 ">
                          <SalaryIcon />
                          <span className="font-montserrant font-normal text-sm text-black tracking-common opacity-60 leading-6 lg:!leading-30">
                            {hit?.salaryMin && hit?.salaryMax && hit.salaryMin !== "0"
  ? hit.salaryMin === hit.salaryMax
    ? hit.salaryMax >= 10000
      ? `$${hit.salaryMax}/yr`
      : ""
    : hit.salaryMin >= 10000 && hit.salaryMax >= 10000
      ? `$${hit.salaryMin} - $${hit.salaryMax}`
      : hit.salaryMin >= 10000
        ? `$${hit.salaryMin} -`
        : hit.salaryMax >= 10000
          ? ` - $${hit.salaryMax}`
          : ""
  : ""}
                          </span>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-2  md:gap-6 self-start">
                    {hit?.postedat && (
                      <div className="flex flex-row items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-lightGray-300" />
                        <p className="font-montserrant font-medium text-black text-sm leading-6 lg:!leading-30 tracking-common opacity-50">
                          {getDate()}
                        </p>
                        {/* {(pinnedStatus?.top24 && hit?.top24) || (pinnedStatus?.week && hit?.week) || (pinnedStatus?.month && hit?.month) ? (
                    <p className="ml-1 font-medium text-lg tracking-common text-black font-montserrant rounded-lg">
                      📌
                    </p>
                  ) : null} */}
                    {(hit?.top24) || (hit?.week) || ( hit?.month) ? (
                    <p className="ml-1 font-medium text-lg tracking-common text-black font-montserrant rounded-lg">
                      📌
                    </p>
                  ) : null}
                      </div>
                    )}
                    {hit?.featured && (
                      <p className="font-medium text-xs tracking-common text-black font-montserrant bg-lightGreen-100 rounded-lg px-4 py-2">
                        Featured
                      </p>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>

    
          </div>
         
          <div className="w-full lg:mt-2  flex flex-row flex-wrap gap-2 justify-start items-center">
            {hit?.job_category && (
              <div className="py-1.5 px-4 bg-[#709771] rounded-xl">
                <p className="font-montserrant font-medium text-xs text-white leading-4">
                  {hit.job_category}
                </p>
              </div>
            )}
            {hit?.job_type && (
              <div className="py-1.5 px-4 bg-[#2d4f42] rounded-xl">
                <p className="font-montserrant font-medium text-xs text-white
                 leading-4">
                  {hit.job_type}
                </p>
              </div>
            )}
            
                   {(hit?.city || hit?.location) && (
                <p className="flex flex-row items-center  gap-2 cursor-pointer">
                  <Location />
                  <span className="font-montserrant font-normal text-sm leading-6 lg:!leading-30 tracking-common text-black opacity-80 break-all">
                    {hit?.city} {hit?.location}
                  </span>
                </p>
              )}
              
          
          </div>

     
        </div>
      </div>
      <div className="w-full md:w-auto ">
              <button
                id="save-btn"
                onClick={handleClick}
                className=" bg-[#2d4f42] absolute right-12  font-monteserrant text-white font-semibold text-xs leading-6 md:!leading-30 py-1.5 px-2 md:px-4 md:py-2 rounded-3xl hover:bg-[#567369]"
              >
           {isSaved ? "✓" : "Save"}
              </button>
            </div>
      </div>
    </>
  );
};
 



export default CompanyData;
