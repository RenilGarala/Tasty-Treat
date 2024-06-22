import React, { useState, useEffect } from "react";
import Restaurantcard from "./ReataurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant ]= useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=22.29040&lng=70.79150"
      );

      const json = await data.json();

      setResList(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurant(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (resList.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="body-header">
        <div className="body-search">
          <input
            type="text"
            className="search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchbtn"
            onClick={() => {
              const filteredRestro = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestro);
            }}
          >
            search
          </button>
        </div>

        <div className="res-filter">
          <button
            className="filter-btn"
            onClick={() => {
              const list = resList.filter((res) => res.info.avgRating > 4.5);
              setfilteredRestaurant(list);
            }}
          >
            Top Rated Reataurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> <Restaurantcard resdata={restaurant.info} /></Link>
        ))}
        {/* <Restaurantcard resdata={resList[1]} /> */}
      </div>
    </div>
  );
};

export default Body;
