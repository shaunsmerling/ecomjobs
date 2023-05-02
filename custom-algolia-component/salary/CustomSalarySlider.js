import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "../../functions/useDebounce";
import { Configure } from "react-instantsearch-hooks-web";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useRangeSlider } from "../multiRangeSlider/CustomRangeSlider";
import { useClearRefinements } from "react-instantsearch-hooks-web";
import Close from "../../components/icons/Close";


const CustomSalarySlider = ({ title, clearAll, setClearAll, attribute1, attribute2 }) => {
  const [salaryMin, setSalaryMin] = useState(0);
  const [filters, setFilters] = useState("");

   const res = useClearRefinements({
    includedAttributes: [
      "location",
      "job_type",
      "emp_count",
      "salary",
      "salaryMax",
      "salaryMin",
      "job_category",
      "job_position",
    ],
  });


  const { refine, canRefine: canRefineMin } = useRangeSlider({
    attribute: attribute1,
  });

  function reset() {
    const { refine } = res;
    refine();
    setTimeout(() => {
      setClearAll(true);
    }, 500);
    setClearAll(false);
    setSalaryMin(0);
    setFilters("");
  }
  

  useEffect(() => {
    if (clearAll) {
      setSalaryMin(0);
      setFilters("");
    }
  }, [clearAll]);

  const debounce = useCallback(
    useDebounce((val) => {
      if (val) {
        setSalaryMin(val);
        setFilters(`(salaryMin>${val} AND salaryMax<300000)`);
      } else {
        setFilters("");
      }
    }, 700),
    []
  );

  return (
    <>
      <div className="mb-4">
        <p className="opacity-70 font-medium text-base leading-5 tracking-common text-white font-Studio6">
          {title}
        </p>
      </div>
      {canRefineMin ? (
       
        <div className=" pl-5 pr-3.5 flex justify-center items-center">
          <Slider
            value={salaryMin} // Set value prop to salaryMin
            onChange={(val) => {
              if (val >= 30000) {
                setSalaryMin(val);
                debounce(val);
              }
            }}
            marks={{
              0: `$${salaryMin}/yr >`,
            }}
            min={0}
            max={300000}
            step={10000}
            railStyle={{
              backgroundColor: "#709771",
              height: "6px",
              borderRadius: "3px",
            }}
            trackStyle={{
              backgroundColor: "#709771",
              height: "6px",
              borderRadius: "3px",
            }}
            handleStyle={{
              backgroundColor: "#709771",
              width: "20px",
              height: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
              border: "3.5px solid #FFFFFF",
              opacity: 1,
            }}
          />
           
        </div>
     
     
        
      ) : (
        <div className="my-1">
          <p className="text-left opacity-30 font-normal text-base leading-5 tracking-common text-white font-Studio6">
            No Filter
          </p>
        </div>
      )}
      {filters && (
        <Configure
          analytics={false}
          filters={filters}
        />
      )}
       <button
       className="rounded-md px-4 py-2 text-white focus:outline-none focus:shadow-outline-primary active:bg-primary-600 transition duration-150 ease-in-out"
        onClick={reset
        }
        // disabled={!canRefine}
      >
        <span className="font-montserrant whitespace-nowrap transform transition duration-300 hover:bg-[#5a795a]  rounded-full px-4 py-2 -mt-10 font-normal text-sm leading-30 bg-[#709771] tracking-common text-white border border-black opacity-100 ">
          Reset Salary
        </span>
      
      </button>
    </>
  );
};

export default CustomSalarySlider;
