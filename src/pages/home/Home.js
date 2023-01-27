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

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <DiscoverCat />
      <div className="ipsacontainer">
        <div className="ipsaavaliable">
        <span>Available on</span>
        <img id="play-store" src={playStorImg} alt="" />
        <img id="apple-store" src={appleStorImg} alt="" />
        </div>
        <div className="ipsadownload">
        <h1>Download the IPSA app</h1>
        <p>
          With just a few taps, you can find available time slots and schedule
          an appointment at a time that works for you.
        </p>
        </div>
        <div className="dual-img">
          <img id="img1" src={img1} alt="" />
          <img id="img2" src={img2} alt="" />
        </div>
      </div>
      <div className="testimoni">
        <p>What people are saying about IPSA</p>
        <div className="testimonia">
        <Testimonial />
        </div>
        
      </div>
      <div className="business">
        <h1>IPSA for business</h1>
        <p>Supercharge your business for free.</p>
        <div className="learn">
          <div className="circlelearn">
            <span>Learn More</span>
            <KeyboardArrowRightOutlined
              style={{
                position: "relative",
                left: 100,
                bottom: 32,
                height: 40,
                color: "#E0E0E0",
              }}
            />
          </div>
        </div>
        <div className="busimg">
          <img id="img3" src={img3} alt="" />
          <img id="img4" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
