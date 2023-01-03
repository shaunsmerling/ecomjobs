import React, { useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";
import Search from "../components/icons/Search";

function CustomSearchBox(props) {
  const [searchText, setSearchText] = useState("");
  const { refine } = useSearchBox(props);

  const handleSearch = (e) => {
    e.preventDefault();
    refine(searchText);
  };

  return (
    <>
      <form onSubmit={(e) => handleSearch(e)}>
        <div className="flex flex-row items-center justify-between w-full gap-5">
          <div className="h-12 w-full">
            <input
              type="text"
              placeholder="Search by Title, Company or any jobs keyword..."
              className="searchBox h-full w-full outline-none border rounded-md border-lightGray-100 px-5 font-normal text-sm leading-30 tracking-common font-Poppins "
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="h-12">
            <button className="h-full flex flex-row justify-center items-center gap-2 bg-lightGreen-300 rounded-md px-9 w-auto">
              <Search />
              <span className="font-Poppins font-medium text-sm text-white leading-30">
                Find
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CustomSearchBox;
