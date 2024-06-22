import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, serBtnName] = useState("Log IN");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link className="headerlink" to="/">Home</Link></li>
          <li><Link className="headerlink"  to="/About">About</Link></li>
          <li><Link className="headerlink" to="/Contact">Contact</Link></li>
          <li><Link className="headerlink" to="/Cart">Cart</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Log IN"
                ? serBtnName("Log Out")
                : serBtnName("Log IN");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
