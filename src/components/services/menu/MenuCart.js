import {
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";
import "./menuCart.css";

const MenuCart = ({item}) => {
  return (
    <div className="menucard">
      <div className="menucarditems">
        <div className="menucarditem">
          <FormControlLabel
            value="Full Head Highlights"
            control={<Radio  style={{color:"#E8CC2C"}}/>}
          />
          <div className="menucontentdetail">
          <h1>{item.label}</h1>
          <span>{item.price}</span>
          <h2>{item.time}</h2>
          <p>
         {item.desc}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCart;
