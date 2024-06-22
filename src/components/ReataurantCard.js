import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resdata }) => {
  const { name, avgRating, cuisines,deliveryTime,cloudinaryImageId } = resdata;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-name">{name}</div>
      <div className="res-cuisine">{cuisines+ " , "}</div>
      <div className="res-rating">
        <div className="rating-label">Rating</div>
        <div className="rating">{avgRating}</div>
      </div>
      <div className="res-delivery">Delivery Time: {deliveryTime} mins</div>
    </div>
  );
};

export default RestaurantCard;