import React from "react";
import "./dropdownMenu.css";
import dryerImg from "../../assets/hair-dryer.png";
import faceImg from "../../assets/female-face.png";
import nailImg from "../../assets/manicure.png";
import hairImg from "../../assets/scissors.png";
import massageImg from "../../assets/massage.png";
import bodyImg from "../../assets/human-back.png";

const DropdownMenu = () => {
  return (
    <div class="grid-container">
      <div class="grid-item">
        Hair
        <img id="dryer" src={dryerImg} alt="" />
      </div>
      <div class="grid-item">
        Face
        <img id="face" src={faceImg} alt="" />
      </div>
      <div class="grid-item">
        Nails
        <img id="nails" src={nailImg} alt="" />
      </div>
      <div class="grid-item">
        Hair Removal
        <img id="removal" src={hairImg} alt="" />
      </div>
      <div class="grid-item">
        Massage
        <img id="massage" src={massageImg} alt="" />
      </div>
      <div class="grid-item">
        Body
        <img id="body-back" src={bodyImg} alt="" />
      </div>
    </div>
  );
};

export default DropdownMenu;
