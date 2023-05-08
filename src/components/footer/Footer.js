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
        <div className="leftlogo">
        <img className="headlogo" src={logoImage} alt="" />
        <img className="headtext" src={logoText} alt="" />
        </div>
        <div className="bottom">
          <div className="circlebottom">
            <span>Get app</span>
            <div className="appimg">
            <img className="play-store" src={playStorImg} alt="" />
            <img className="apple-store" src={appleStorImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="item">
          <div className="itemheading">
          <h1>About IPSA</h1>
          </div>
          <div className="itemsub">
          <span>Career</span>
          <span>Customer Support</span>
          <span>Blog</span>
          <span>Sitemap</span>
          </div>
        </div>
        <div className="item">
          <div className="itemheading">
          <h1>For Business</h1>
          </div>
          <div className="itemsub">
          <span>For partners</span>
          <span>Pricing</span>
          <span>Support</span>
          </div>
        </div>
        <div className="item">
          <div className="itemheading">
          <h1>For Business</h1>
          </div>
          <div className="itemsub">
          <span>Privacy policy</span>
          <span>Terms of service</span>
          <span>Terms of use</span>
          </div>
        </div>
        <div className="item">
          <div className="itemheading">
          <h1>Find us on social</h1>
          </div>
          <div className="itemsub">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Linkedin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
