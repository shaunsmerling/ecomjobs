import React, { useState } from "react";
import CustomClearRefinements from "../custom-algolia-component/CustomClearRefinements";
import CustomRefinementList from "../custom-algolia-component/CustomRefinementList";
import CustomMenu from "../custom-algolia-component/CustomMenu";
import { CustomRangeSlider } from "../custom-algolia-component/multiRangeSlider/CustomRangeSlider";
import CustomSalarySlider from "../custom-algolia-component/salary/CustomSalarySlider";

const Filter = ({clearFilter, setClearFilter}) => {
 
  return (
    <>
      <div className="bg-[#2b4f43] p-6 rounded-md w-full">
        <div className="relative flex flex-col gap-5">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h3 className="font-medium text-base leading-5 tracking-tight text-white font-Poppins">
                Filter
              </h3>
            </div>
            <div className="mb-12 -mr-4">
              {/* <CustomClearRefinements setClearAll={setClearFilter} /> */}
            </div>
          </div>

          {/* Location */}
          <CustomMenu attribute={"location"} title={"Location"} />

          {/* Availability */}
          <CustomRefinementList attribute="job_type" title={"Availability"} />

          {/* Jobs You Might Like */}
          {/* <div>
            <div className="mb-3">
              <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
                Jobs You Might Like
              </p>
            </div>
            <div>
              <label
                className="filter-radio flex flex-row items-center cursor-pointer"
                htmlFor="best"
              >
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Best Matches
                </span>
                <input type="radio" name="job" id="best" />
                <span className="checkmark-radio" />
              </label>
            </div>
            <div>
              <label
                className="filter-radio flex flex-row items-center cursor-pointer"
                htmlFor="most"
              >
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Most Recent
                </span>
                <input type="radio" name="job" id="most" />
                <span className="checkmark-radio" />
              </label>
            </div>
            <div>
              <label
                className="filter-radio flex flex-row items-center cursor-pointer"
                htmlFor="saved"
              >
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Saved Jobs
                </span>
                <input type="radio" name="job" id="saved" />
                <span className="checkmark-radio" />
              </label>
            </div>
          </div> */}

          {/* Salary */}
          <CustomSalarySlider attribute1="salaryMin" attribute2="salaryMax" title="Salary" 
          clearAll={clearFilter} 
          setClearAll={setClearFilter}/>
          {/* Employees */}

          <CustomRangeSlider
            attribute="emp_count"
            stateMin={1}
            stateMax={20000}
            title={"Employees"}
            clearAll={clearFilter}
            setClearAll={setClearFilter}
          />

          {/* Specialities */}

          <CustomRefinementList
            attribute="job_category"
            title={"Specialities"}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
