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
          <p className="opacity-70 font-medium text-base leading-5 tracking-common text-white font-montserrant">
            {props.title}
          </p>
        </div>
        {canRefine ? (
          <div className="specialities">
            <RefinementList attribute={props.attribute} />
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

export default CustomRefinementList;
