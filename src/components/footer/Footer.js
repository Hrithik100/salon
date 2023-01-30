import React from "react";
import "./footer.css";
import logoImage from "../../assets/ipsa-logo.png";
import logoText from "../../assets/ipsa-text.png";
import playStorImg from "../../assets/play-store.png";
import appleStorImg from "../../assets/apple-store.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <img className="headlogo" src={logoImage} alt="" />
        <img className="headtext" src={logoText} alt="" />
        <div className="bottom">
          <div className="circlebottom">
            <span>Get app</span>
            <img className="play-store" src={playStorImg} alt="" />
            <img className="apple-store" src={appleStorImg} alt="" />
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="item">
          <h1>About IPSA</h1>
          <span>Career</span>
          <span>Customer Support</span>
          <span>Blog</span>
          <span>Sitemap</span>
        </div>
        <div className="item">
          <h1>For Business</h1>
          <span>For partners</span>
          <span>Pricing</span>
          <span>Support</span>
        </div>
        <div className="item">
          <h1>For Business</h1>
          <span>Privacy policy</span>
          <span>Terms of service</span>
          <span>Terms of use</span>
        </div>
        <div className="item">
          <h1>Find us on social</h1>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Linkedin</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
