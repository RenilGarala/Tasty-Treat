import { useState } from "react";
import ItemList from "./itemList";

const ReastaurantCategory = ({ data }) => {

  const[showItems,setShowItems]=useState(false);
  const handleClick= ()=>{
    setShowItems(!showItems); //if showItems is true then false and if that is false then true
  }
  return (
    <div className="p-4 mb-3 w-[700px] bg-white shadow-sm">
      <div className=" flex justify-between" onClick={handleClick}>
        <div className="text-lg font-bold">
          {data?.title} ({data?.itemCards.length})
        </div>
        <div>⌄</div>
      </div>
      <div className="flex justify-center align-middle ">
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default ReastaurantCategory;
