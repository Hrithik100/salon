import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import DropdownLocation from "../dropdownitem/DropdownLocation";
import DropdownMenu from "../dropdownitem/DropdownMenu";
import "./slider.css";
import getImg from "../../assets/dashboard.png"

const Slider = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [openMenuLocation, setOpenMenuLocation] = useState(false)
  return (
    <div className="container">
      <div className="schedule-text">
        <p>Schedule your appointment for beauty services.</p>
      </div>
      <div className="search-container">
        <div className="search">
          <i className="fa-solid fa-search" onClick={()=>{setOpenMenu((prev) => !prev)}}></i>
          <input
            className="input-card"
            type="text"
            placeholder="Search for services"
          />
          {openMenu && <DropdownMenu/>}
          <i class="fa-sharp fa-solid fa-location-dot" onClick={()=>{setOpenMenuLocation((prev) => !prev)}}></i>
          <input className="input-card" type="text" placeholder="Location" />
          {openMenuLocation && <DropdownLocation/>}
          <div className="search-btn">
            <div className="circle-mnu-text">
              <span>Search</span>
              <KeyboardArrowRightOutlined
                style={{ margin: 3.5, color: "#151515" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="get-app">
      <img id="geticon" src={getImg} alt="" />
        <span className="getapp-text">Get App</span>
      </div>
    </div>
  );
};

export default Slider;
