import React, { useState, useEffect, lazy } from "react";
import Restaurantcard,{ withpromotedLabel } from "./ReataurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// const Restaurantcard = lazy(()=>import("./ReataurantCard"))
// const { withpromotedLabel } = lazy(()=>import("./ReataurantCard"))


const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withpromotedLabel(Restaurantcard);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  // console.log(resList);
  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=22.29040&lng=70.79150"
      );

      const json = await data.json();

      //store api data into reslist
      setResList(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      //store same data into filteredRestaurant
      setfilteredRestaurant(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="h-screen grid justify-center text-center align-middle">
        <div>"Online Status : 🔴"</div>
        <div>Now You are Offline Please Check Your Connection</div>
      </div>
    );

    
  if (resList.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="body px-32 ">
      <div className="flex justify-between items-center">
        <div className="flex my-10">
          <input
            type="text"
            className="p-3 pl-18 w-80 shadow-md text-md rounded-s-xl"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);

              const filteredRestro = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestro);
            }}
           
          />
          <button
            className="p-3 w-28 h-14 ml-5 bg-red-500 text-white rounded-e-xl text-md active:bg-red-700"
            onClick={() => {
              const filteredRestro = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestro);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="p-3 px-7 w-auto h-14 ml-5 bg-red-500 text-white rounded-xl text-md active:bg-red-700"
          onClick={() => {
            const list = resList.filter((res) => res.info.avgRating > 4.5);
            setfilteredRestaurant(list);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="p-3 px-7 w-auto h-14 ml-5 bg-red-500 text-white rounded-xl text-md active:bg-red-700"
          onClick={() => {
            
            const list = resList.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
            setfilteredRestaurant([...list]);

            console.log(list)
          }}
        >
          
          Delivery Time - low to high
        </button>
      </div>

      <div className="flex justify-between flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resdata={restaurant.info} />
            ) : (
              <Restaurantcard resdata={restaurant.info} />
            )}
          </Link>
        ))}
        {/* <Restaurantcard resdata={resList[1]} /> */}
      </div>
    </div>
  );
};

export default Body;