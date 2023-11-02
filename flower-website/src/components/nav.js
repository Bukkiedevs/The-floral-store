import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

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
            // Enabled when users are loggedin - Logout Button with users profile
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
            // Enabled whe users are not logged in - Login button
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
      </div>
    </>
  );
};
export default Nav;
