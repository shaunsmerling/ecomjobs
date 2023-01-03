import React from "react";
import UserIcon from "./icons/userIcon";
import Icon from "./icons/icon";
import World from "./icons/World";
import Location from "./icons/Location";

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
        className={`mb-7 border border-lightGray-100 rounded-md pt-5 pb-4 pl-4 pr-7 ${
          hit?.featured && "bg-[#e9e9e9]"
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              {hit?.logo && (
                <div>
                  <img
                    src={`./images/${hit.logo}`}
                    alt=""
                    className="w-14 h-14 border border-lightGray-200 rounded-lg"
                  />
                </div>
              )}
              <div>
                <div className="flex flex-col md:flex-row items-center gap-3 xl:gap-6">
                  <div>
                    {hit?.job_position && (
                      <h2 className="text-lg leading-30 font-Poppins tracking-common font-medium">
                        {hit.job_position}
                      </h2>
                    )}
                    {hit?.emp_count && (
                      <p className="flex flex-row items-center gap-2 ">
                        <UserIcon />
                        <span className="font-Poppins font-normal text-sm tracking-common opacity-60 leading-30">
                          {parseInt(hit.emp_count) > 5
                            ? `5 - ${hit.emp_count} Employees`
                            : `0 - ${hit.emp_count} Employees`}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="flex flex-row items-center gap-6 self-start">
                    {hit?.postedat && (
                      <div className="flex flex-row items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-lightGray-300" />
                        <p className="font-Poppins font-medium text-sm leading-30 tracking-common opacity-50">
                          {getDate()}
                        </p>
                      </div>
                    )}
                    {hit?.featured && (
                      <p className="font-medium text-xs tracking-common text-white font-Poppins bg-lightGreen-100 rounded-lg px-4 py-1.5">
                        Featured
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-lightGray-100 rounded-md w-11 h-11 flex justify-center items-center cursor-pointer">
              <Icon />
            </div>
          </div>
          {hit?.job_requirements && (
            <div className="pt-1.5 lg:pr-8">
              <p className="font-Poppins font-normal text-sm leading-5 tracking-common opacity-80 text-black line-clamp-3">
                {hit.job_requirements}
              </p>
            </div>
          )}
          <div className="w-full flex flex-row flex-wrap gap-2 justify-start items-center">
            {hit?.job_category && (
              <div className="py-1.5 px-4 bg-lightGray-400 rounded-xl">
                <p className="font-Poppins font-medium text-xs text-lightGray-50 leading-4">
                  {hit.job_category}
                </p>
              </div>
            )}
            {hit?.job_type && (
              <div className="py-1.5 px-4 bg-lightGray-400 rounded-xl">
                <p className="font-Poppins font-medium text-xs text-lightGray-50 leading-4">
                  {hit.job_type}
                </p>
              </div>
            )}
          </div>
          <div className="w-full mt-2.5 flex flex-row justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
              {hit?.company_url && (
                <a
                  href={`${hit.company_url}`}
                  target="_blank"
                  className="flex flex-row items-center gap-2 cursor-pointer"
                >
                  <World />
                  <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-80">
                    {hit.company_url}
                  </span>
                </a>
              )}
              {(hit?.city || hit?.location) && (
                <p className="flex flex-row items-center gap-2 cursor-pointer">
                  <Location />
                  <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-80 ">
                    {hit?.city} {hit?.location}
                  </span>
                </p>
              )}
            </div>

            <div>
              <button className="font-Poppins text-white font-semibold text-xs leading-30 tracking-common bg-lightGreen-300 px-5 py-3 rounded-3xl hover:scale-110 duration-150">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyData;
