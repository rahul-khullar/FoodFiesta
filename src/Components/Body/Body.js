import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RestaurantCard } from "./RestaurantCard/RestaurantCard";
import "./Body.css";

import { swiggy_api_URL } from "../../Utils/constants";

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        ></input>
        <FaSearch className="icon" onClick={()=>{
          searchData(searchText,allRestaurants);
        }}/>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant)=>{
        return( 
        <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info}/>
        );
        })};
        </div>
    </div>
  );
};

export default Body;
