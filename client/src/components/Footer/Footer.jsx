import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Men</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to our online clothing shop, where we are passionate about
            fashion and style. We believe that what you wear has the power to
            reflect your personality, boost your confidence, and make you feel
            your best. That's why we have created a platform that allows you to
            easily shop for high-quality, fashionable clothing that suits your
            unique style.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            At our online clothing shop, we offer a carefully curated selection
            of clothing for men and women. Our collection includes everything
            from casual wear to formal attire, with a focus on timeless styles
            that never go out of fashion. We believe in offering clothing that
            is not only stylish, but also comfortable and practical, so you can
            wear it with ease and confidence.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Flex</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img
            src={process.env.PUBLIC_URL + "/images/payments.png"}
            alt="payment options"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
