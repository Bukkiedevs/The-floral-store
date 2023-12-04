import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";
import Homeproducts from "./home-products";
import "./home.css";
const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproducts);
  //Filter for trending product
  const filtercate = (x) => {
    const filterproduct = Homeproducts.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterproduct);
  };
  //All Trending Product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproducts);
  };
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
                  <h2 onClick={() => allTrendingProduct()}>Trending</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top-seller")}>Top-seller</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img-box">
                            <img src={curElm.image} alt=""></img>
                            <div className="icon">
                              <div className="icon-box">
                                <FaEye />
                              </div>
                              <div className="icon-box">
                                <FaHeart />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{curElm.Name}</h3>
                            <p>SEK{curElm.price}</p>
                            <button className="btn">Add to cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="container">
                <div className="testimonial">
                  <div className="head">
                    <h3>Our Reviews</h3>
                  </div>
                  <div className="detail">
                    <div className="img-box">
                      <img
                        src="images/customer-support.jpeg"
                        alt="testimonial"
                      ></img>
                    </div>
                    <div className="info">
                      <h3>Stephan robot</h3>
                      <h4>web designer</h4>
                      <p>
                        We have discovered that the flowers are freshly plunked
                        and moisten to our taste! Super cute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
