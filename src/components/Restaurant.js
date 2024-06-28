import { useEffect, useState } from "react"; //Named exports are specific functions, objects, or variables that are exported from a module.
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantManu from "../utils/useRestaurantManu"


const Reastaurant = () => {

  const { resId } = useParams();
  const resinfo = useRestaurantManu(resId);

  const cardInfo = resinfo?.cards[2].card.card.info;
  const itemcards =
    resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .itemCards ||
    resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .carousel; //itemCards       carousel

  if (!cardInfo) {
    return <Shimmer />;
  }
  console.log(cardInfo);
  const {name,cuisines,costForTwoMessage,city,avgRating,areaName,veg} = cardInfo;

  console.log(itemcards);

  return (
    <div className="grid grid-cols-1 gap-4 justify-center items-center p-4 pt-14 px-80">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="font-bold text-xl mb-5 text-red-500">{name}</h2>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.87 1.24 1.787l-1.345 3.34c-.242.615-.928.88-1.438.552l-2.19-1.041a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-.87-1.24-1.787l1.345-3.34c.242-.615.928-.88 1.438-.552l2.19 1.041zM21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
          <span className="text-gray-800">{avgRating} (1K+ ratings)</span>
          <span className="text-gray-800 ml-4">{costForTwoMessage}</span>
        </div>
        <div className="mb-4">
          <span className="text-gray-800 font-medium">
            {cuisines.join(", ")}
          </span>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
          <span className="text-gray-800 font-medium">Outlet</span>
          <span className="text-gray-800 ml-2">
            {areaName} - {city}
          </span>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
          <span className="text-gray-800 font-medium">25-30 mins</span>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
          <span className="text-gray-800">
            {veg? "Veg":"Non Veg"} Restaurant
          </span>
        </div>
      </div>

      <div className="list-disc list-inside mt-4 w-auto grid align-middle justify-center items-center">
        <div className=" font-medium text-2xl flex justify-center pb-5 border-b-2 mb-5">
          Menu
        </div>
        {/* Uncomment the lines below if the items exist in the itemcards.carousel array */}
        {/* <li>{itemcards.carousel[0].dish.info.name}</li>
        <li>{itemcards.carousel[1].dish.info.name}</li> */}
        {itemcards?.map((item) => (
          <div
            key={item?.card?.info?.id || item?.dish?.info?.id}
            className="text-sm text-gray-700 mb-5"
          >
            {/* item?.card?.info? item?.dish?.info? dish is connected with carousel and card is connected with itemcard */}

            <div className="flex flex-col md:flex-row items-center p-4 rounded-md shadow-md justify-center gap-5">
              <div className=" w-44 mr-2">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d4053b0cbff8d0dbf5769c5a603e5060"
                  className="rounded-md w-full h-auto"
                />
              </div>

              <div className="md:w-2/3 flex flex-col gap-2 w-96">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-xl font-bold">
                    {item?.card?.info?.name ||
                      item?.dish?.info?.name ||
                      "No menu items here"}
                  </div>
                </div>
                <p className="text-lg font-semibold">
                  {item?.card?.info?.price / 100 ||
                    item?.dish?.info?.price / 100}{" "}
                  Rs
                </p>
                <p className="text-gray-500">20% OFF USE TRYNEW</p>
                <p className="text-gray-600">
                  {item?.card?.info?.ratings || item?.dish?.info?.ratings}
                </p>
                <div className="flex items-end justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white w-36 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reastaurant;
