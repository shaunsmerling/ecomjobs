import React from "react";
import { useCurrentRefinements } from "react-instantsearch-hooks-web";

function CustomCurrentRefinements(props) {
  const { items } = useCurrentRefinements(props);
  const findSelectLocation = items.find(
    ({ attribute }) => attribute === "location"
  );

  return (
    <>
      {findSelectLocation && findSelectLocation?.refinements[0].label
        ? findSelectLocation?.refinements[0].label
        : "Select Location"}
    </>
  );
}

export default CustomCurrentRefinements;
