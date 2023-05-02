import React, { useEffect, useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";
import Search from "../components/icons/Search";
import CustomClearRefinements from "../custom-algolia-component/CustomClearRefinements";



function CustomSearchBox({clearFilter, setClearFilter, ...props}) {
  const [searchText, setSearchText] = useState("");
  const { refine } = useSearchBox(props);

  const words = [
    "Copywriter", 
    "Gymshark",
  "Content Creator", 
  "Ridge",
  "Frontend Developer",
  "Skims", 
  "Product Manager", 
  "The Oodie",
  "Paid Media Specialist", 
  "Glossier",
  "Growth Marketer", 
  "UGC Content Creator", 
  "Quip",
  "Tiktok Content Creator",
"Retail Associate",
"Cometeer",
"Google Ads Specialist",
"Harrys",
"Facebook Ads Specialist",
"Capser",
"CRO Specialist",
"Data Scientist",
"SEO Executive",
"Allbirds",
"VP of Brand",
"Account Executive",
"Sales Associate",
"Senior Software Engineer"];


  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentWord = words[currentWordIndex];
      const currentLetter = currentWord[currentLetterIndex];
  
      if (currentLetterIndex === currentWord.length - 1) {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setCurrentLetterIndex(0);
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    }, 200);
  
    return () => clearInterval(intervalId);

  }, [currentLetterIndex, currentWordIndex]);
  

  const handleFocus = () => {
    const searchBoxContainer = document.querySelector('.searchBoxContainer')
    searchBoxContainer.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.1)";
    searchBoxContainer.style.borderRadius = "20px";
  };

  const removeFocus = () => {
    const searchBoxContainer = document.querySelector('.searchBoxContainer')
    searchBoxContainer.style.boxShadow = "";
    searchBoxContainer.style.borderRadius = "";
  };

  const handleSearch = (e) => {
    e.preventDefault();
    refine(searchText);
  };

  const handleClear = () => {
    setSearchText("");
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };






  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <div id="search-container" className="flex flex-row items-center justify-between w-full gap-2 lg:gap-5">
          <div className="h-12 w-full space-x-2 flex flex-row searchBoxContainer">
            <input
              id="searchBox"
              type="text"
              placeholder={` ${words[currentWordIndex].slice(0, currentLetterIndex + 1)}|`} // Use the current word in the placeholder
              className="searchBox h-full w-full outline-none border rounded-md border-lightGray-100 
              font-normal text-xl  leading-30 tracking-common font-Montserrant animate-typing"
              value={searchText}
              onFocus={handleFocus}
              onBlur={removeFocus}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <div className="ml-auto ">
             <CustomClearRefinements handleClear={handleClear} setClearAll={setClearFilter} />
             </div>

              
            <button className="h-full flex flex-row justify-center items-center gap-2 text-white transition-all duration-200 bg-[#709771] border border-transparent rounded-lg  hover:bg-[#5a795a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 px-6 lg:px-9 w-auto">
              <Search />
              <span className="font-montserrant font-bold text-sm text-white leading-30 hidden md:inline-block">
                Find
              </span>
            </button>
           
          
       
          </div>
        </div>
      </form>
    </div>
  );
            }


export default CustomSearchBox;
