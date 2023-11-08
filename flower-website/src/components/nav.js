import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { BiSolidUser } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import "./nav.css";
const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
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
          {isAuthenticated ? (
            // Enabled when users are loggedin - Logout Button and users profile will be shown
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // Enabled when users are not logged in - Login button and users profile will be shown
            <div className="user">
              <div className="icon">
                <FiLogIn />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="last-header">
          <div className="user-profile">
            {
              //User profile will show here
              isAuthenticated ? (
                <>
                  <div className="icon">
                    <BiSolidUser />
                  </div>
                  <div className="info">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="icon">
                    <BiSolidUser />
                  </div>
                  <div className="info">
                    <p> Please Login</p>
                  </div>
                </>
              )
            }
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  {" "}
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/collection" className="link">
                  {" "}
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  {" "}
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  {" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p>Get SEK 350 off your first order</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
