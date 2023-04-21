import React from "react";
import UserIcon from "./icons/UserIcon";
import SalaryIcon from "./icons/SalaryIcon";
import Icon from "./icons/Icon";
import World from "./icons/World";
import Location from "./icons/Location";
import Image from "next/image"

const CompanyData = ({ hit }) => {
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
    <>
      <div
        className={` ml-4 rounded-lg mx-2 mb-4 lg:mb-7 border border-lightGray-100 bg-[#fdf4b0] lg:rounded-lg py-4 pl-4 pr-4  hover:bg-[#eee761]  ${hit?.featured && "bg-lightYellow-100"
          }`}
      >
        <a className="z-0" href={`/job/${hit?.jobUrl}`}>
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
                <div className="flex flex-col font-Studio6 md:flex-row items-center gap-1 lg:gap-3 xl:gap-6">
                  <div>
                    {hit?.job_position && (
                      <h2 className="text-base md:text-lg leading-5 md:leading-6 lg:!leading-30 font-Studio6 tracking-common font-medium">
                        <a href={`/job/${hit?.jobUrl}`}>{hit.job_position}</a>
                      </h2>
                    )}
                    <div className="flex flex-wrap flex-row  items-center justify-start gap-2 lg:gap-3">
                      {hit?.emp_count && (
                        <p className="flex flex-row items-center gap-2 ">
                          <UserIcon />
                          <span className="font-Studio6 font-normal text-sm text-black tracking-common opacity-60 leading-6 lg:!leading-30">
                            {parseInt(hit.emp_count) > 5
                              ? `5 - ${hit.emp_count} Employees`
                              : `0 - ${hit.emp_count} Employees`}
                          </span>
                        </p>
                      )}
                      {(hit?.salaryMin && hit?.salaryMax !== "null") || 0 ? (
                        <p className="flex flex-row items-center gap-2 ">
                          <SalaryIcon />
                          <span className="font-Studio6 font-normal text-sm text-black tracking-common opacity-60 leading-6 lg:!leading-30">
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
                        <p className="font-Studio6 font-medium text-sm leading-6 lg:!leading-30 tracking-common opacity-50">
                          {getDate()}
                        </p>
                      </div>
                    )}
                    {hit?.featured && (
                      <p className="font-medium text-xs tracking-common text-white font-Studio6 bg-lightGreen-100 rounded-lg px-4 py-2">
                        Featured
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* add bookmark feature <div className="border border-lightGray-100 rounded-md w-11 h-11 flex justify-center items-center cursor-pointer">
              <Icon />
            </div> */}
          </div>
          {/* {hit?.job_requirements && (
            <div className="pt-1.5 lg:pr-8">
              <p className="font-Studio6 font-normal text-sm leading-6 tracking-common opacity-80 text-black line-clamp-3">
                {hit.job_requirements}
              </p>
            </div>
          )} */}
          <div className="w-full lg:mt-2  flex flex-row flex-wrap gap-2 justify-start items-center">
            {hit?.job_category && (
              <div className="py-1.5 px-4 bg-black rounded-xl">
                <p className="font-Studio6 font-medium text-xs text-white leading-4">
                  {hit.job_category}
                </p>
              </div>
            )}
            {hit?.job_type && (
              <div className="py-1.5 px-4 bg-gray-900 rounded-xl">
                <p className="font-Studio6 font-medium text-xs text-white
                 leading-4">
                  {hit.job_type}
                </p>
              </div>
            )}
               {/* {hit?.company_url && (
                <a
                  href={`${hit.company_url}`}
                  target="_blank"
                  className="flex flex-row items-center gap-2 cursor-pointer"
                >
                  <World />
                  <span className="font-Studio6 font-normal text-sm leading-6 lg:!leading-30 tracking-common text-black opacity-80 break-all">
                    {hit.company_url}
                  </span>
                </a>
              )} */}
                   {(hit?.city || hit?.location) && (
                <p className="flex flex-row items-center  gap-2 cursor-pointer">
                  <Location />
                  <span className="font-Studio6 font-normal text-sm leading-6 lg:!leading-30 tracking-common text-black opacity-80 break-all">
                    {hit?.city} {hit?.location}
                  </span>
                </p>
              )}
              
              {/* <div className="w-full md:w-auto ">
              <button
                id="save-btn"
                onclick={console.log("booty")}
                className=" save-btn absolute right-9  font-Studio6 text-black font-semibold text-xs leading-6 md:!leading-30 tracking-common bg-btn py-1.5 px-5 md:px-6 md:py-2 rounded-3xl hover:scale-110 duration-150"
              >
                Save
              </button>
            </div> */}
          </div>
            {/* <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
              {hit?.company_url && (
                <a
                  href={`${hit.company_url}`}
                  target="_blank"
                  className="flex flex-row items-center gap-2 cursor-pointer"
                >
                  <World />
                  <span className="font-Studio6 font-normal text-sm leading-6 lg:!leading-30 tracking-common text-black opacity-80 break-all">
                    {hit.company_url}
                  </span>
                </a>
              )}
              {(hit?.city || hit?.location) && (
                <p className="flex flex-row items-center gap-2 cursor-pointer">
                  <Location />
                  <span className="font-Studio6 font-normal text-sm leading-6 lg:!leading-30 tracking-common text-black opacity-80 break-all">
                    {hit?.city} {hit?.location}
                  </span>
                </p>
              )}
            </div> */}
{/* 
            <div className="w-full md:w-auto flex ">
              <a
                href={`/job/${hit?.jobUrl}`}
                target="_blank"
                className="inline-block font-Studio6 text-white font-semibold text-xs leading-6 md:!leading-30 mx-auto tracking-common bg-lightGreen-300 py-1.5 px-5 md:px-6 md:py-2 rounded-3xl hover:scale-110 duration-150"
              >
                Learn More
              </a>
            </div> */}
     
        </div>
    </a>
      </div>
    </>
  );
};
 



export default CompanyData;
