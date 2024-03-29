import React from "react";
import { useClearRefinements } from "react-instantsearch-hooks-web";
import Close from "../components/icons/Close";

function CustomClearRefinements({handleClear, setClearAll }) {
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
  const { refine } = res;

  return (
    <>
      <button
        className="absolute pt-4 -ml-10 gap-3 cursor-pointer select-none"
        onClick={() => {
          refine();
          setTimeout(() => {
            setClearAll(true);
          }, 500);
          setClearAll(false);
          handleClear()
        }}
        // disabled={!canRefine}
      >
        {/* <span className="font-montserrant font-normal text-sm leading-30 tracking-common text-white opacity-100 ">
          Clear All
        </span> */}
        <Close className="opacity-100" />
      </button>
    </>
  );
}

export default CustomClearRefinements;
