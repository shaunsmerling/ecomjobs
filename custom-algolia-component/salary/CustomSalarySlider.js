import React, { useCallback, useEffect, useState } from "react";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import useDebounce from "../../functions/useDebounce";
import { Configure } from "react-instantsearch-hooks-web";

const CustomSalarySlider = ({ title }) => {
  const [salaryMin, setSalaryMin] = useState(null);
  const [salaryMax, setSalaryMax] = useState(null);

  const [isFirstTime, setIsFirstTime] = useState(true);

  const onChange = ({ min, max }) => {
    if (min === 20000 && isFirstTime) {
      setSalaryMin(null);
    } else {
      setSalaryMin(min);
      setIsFirstTime(false);
    }

    if (max === 500000 && isFirstTime) {
      setSalaryMax(null);
    } else {
      setSalaryMax(max);
      setIsFirstTime(false);
    }
  };

  const debounce = useCallback(useDebounce(onChange, 500), [
    salaryMin,
    salaryMax,
  ]);

  return (
    <>
      {(salaryMin || salaryMax) && (
        <Configure
          analytics={false}
          filters={`salaryMin > ${salaryMin || 20000} AND salaryMax < ${
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
        <div>
          <MultiRangeSlider
            onChange={debounce}
            min={20000}
            max={500000}
            stateMax={salaryMax || 500000}
            stateMin={salaryMin || 20000}
            showMinMax
          />
        </div>
      </div>
    </>
  );
};

export default CustomSalarySlider;
