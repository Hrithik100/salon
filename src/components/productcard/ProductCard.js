import {
  LocationOnOutlined,
  SouthEastOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" />
        </div>
        <div className="content">
          <h3>{item.title}</h3>
          <span>
            <StarBorderOutlined />
            {item.rating}
          </span>
        </div>
        <div className="cat">
          <h2>{item.cat}</h2>
        </div>

        <div className="details">
          <p>
            <LocationOnOutlined
              style={{ color: "#B68300", position: "relative", right: 5 }}
            />
            {item.location}
          </p>
          <span>
            <SouthEastOutlined
              style={{ color: "#B68300", position: "relative", right: 5 }}
            />
            {item.distance}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
