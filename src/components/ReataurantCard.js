import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resdata }) => {
  console.log(resdata);
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } = resdata;

  return (
    <div data-testid = "rescard" className="w-64 mt-4 border bg-white p-3 hover:scale-95">
      <img
        alt="res-logo"
        className="w-full h-40 object-cover "
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="mt-3">
        <div className="text-black text-lg font-medium">{name}</div>
        <div className="text-gray-600 text-sm text-opacity-50">
          {cuisines[0] + ", " + cuisines[1] + ", " + cuisines[2]}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-gray-600 font-medium">Rating</div>
          <div className="bg-green-400 px-2 py-1 text-sm rounded-md flex items-center ml-2">
            <img
              className="w-3 h-3 mr-1"
              src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
              alt="star-icon"
            />
            {avgRating}
          </div>
        </div>
        <div className="text-md mt-3 flex justify-center text-green-700  border-t-2 pt-1 ">
          {costForTwo}
        </div>
      </div>
    </div>
  );
};

export const withpromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="group">
        <label className="group-hover:scale-95 group-hover:ml-1 group-hover:mt-2 absolute px-1 py-1 bg-black text-white text-sm z-10 ">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
