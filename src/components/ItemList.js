import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    //whenever this is called then it's create payload inside it
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id || item?.dish?.info?.id}
          className="flex w-[700] flex-col md:flex-row items-center p-4 rounded-md shadow-md justify-center gap-5"
        >
          <div className="">
            <img
              src={
                CDN_URL + item?.card?.info?.imageId || item?.dish?.info?.imageId
              }
              className="rounded-md w-56 h-40"
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
              {item?.card?.info?.price / 100 || item?.dish?.info?.price / 100}{" "}
              Rs
            </p>
            <p className="text-gray-500">20% OFF USE TRYNEW</p>
            <p className="text-gray-600">
              {item?.card?.info?.ratings?.aggregatedRating?.rating ||
                item?.dish?.info?.ratings?.aggregatedRating?.rating}{" "}
              Rating
            </p>
            <div className="flex items-end justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white w-28 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={()=> handleAddItem(item)} //do not write like that handleAddItem(item) this will be called function but we want to call back function
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
