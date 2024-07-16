import React from "react";
import searchLogo from "../assets/Images/SearchLogos.png";
import Items from "../content/Items";

function SearchBar({ foodItems, setFoodItems ,setCommonData}) {
  const search = (e) => {
    console.log(e.target.value);
    let inputValue = e.target.value;

    let filteredArray = Items.filter((item, index) => {
      let lowerCase = item?.name?.toLowerCase();
      let inputEntry = inputValue.toLowerCase();

      return lowerCase.includes(inputEntry);
    });  
    setFoodItems(filteredArray);
    console.log(filteredArray, "jshjkhd");
  };
  return (
    <>
      <div className="search-parent w-full">
        <img src={searchLogo} alt="logo" />
        <input
          onInput={search}
          type="text"
          placeholder="Enter the item you want to search"
          className="rounded w-3/4 sm:w-3/4 md:w-1/2 lg:w-2/4"
        />

        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </>
  );
}

export default SearchBar;
