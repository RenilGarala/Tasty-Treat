import { useEffect, useState , lazy} from "react"; //Named exports are specific functions, objects, or variables that are exported from a module.
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantManu from "../utils/useRestaurantManu";
// import ReastaurantCategory from "./RestaurantCategory";

const ReastaurantCategory = lazy(()=> import("./RestaurantCategory"))
// const { useRestaurantManu } = lazy(()=> import("../utils/useRestaurantManu"))


const Reastaurant = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantManu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const cardInfo = resinfo?.cards[2].card.card.info;
  const itemcards =
    resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .itemCards ||
    resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .carousel; //itemCards       carousel

  const categories =
    resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

 
  if (!cardInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, city, avgRating, areaName, veg } =
    cardInfo;

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
            {veg ? "Veg" : "Non Veg"} Restaurant
          </span>
        </div>
      </div>

      <div className="list-disc list-inside mt-4 w-auto grid align-middle justify-center items-center">
        <div className=" font-medium text-2xl flex justify-center pb-5 border-b-2 mb-5">
          Menu
        </div>

        {/* manu item - accordian categories */}

        {categories.map((category, index) => (
          <ReastaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(showIndex === index ?null :index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Reastaurant;
