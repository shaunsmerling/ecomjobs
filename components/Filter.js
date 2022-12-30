import React, { useState } from "react";
import {
  RefinementList,
  ClearRefinements,
} from "react-instantsearch-hooks-web";

import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import LocationF from "./LocationF";
import Close from "./icons/Close";

const Filter = () => {
  return (
    <>
      <div className="flex flex-col bg-lightGreen-50 p-6 gap-5 rounded-md">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h3 className="font-medium text-base leading-5 tracking-tight text-black font-Poppins">
              Filter
            </h3>
          </div>
          <div>
            <button className="flex flex-row justify-center items-center gap-3 cursor-pointer select-none">
              <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                Clear All
              </span>
              <Close />
            </button>
          </div>
        </div>

        {/* Location */}
        <div>
          <div className="mb-3">
            <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
              Location
            </p>
          </div>
          <div className="relative w-full py-3 pl-9 pr-7 rounded-xl border border-lightGray-100 ">
            <div className="absolute top-1/2 left-5 -translate-y-1/2">
              <LocationF />
            </div>
            <select className="w-full font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70 bg-transparent outline-none cursor-pointer">
              <optgroup className="bg-lightGreen-50 border-none">
                <option>New York</option>
                <option>New </option>
                <option>New York</option>
                <option>New York</option>
                <option>New York</option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* Availability */}
        <div>
          <div className="mb-3">
            <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
              Availability
            </p>
          </div>

          <div>
            <label className="filter-checkbox flex flex-row items-center cursor-pointer">
              <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                Freelance / Contract
              </span>
              <input type="checkbox" />
              <span className="checkmark-checkbox" />
            </label>

            <label className="filter-checkbox flex flex-row items-center cursor-pointer">
              <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                Full Time
              </span>
              <input type="checkbox" />
              <span className="checkmark-checkbox" />
            </label>

            <label className="filter-checkbox flex flex-row items-center cursor-pointer">
              <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                Freelance / Contract
              </span>
              <input type="checkbox" />
              <span className="checkmark-checkbox" />
            </label>

            <label className="filter-checkbox flex flex-row items-center cursor-pointer">
              <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                Full Time
              </span>
              <input type="checkbox" />
              <span className="checkmark-checkbox" />
            </label>
          </div>
        </div>

        {/* Jobs You Might Like */}
        <div>
          <div className="mb-2">
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
        </div>

        {/* Employees */}
        <div>
          <div className="mb-4">
            <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
              Employees
            </p>
          </div>
          <div>
            <MultiRangeSlider
              min={0}
              max={3500}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
        </div>

        {/* Specialities */}

        <div className="mt-10">
          <div className="mb-2">
            <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
              Specialities
            </p>
          </div>
          <div>
            <div>
              <label className="filter-checkbox flex flex-row justify-between items-center cursor-pointer">
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Marketing
                </span>
                <input type="checkbox" />
                <span className="checkmark-checkbox" />
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black">
                  198
                </span>
              </label>
            </div>
            <div>
              <label className="filter-checkbox flex flex-row justify-between items-center cursor-pointer">
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Bizs Ops
                </span>
                <input type="checkbox" />
                <span className="checkmark-checkbox" />
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black">
                  131
                </span>
              </label>
            </div>
            <div>
              <label className="filter-checkbox flex flex-row justify-between items-center cursor-pointer">
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Customer Service
                </span>
                <input type="checkbox" />
                <span className="checkmark-checkbox" />
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black">
                  198
                </span>
              </label>
            </div>
            <div>
              <label className="filter-checkbox flex flex-row justify-between items-center cursor-pointer">
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Marketing
                </span>
                <input type="checkbox" />
                <span className="checkmark-checkbox" />
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black">
                  198
                </span>
              </label>
            </div>
            <div>
              <label className="filter-checkbox flex flex-row justify-between items-center cursor-pointer">
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Bizs Ops
                </span>
                <input type="checkbox" />
                <span className="checkmark-checkbox" />
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black">
                  131
                </span>
              </label>
            </div>
            <div>
              <label className="filter-checkbox flex flex-row justify-between items-center cursor-pointer">
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
                  Customer Service
                </span>
                <input type="checkbox" />
                <span className="checkmark-checkbox" />
                <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black">
                  198
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
