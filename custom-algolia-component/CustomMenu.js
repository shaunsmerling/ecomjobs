import React, { useEffect, useRef, useState } from "react";
import { Menu, useMenu } from "react-instantsearch-hooks-web";
import CustomCurrentRefinements from "./CustomCurrentRefinements";
import useOutsideAlerter from "../functions/useOutsideAlerter";
import DownArrow from "../components/icons/DownArrow";
import LocationF from "../components/LocationF";

function CustomMenu(props) {
  const { items, refine, canRefine } = useMenu(props);
  const [locationSelectModel, setLocationSelectModel] = useState(false);
  const locationModelRef = useRef(null);

  useOutsideAlerter(locationModelRef, () => {
    setLocationSelectModel(false);
  });

  return (
    <>
      {canRefine && (
        <div>
          <div className="mb-3">
            <p className="opacity-70 font-medium text-base leading-5 tracking-common text-black font-Poppins">
              {props.title}
            </p>
          </div>
          <div
            className="w-full py-3 pl-4 pr-7 rounded-xl border border-lightGray-100 flex flex-row justify-between items-center bg-transparent cursor-pointer"
            onClick={() => setLocationSelectModel(!locationSelectModel)}
          >
            <div className="flex flex-row items-center gap-2.5">
              <LocationF />
              <span className="w-full font-Poppins font-normal text-sm leading-30 tracking-common text-black ">
                <CustomCurrentRefinements
                  attribute={"location"}
                  setLocationSelectModel={setLocationSelectModel}
                />
              </span>
            </div>
            <span
              className={`duration-200 ${
                locationSelectModel ? "rotate-180 " : ""
              }`}
            >
              <DownArrow />
            </span>
          </div>
          <div
            className={`${
              locationSelectModel ? "" : "hidden"
            } locationModel absolute bg-white w-full z-10 py-3 px-7 border border-lightGray-100 rounded-xl mt-2`}
            ref={locationModelRef}
          >
            <div>
              <Menu
                attribute={props.attribute}
                onClick={() => {
                  setLocationSelectModel(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomMenu;
