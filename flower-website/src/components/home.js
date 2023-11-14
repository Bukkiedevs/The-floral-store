import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="upper-banner">
          <div className="contact">
            <h3>Let the beauty of flowers brighten your day</h3>
            <h2>Gift boxes</h2>
            <p>SEK 350 off your first order</p>
            <Link to="/shop" className="link">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
