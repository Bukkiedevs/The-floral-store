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
        <div className="trending">
          <div className="container">
            <div className="left-box">
              <div className="header">
                <div className="heading">
                  <h2>Trending product</h2>
                </div>
                <div className="cate">
                  <h3>New</h3>
                  <h3>Featured</h3>
                  <h3>Top-seller</h3>
                </div>
              </div>
            </div>
            <div className="right-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
