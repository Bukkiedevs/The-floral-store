import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCartArrowDown,
} from "react-icons/fa";
import Homeproducts from "./home-products";
import "./home.css";
const Home = () => {
  //Product category
  const [newProduct, setNewProduct] = useState([""]);
  const [featuredProduct, setFeaturedProduct] = useState([""]);
  const [topProduct, setTopProduct] = useState([""]);

  //Trending Product
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
  //Product type
  useEffect(() => {
    productcategory();
  });
  const productcategory = () => {
    //New Product
    const newcategory = Homeproducts.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    //Featured Product
    const featuredcategory = Homeproducts.filter((x) => {
      return x.type === "featured";
    });
    setFeaturedProduct(featuredcategory);

    //Top product
    const topcategory = Homeproducts.filter((x) => {
      return x.type === "top-seller";
    });
    setTopProduct(topcategory);
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
                <button>Show More</button>
              </div>
            </div>
            <div className="right-box">
              <div className="right-container">
                <div className="testimonial">
                  <div className="head">
                    <h3>Our Reviews</h3>
                  </div>
                  <div className="detail">
                    <div className="img-box">
                      <img
                        src="images/agent-support.jpg"
                        alt="testimonial"
                      ></img>
                    </div>
                    <div className="info">
                      <h3>Linda Thernström</h3>
                      <h4>Florist</h4>
                      <p>
                        We have discovered that the flowers are freshly plunked
                        and moisten to our taste! Super cute.
                      </p>
                    </div>
                  </div>
                  <div className="newsletter">
                    <div className="head">
                      <h3>Newsletter</h3>
                    </div>
                    <div className="form">
                      <p>Join our mailing list</p>
                      <input
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                      ></input>
                      <button>Subscribe</button>
                      <div className="icon-box">
                        <div className="icon">
                          <FaFacebookF />
                        </div>
                        <div className="icon">
                          <FaTwitter />
                        </div>
                        <div className="icon">
                          <FaInstagram />
                        </div>
                        <div className="icon">
                          <FaYoutube />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="left-box">
              <div className="box">
                <img src="images/P9-.jpg" alt="banners"></img>
              </div>
              <div className="box">
                <img src="images/Multi-banner-2.avif" alt="banners"></img>
              </div>
            </div>
            <div className="right-box">
              <div className="top">
                <img src="images/Multi-banner1.png" alt="banners"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product-type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Products</h2>
              </div>
              {newProduct.map((curElm) => {
                return (
                  <>
                    <div className="product-box">
                      <div className="image-box">
                        <img src={curElm.image} alt=" "></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>SEK{curElm.price}</p>
                        <div className="icon">
                          <button>
                            {" "}
                            <FaEye />
                          </button>
                          <button>
                            {" "}
                            <FaHeart />
                          </button>
                          <button>
                            <FaCartArrowDown />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="box">
              <div className="header">
                <h2>Featured Products</h2>
              </div>
              {featuredProduct.map((curElm) => {
                return (
                  <>
                    <div className="product-box">
                      <div className="image-box">
                        <img src={curElm.image} alt=" "></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>SEK{curElm.price}</p>
                        <div className="icon">
                          <button>
                            {" "}
                            <FaEye />
                          </button>
                          <button>
                            {" "}
                            <FaHeart />
                          </button>
                          <button>
                            <FaCartArrowDown />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Products</h2>
              </div>
              {topProduct.map((curElm) => {
                return (
                  <>
                    <div className="product-box">
                      <div className="image-box">
                        <img src={curElm.image} alt=" "></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>SEK{curElm.price}</p>
                        <div className="icon">
                          <button>
                            {" "}
                            <FaEye />
                          </button>
                          <button>
                            {" "}
                            <FaHeart />
                          </button>
                          <button>
                            <FaCartArrowDown />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
