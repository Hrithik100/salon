import React from "react";
import { KeyboardArrowLeftOutlined } from "@mui/icons-material";
import "./serviceHeader.css";

const ServiceHeader = ({ myService }) => {
  const { name } = myService;

  return (
    <div className="servicesheader">
      <span>
        <KeyboardArrowLeftOutlined
          style={{ position: "relative", top: 2.5, fontSize: 45 }}
        />
        <p>{name}</p>
      </span>
    </div>
  );
};

export default ServiceHeader;
