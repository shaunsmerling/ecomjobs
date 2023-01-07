import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "../../functions/useDebounce";
import { Configure } from "react-instantsearch-hooks-web";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useRangeSlider } from "../multiRangeSlider/CustomRangeSlider";

const CustomSalarySlider = ({ title, clearAll, attribute1, attribute2 }) => {
  const [salaryMin, setSalaryMin] = useState(20000);
  const [salaryMax, setSalaryMax] = useState(500000);
  const [value, setValue] = useState([salaryMin, salaryMax]);

  const { canRefine: canRefineMin } = useRangeSlider({
    attribute: attribute1,
  });
  const { canRefine: canRefineMax } = useRangeSlider({
    attribute: attribute2,
  });

  useEffect(() => {
    if (clearAll) {
      setSalaryMin(20000);
      setSalaryMax(500000);
      setValue([20000, 500000]);
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
    salaryMax,
    salaryMin,
  ]);

  return (
    <>
      <>
        {(salaryMin || salaryMax) && (
          <>
            <Configure
              analytics={false}
              filters={`(salaryMin=0 OR salaryMin > ${salaryMin}) AND (salaryMax=0 OR salaryMax < ${salaryMax})`}
            />
          </>
        )}

        <div>
          <div className="mb-4">
            <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
              {title}
            </p>
          </div>
          {canRefineMin && canRefineMax ? (
            <div className="mb-10 px-3.5 flex justify-center items-center">
              <Slider
                range
                allowCross={false}
                onChange={(val) => {
                  if (val[0] >= 20000) {
                    handleValue(val);
                  }
                }}
                marks={{
                  0: value[0],
                  100: value[1],
                }}
                min={20000}
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
          ) : (
            <div className="my-1">
              <p className="text-left opacity-30 font-normal text-base leading-5 tracking-common text-lightGray-300 font-Poppins">
                No Filter
              </p>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default CustomSalarySlider;
