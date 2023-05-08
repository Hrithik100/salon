import React from "react";
import DiscoverCat from "../../components/discovercat/DiscoverCat";
import Slider from "../../components/slider/Slider";
import "./home.css";
import playStorImg from "../../assets/play-store.png";
import appleStorImg from "../../assets/apple-store.png";
import img2 from "../../assets/home-ipsa.png";
import img1 from "../../assets/spa-ipsa.png";
import Testimonial from "../../components/testimonial/Testimonial";
import img4 from "../../assets/Rectangle1.png";
import img3 from "../../assets/Rectangle2.png";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Slider />
        <DiscoverCat />
        {/* <div className="circle-glow"></div> */}
        <div className="ipsacontainer">
          <div className="ipsadownloadleft">
            <div className="ipsaavaliable">
              <div className="availableheading">
                <span>Available on</span>
              </div>
              <div className="appstoreicon">
                <img id="playstore" src={playStorImg} alt="" />
                <img id="applestore" src={appleStorImg} alt="" />
              </div>
            </div>
            <div className="ipsapara">
              <h1>Download the IPSA app</h1>
              <p>
                With just a few taps, you can find available time slots and
                schedule an appointment at a time that works for you.
              </p>
            </div>
          </div>
          <div className="ipsadownloadright">
            <img id="img1" src={img2} alt="" />
            <img id="img2" src={img1} alt="" />
          </div>
        </div>
        <div className="testimoni">
          <p>What people are saying about IPSA</p>
          <div className="testimonia">
            <Testimonial />
          </div>
        </div>
        <div className="business">
          <div className="businessleft">
            <div className="businessheading">
              <h1>IPSA for business</h1>
              <p>Supercharge your business for free.</p>
            </div>
            <div className="learn">
              <div className="circlelearn">
                <span>Learn More</span>
                <KeyboardArrowRightOutlined
                  style={{
                    color: "#E0E0E0",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="businessright">
            <div className="busimg">
              <img id="img3" src={img3} alt="" />
              <img id="img4" src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
