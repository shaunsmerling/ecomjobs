import { useConnector } from "react-instantsearch-hooks-web";
import connectRange from "instantsearch.js/es/connectors/range/connectRange";
import { useCallback  } from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import useDebounce from "../../functions/useDebounce";

export function useRangeSlider(props) {
  return useConnector(connectRange, props);
}

export function CustomRangeSlider(props) {
  const { range, refine, canRefine } = useRangeSlider(props);

  const onChange = ({ min, max }) => {
    if (range.min !== min || range.max !== max) {
      refine([min, max]);
    }
  };
  const debounce = useCallback(useDebounce(onChange, 500), [range]);

  if (range.min === range.max) {
    return () => null;
  }

  return (
    <>
      {canRefine && (
        <div className="mb-10">
          <div className="mb-4">
            <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
              {props.title}
            </p>
          </div>
          <div>
            <MultiRangeSlider
              min={range.min}
              max={range.max}
              onChange={debounce}
              stateMin={props.stateMin}
              stateMax={props.stateMax}
            />
          </div>
        </div>
      )}
    </>
  );
}
