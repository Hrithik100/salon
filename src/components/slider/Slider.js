import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import DropdownLocation from "../dropdownitem/DropdownLocation";
import DropdownMenu from "../dropdownitem/DropdownMenu";
import "./slider.css";
import getImg from "../../assets/dashboard.png";

const Slider = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuLocation, setOpenMenuLocation] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  let locRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!locRef.current.contains(e.target)) {
        setOpenMenuLocation(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="container">
      <div className="scheduleText">
        <span>Schedule your appointment for beauty services.</span>
      </div>
      <div className="searchContainer">
        <div className="search">
          <div className="searchbox" ref={menuRef}>
            <i
              className="fa-solid fa-search"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpenMenu((prev) => !prev);
              }}
            ></i>
            <input
              className="input-card"
              type="text"
              placeholder="Search for services"
            />
            {openMenu && <DropdownMenu />}
          </div>
          <div className="locationbox" ref={locRef}>
            <i
              className="fa-sharp fa-solid fa-location-dot"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpenMenuLocation((prev) => !prev);
              }}
            ></i>
            <input className="input-card" type="text" placeholder="Location" />
            {openMenuLocation && <DropdownLocation />}
          </div>
          <button className="searchbtn">
              <span>Search</span>
              <KeyboardArrowRightOutlined
                style={{ fontSize:22, color: "#151515" }}
              />
          </button>
        </div>
      </div>
      <div className="circleglow1"></div>
      <div className="circleglow2"></div>
      <div className="circleglow3"></div>
      <div className="get-app">
        <img id="geticon" src={getImg} alt="" />
        <span className="getapp-text">Get App</span>
      </div>
    </div>
  );
};

export default Slider;
