import React, { useEffect } from "react";
import { useClearRefinements } from "react-instantsearch-hooks-web";
import Close from "../components/icons/Close";

function CustomClearRefinements(props) {
  const { refine, items } = useClearRefinements(props);

  return (
    <>
      <button
        className="flex flex-row justify-center items-center gap-3 cursor-pointer select-none"
        onClick={() => refine(items)}
      >
        <span className="font-Poppins font-normal text-sm leading-30 tracking-common text-black opacity-70">
          Clear All
        </span>
        <Close />
      </button>
    </>
  );
}

export default CustomClearRefinements;
