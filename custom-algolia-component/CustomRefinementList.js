import React from "react";
import {
  RefinementList,
  useRefinementList,
} from "react-instantsearch-hooks-web";

function CustomRefinementList(props) {
  const { canRefine } = useRefinementList(props);

  return (
    <>
      {canRefine && (
        <div>
          <div className="mb-3">
            <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
              {props.title}
            </p>
          </div>
          <div className="specialities">
            <RefinementList attribute={props.attribute} />
          </div>
        </div>
      )}
    </>
  );
}

export default CustomRefinementList;
