import { ChevronRightOutlined } from "@mui/icons-material";
import React from "react";
import "./timeCart.css";

const TimeCart = ({ item, handleChange, selectedTime }) => {
  return (
    <div className="timecontainer">
      <div
        class="gridiitem"
        onClick={handleChange}
        checked={selectedTime.includes(item.time)}
      >
        <h1>
          {item.time}
          <ChevronRightOutlined
            style={{ position: "relative", top: 10, left: "500px" }}
          />
        </h1>
      </div>
    </div>
  );
};

export default TimeCart;
