import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "../../functions/useDebounce";
import { Configure } from "react-instantsearch-hooks-web";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const CustomSalarySlider = ({ title, clearAll }) => {
  const [salaryMin, setSalaryMin] = useState(1);
  const [salaryMax, setSalaryMax] = useState(500000);
  const [value, setValue] = useState([salaryMin, salaryMax]);

  const marks = {
    0: 20000,
    100: 500000,
  };

  useEffect(() => {
    if (clearAll) {
      setSalaryMin(1);
      setSalaryMax(500000);
      setValue([1, 500000]);
    }
  }, [clearAll]);

  const handleValue = (val) => {
    setValue(val);
    debounce(val);
  };

  const onChange = (val) => {
    if (val) {
      setSalaryMin(val[0]);
      setSalaryMax(val[1]);
    }
  };

  const debounce = useCallback(useDebounce(onChange, 700), [
    salaryMin,
    salaryMax,
  ]);

  return (
    <>
      {(salaryMin || salaryMax) && (
        <Configure
          analytics={false}
          filters={`salaryMin > ${salaryMin || 1} AND salaryMax < ${
            salaryMax || 500000
          }`}
        />
      )}

      <div className="mb-10">
        <div className="mb-4">
          <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
            {title}
          </p>
        </div>
        <div className="px-3.5 flex justify-center items-center">
          <Slider
            range
            allowCross={false}
            onChange={(val) => {
              handleValue(val);
            }}
            marks={marks}
            min={1}
            max={500000}
            value={value}
            railStyle={{
              backgroundColor: "#E9EBEE",
              height: "6px",
              borderRadius: "3px",
            }}
            trackStyle={{
              backgroundColor: "#258B60",
              height: "6px",
              borderRadius: "3px",
            }}
            handleStyle={{
              backgroundColor: "#258B60",
              width: "20px",
              height: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
              border: "3.5px solid #FFFFFF",
              opacity: 1,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CustomSalarySlider;
