import { useConnector } from "react-instantsearch-hooks-web";
import connectRange from "instantsearch.js/es/connectors/range/connectRange";
import { useCallback, useEffect, useState } from "react";
import useDebounce from "../../functions/useDebounce";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useClearRefinements } from "react-instantsearch-hooks-web";



export function useRangeSlider(props) {
  return useConnector(connectRange, props);
}
export function CustomRangeSlider(props) {
  const { range, refine, canRefine } = useRangeSlider(props);
  const [value, setValue] = useState([]);


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

  const handleValue = (val) => {
    if (val[0] === value[0] && val[1] === value[1]) {
      setValue([]);
 
    } else {
      setValue(val);

    }

    if (!val.length && canRefine) {
      refine(range.min);
    } else {
      debounce(val);
    }

  
  };

  const onChange = (refineValue) => {
    refine(refineValue);
    if (!document.querySelector("input[type='checkbox']:checked")) {
      const { refine } = res;
      refine();
      setTimeout(() => {
        props.setClearAll(true);
      }, 500);
      props.setClearAll(false);
      setValue([]);
    }
  };

  const debounce = useCallback(useDebounce(onChange, 700), [canRefine]);

  useEffect(() => {
    setValue([])
  }, [canRefine]);

  return (
    <>
      <div>
        <div className="mb-4">
          <p className="opacity-70 font-medium text-base leading-5 tracking-common text-white font-montserrant">
            {props.title}
          </p>
        </div>
        {canRefine ? (
          <div className="mb-4 pr-3.5 flex align-left justify-start ">
            <div className="flex flex-col  items-start w-max">
              {[["1-100", "1 - 100"], ["100-500", "100 - 500"], ["500-2000", "500 - 2000"], ["2000-5000", "2000 - 5000"], ["5000-20000", "5000+"]].map(([range, label]) => {
                const [min, max] = range.split("-").map(Number);
                return (
                  <div key={range} className="flex  mb-2">
                    <input
                      type="checkbox"
                      id={range}
                      name={range}
                      value={range}
                      checked={value[0] === min && value[1] === max}
                      onChange={() => handleValue([min, max])}
                      className="mr-2 align-left mt-1 bg-transparent border border-white rounded-md"
                    />
                    <label htmlFor={range} className="text-white">
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
            
          </div>
        ) : (
          <div className="my-1">
            <p className="text-left opacity-30 font-normal text-base leading-5 tracking-common text-white font-montserrant">
              No Filter
            </p>
          </div>
        )}
      </div>
    </>
  );
}