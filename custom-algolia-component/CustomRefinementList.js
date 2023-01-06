import React from "react";
import {
  RefinementList,
  useRefinementList,
} from "react-instantsearch-hooks-web";

function CustomRefinementList(props) {
  const { canRefine } = useRefinementList(props);

  return (
    <>
      <div>
        <div className="mb-3">
          <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
            {props.title}
          </p>
        </div>
        {canRefine ? (
          <div className="specialities">
            <RefinementList attribute={props.attribute} />
          </div>
        ) : (
          <div className="my-1">
            <p className="text-center opacity-50 font-normal text-base leading-5 tracking-common text-lightGray-300 font-Poppins">
              No Filter
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CustomRefinementList;
