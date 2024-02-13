import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RestaurantCard } from "./RestaurantCard/RestaurantCard";
import "./Body.css";
import { Link } from "react-router-dom";

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



  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    searchData(searchText, allRestaurants);
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <div className="body-container">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={handleSearchInputChange}
        ></input>
        <button className="search-input-icon"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}>
        <FaSearch
          
        /></button>
      </div>


      {/* Error message will be rendered if there are no restaurants are matched" */}
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard {...restaurant?.info} /></Link>
          );
        })}
        
      </div>
    </div>
  );
};

export default Body;
