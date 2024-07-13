import React, { useState ,useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Log IN");
  const onlineStatus =useOnlineStatus();
  const {loggedInUser}=useContext(userContext);

  //selector hook is come from react/redux library
  //when cart item is update the cart is also update
  const cartItems=useSelector((store)=> store.cart.items);//specify the what possion to select in the cart

  return onlineStatus ?  (
    <div className="flex justify-between items-center py-6 px-16 p p-4 bg-white shadow-md shadow-red-100">
    <div className="flex items-center">
      {/* <img className="h-8 w-8 mr-2" src={LOGO_URL} alt="Logo" /> */}
      <div className="text-2xl font-bold">Tasty<span className="text-red-500">Treat</span></div>
    </div>
    <div className="flex items-center gap-7">
      <ul className="flex space-x-6 gap-5">
        <li><Link className="text-lg text-gray-700 hover:text-red-500" to="/">Home</Link></li>
        <li><Link className="text-lg text-gray-700 hover:text-red-500 " to="/About">About</Link></li>
        <li><Link className="text-lg text-gray-700 hover:text-red-500" to="/Contact">Contact</Link></li>
        <li><Link className="text-lg text-gray-700 hover:text-red-500" to="/Cart">Cart - ({cartItems.length})</Link></li>
      </ul>
      <button
        className="ml-6 px-4 py-2 w-32 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => {
          btnName === "Log IN"
            ? setBtnName("Log Out")
            : setBtnName("Log IN");
        }}
      >
        {btnName}
      </button>
      <ul>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  </div>
  
  ) : <div></div>
};

export default Header;
