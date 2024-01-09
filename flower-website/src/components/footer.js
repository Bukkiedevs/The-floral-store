import React from "react";
import "./footer.css";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className=" footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon-box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Great Saving</h3>
                <p>Using this could help you get discounts on our products</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-box">
                <FaShippingFast />
              </div>
              <div className="detail">
                <h3>Free Delivery</h3>
                <p>Shop over SEK 500 for free delivery</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-box">
                <FaHeadphonesAlt />
              </div>
              <div className="detail">
                <h3>24/7 Support</h3>
                <p>Not sure of how to order? We are here to help</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-box">
                <FaWallet />
              </div>
              <div className="detail">
                <h3>Money back</h3>
                <p>Guranntedd cash back when you return after two days</p>
              </div>
            </div>
          </div>
          <div className="right-box"></div>
        </div>
      </div>
    </>
  );
};
export default Footer;
