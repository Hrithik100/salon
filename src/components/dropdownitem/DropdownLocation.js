import React from "react";
import locationImg from "../../assets/location.png";
import "./dropdownLocation.css";

const DropdownLocation = () => {
  return (
    <div className="locationcontainer">
      <div className="flexcontainer">
        <img id="location" src={locationImg} alt="" />
        <span className="text">Current Location</span>
      </div>
    </div>
  );
};

export default DropdownLocation;
