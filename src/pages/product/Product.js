import {
  AccessTimeOutlined,
  KeyboardArrowDownOutlined,
  LocationOnOutlined,
  SouthEastOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MemberCard from "../../components/membershipCard/MemberCard";
import Reviews from "../../components/reviews/Reviews";
import VoucherCard from "../../components/vouchercard/VoucherCard";
import "./product.css";

const Product = () => {
  const testimage = [
    {
      img: "https://www.linkpicture.com/q/mask.png",
    },
    {
      img: "https://www.linkpicture.com/q/pexels-delbeautybox-705255.png",
    },
    {
      img: "https://www.linkpicture.com/q/pexels-photo-7750098.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimage.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, testimage.length]);

  const dots = testimage.map((_, index) => (
    <div
      key={index}
      onClick={() => handleDotClick(index)}
      className={`dot ${currentIndex === index ? "active" : ""}`}
    />
  ));

  return (
    <div className="product">
      <div className="topdetails">
        <div className="leftdetails">
          <div className="cate">
            <h2>Salon</h2>
          </div>
          <div className="contentdetails">
            <h3>Daisy Salon</h3>
          </div>
          <div className="locationdetails">
            <p>
              <LocationOnOutlined
                style={{ color: "#B68300", position: "relative", right: 5 }}
              />
              GS Rd, Christian Basti
            </p>
            <span>
              <SouthEastOutlined
                style={{ color: "#B68300", position: "relative", right: 5 }}
              />
              1 km away
            </span>
            <div className="rat">
              <span>
                <StarBorderOutlined
                  style={{ color: "#B68300", position: "relative", right: 4 }}
                />
                4<p>(312 reviews)</p>
              </span>
            </div>
            <Link className="link" to={`/product/services`}>
            <div className="bookbtncontain">
              <div className="bookbtn">
                <div className="bookbtntext">
                  <span>Book now</span>
                </div>
              </div>
            </div>
            </Link>
            
          </div>
        </div>
        <div className="rightdetails">
          <div className="mainImg">
            <img id="testimage" src={testimage[currentIndex].img} alt="" />
            <div className="dotscon">{dots}</div>
          </div>
        </div>
        <div className="arrowicon">
          <KeyboardArrowDownOutlined style={{ fontSize: 50 }} />
        </div>
      </div>
      <div className="mid">
        <div className="detailservice">
          <div className="detailheading">
          <span className="shopname">Daisy Salon</span>
          <span className="availableservice">12 services available</span>
          <div className="bookbtn1">
            <div className="bookbtntext1">
              <span>Book now</span>
            </div>
          </div>
          </div>
          
          <div class="grid-conta">
            <div class="grid-content1">
              Looking for a salon that caters to both men and women? Look no
              further than Daisy Salon. Our team of stylists are experts at
              cutting and styling all types of hair, so whether you're in need
              of a new look or just a quick trim, we've got you covered. We
              offer a wide range of services including classic cuts, modern
              styles, and hair coloring. Book today and be ready to be wowed.
            </div>

            <div class="grid-gr">
              <div className="locationdetails">
                <span>
                  <LocationOnOutlined
                    style={{
                      color: "#B68300",
                      position: "relative",
                      right: 10,
                    }}
                  />
                  GS Rd, Christian Basti
                </span>
                <div className="mapbtn">
                  <div className="mapbtn1">
                    <div className="bookbtntext1">
                      <span>Open map</span>
                    </div>
                  </div>
                </div>
                <div className="timedetails">
                  <div className="time">
                    <AccessTimeOutlined
                      style={{
                        color: "#B68300",
                        position: "relative",
                        right: 14,
                        fontSize: 22,
                      }}
                    />
                    Open now 9:00 am - 8:00 pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vouchercontainer">
            <VoucherCard/>
        </div>
        <div className="membercontainer">
          <MemberCard/>
        </div>
        <div className="reviewcontainer">
        <h3>Reviews</h3>
        <Reviews/>
        </div>
    </div>
  );
};

export default Product;
