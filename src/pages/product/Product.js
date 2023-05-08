import {
  AccessTimeOutlined,
  KeyboardArrowDownOutlined,
  LocationOnOutlined,
  SouthEastOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
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
    <>
      <Header />
      <div className="product">
        <div className="topdetails">
          <div className="leftdetails">
            <div className="cate">
              <h2>Salon</h2>
            </div>
            <div className="contentdetails">
              <h1>Daisy Salon</h1>
            </div>
            <div className="locationdetails">
              <div className="locationdetail">
                <LocationOnOutlined style={{ color: "#B68300" }} />
                <p>GS Rd, Christian Basti</p>
              </div>
              <div className="locationdistance">
                <SouthEastOutlined style={{ color: "#B68300" }} />
                <span>1 km away</span>
              </div>
              <div className="rat">
                <StarBorderOutlined style={{ color: "#B68300" }} />
                <span>4</span>
                <p>(312 reviews)</p>
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
              <div className="dotsco">{dots}</div>
            </div>
          </div>
          {/* <Link className="link" to="">
            <div className="arrowicon">
              <KeyboardArrowDownOutlined style={{ fontSize: 50 }} />
            </div>
          </Link> */}
        </div>
        <div className="mid">
          <div className="detailservice">
            <div className="detailheadingtop">
              <span className="shopname">Daisy Salon</span>
              <div className="detailservices">
                <span className="availableservice">12 services available</span>
                <Link className="link" to={`/product/services`}>
                  <div className="bookbtn1">
                    <div className="bookbtntext1">
                      <span>Book now</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="detailheadingbottom">
              <div className="detailheadingcontent">
                Looking for a salon that caters to both men and women? Look no
                further than Daisy Salon. Our team of stylists are experts at
                cutting and styling all types of hair, so whether you're in need
                of a new look or just a quick trim, we've got you covered. We
                offer a wide range of services including classic cuts, modern
                styles, and hair coloring. Book today and be ready to be wowed.
              </div>
              <div className="detailslocation">
                <div className="detaillocation">
                  <div className="locationame">
                    <LocationOnOutlined
                      style={{
                        color: "#B68300",
                      }}
                    />
                    <span>GS Rd, Christian Basti</span>
                  </div>
                  <div className="mapbtn">
                    <div className="mapbtn1">
                      <div className="bookbtntext1">
                        <span>Open map</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timedetails">
                  <div className="time">
                    <AccessTimeOutlined
                      style={{
                        color: "#B68300"
                      }}
                    />
                    <div className="timetable">
                      <span>
                      Open now 9:00 am - 8:00 pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vouchercontainer">
          <VoucherCard />
        </div>
        <div className="membercontainer">
          <MemberCard />
        </div>
        <div className="reviewcontainer">
          <h3>Reviews</h3>
          <Reviews />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
