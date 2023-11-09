import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="upper-banner">
          <div className="contant">
            <h3>
              Colors: Red (love), White (purity), Yellow (friendship), Pink
              (gratitude).{" "}
            </h3>
            <h2>Rose</h2>
            <p>SEK 350 off your first order</p>
            <Link>Buy Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
