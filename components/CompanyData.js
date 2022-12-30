import React from "react";
import UserIcon from "./icons/userIcon";
import Icon from "./icons/icon";
import World from "./icons/World";
import Location from "./icons/Location";

const CompanyData = () => {
  return (
    <>
      <div className="border border-lightGray-100 rounded-md pt-5 pb-4 pl-4 pr-7">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <div>
                <img
                  src="/company.png"
                  alt=""
                  className="w-14 h-14 border border-lightGray-200 rounded-lg"
                />
              </div>
              <div>
                <div className="flex flex-col md:flex-row items-center gap-3 xl:gap-6">
                  <div>
                    <h2 className="text-lg leading-30 font-Poppins tracking-common font-medium">
                      Social Media Manager
                    </h2>
                    <p className="flex flex-row items-center gap-2 ">
                      <UserIcon />
                      <span className="font-Poppins font-normal text-sm tracking-common opacity-60 leading-30">
                        5-100 Employees
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-6 self-start">
                    <div className="flex flex-row items-center gap-1 md:gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-lightGray-300" />
                      <p className="font-Poppins font-medium text-sm leading-30 tracking-common opacity-50">
                        7 Days ago
                      </p>
                    </div>
                    <p className="font-medium text-xs tracking-common text-white font-Poppins bg-lightGreen-100 rounded-lg px-4 py-1.5">
                      Featured
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-lightGray-100 rounded-md w-11 h-11 flex justify-center items-center cursor-pointer">
              <Icon />
            </div>
          </div>
          <div className="pt-1.5 lg:pr-8">
            <p className="font-Poppins font-normal text-sm leading-5 tracking-common opacity-80 text-black">
              Fleur du Mal is a luxury lingerie, ready-to-wear, and swim brand
              founded by Jennifer Zuccarini in 2012. Its name, derived from the
              title of a collection of poems by Charles Baudelaire, speaks to
              the unique duality of...
            </p>
          </div>
          <div className="w-full flex flex-row flex-wrap gap-2 justify-start items-center">
            <div className="py-1.5 px-4 bg-lightGray-400 rounded-xl">
              <p className=" font-Poppins font-medium text-xs text-lightGray-50 leading-4 ">
                Hybrid
              </p>
            </div>
            <div className="py-1.5 px-4 bg-lightGray-400 rounded-xl">
              <p className=" font-Poppins font-medium text-xs text-lightGray-50 leading-4 ">
                Marketing
              </p>
            </div>
            <div className="py-1.5 px-4 bg-lightGray-400 rounded-xl">
              <p className=" font-Poppins font-medium text-xs text-lightGray-50 leading-4 ">
                Social Media
              </p>
            </div>
            <div className="py-1.5 px-4 bg-lightGray-400 rounded-xl">
              <p className=" font-Poppins font-medium text-xs text-lightGray-50 leading-4 ">
                Social Media Handling
              </p>
            </div>
            <div className="py-1.5 px-4 bg-lightGray-400 rounded-xl">
              <p className=" font-Poppins font-medium text-xs text-lightGray-50 leading-4 ">
                Social Media Handling
              </p>
            </div>
          </div>

          <div className="w-full mt-2.5 flex flex-row justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
              <a
                href="https://markarian-nyc.com/"
                target="_blank"
                className="flex flex-row items-center gap-2 cursor-pointer"
              >
                <World />
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-50">
                  https://markarian-nyc.com/
                </span>
              </a>

              <a
                href="/"
                target="_blank"
                className="flex flex-row items-center gap-2 cursor-pointer"
              >
                <Location />
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-50">
                  El Segundo, CA USA
                </span>
              </a>
            </div>

            <div>
              <button className="font-Poppins text-white font-semibold text-xs leading-30 tracking-common bg-lightGreen-300 px-5 py-3 rounded-3xl">
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
