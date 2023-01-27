import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import React from "react";
import "./showMore.css"

const ShowMore = () => {
  return (
    <div className="showMore-button">
      <div className="showMore-text">
        <span>Show more</span>
        <KeyboardArrowDownOutlined
          style={{ color: "#B68300",position:"relative",top:2}}
        />
      </div>
    </div>
  );
};

export default ShowMore;
