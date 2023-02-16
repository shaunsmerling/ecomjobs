import { useConnector } from "react-instantsearch-hooks-web";
import connectRange from "instantsearch.js/es/connectors/range/connectRange";
import { useCallback, useEffect, useState } from "react";
import useDebounce from "../../functions/useDebounce";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export function useRangeSlider(props) {
  return useConnector(connectRange, props);
}

export function CustomRangeSlider(props) {
  const { range, refine, canRefine } = useRangeSlider(props);
  const [value, setValue] = useState([range.min, range.max]);
  const { clearAll } = props;
  useEffect(() => {
    setValue([range.min, range.max]);
  }, [range.min, range.max, clearAll]);

  const handleValue = (val) => {
    setValue(val);
    debounce(val);
  };

  const onChange = (refineValue) => {
    refine(refineValue);
  };

  const debounce = useCallback(useDebounce(onChange, 700), [canRefine]);

  return (
    <>
      <div>
        <div className="mb-4">
          <p className="opacity-70 font-medium text-base leading-5 tracking-common text-white font-Poppins">
            {props.title}
          </p>
        </div>
        {canRefine ? (
          <div className=" mb-10 px-3.5 flex justify-center items-center">
            <Slider
              range
              allowCross={false}
              onChange={(val) => {
                handleValue(val);
              }}
              marks={{
                0: value[0],
                100: value[1],
              }}
              min={range.min}
              max={range.max}
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
            <p className="text-left opacity-30 font-normal text-base leading-5 tracking-common text-white font-Poppins">
              No Filter
            </p>
          </div>
        )}
      </div>
    </>
  );
}
