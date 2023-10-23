import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { FiLogIn } from "react-icons/fi";
import "./nav.css";
const Nav = () => {
  return (
    <>
      <div className="header">
        <div className="top-header">
          <div className="icon">
            <FaShippingFast />
          </div>
          <div className="info">
            <p>Next day delivery when you shop up to SEK 500</p>
          </div>
        </div>
        <div className="mid-header">
          <div className="logo">
            <img src="images/floral.logo.png" alt="logo"></img>
          </div>
          <div className="search-box">
            <input type="text" value="" placeholder="Search"></input>
            <button>
              {" "}
              <GrSearch />
            </button>
          </div>
          <div className="user">
            <div className="icon">
              <FiLogIn />
            </div>
            <div className="btn">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
