import { AccessTimeOutlined } from "@mui/icons-material";
import React from "react";
import "./memberCard.css";

const MemberCard = () => {
  return (
    <div className="member">
      <div className="memberheading">
        <h3>Membership</h3>
        <div className="membercontain">
          <div className="memberitem">
            <h3>
              <AccessTimeOutlined
                style={{ position: "relative", right: 17, top: 6 }}
              />
              2 month membership
            </h3>
            <h1>Facial saver</h1>
            <span>6 sessions</span>
            <span>1 service</span>
            <h2>₹ 6,500</h2>
          </div>
          <div className="memberitem">
            <h3>
              <AccessTimeOutlined
                style={{ position: "relative", right: 17, top: 6 }}
              />
              4 month membership
            </h3>
            <h1>Hair care saver</h1>
            <span>6 sessions</span>
            <span>2 service</span>
            <h2>₹ 9,500</h2>
          </div>
          <div className="memberitem">
            <h3>
              <AccessTimeOutlined
                style={{ position: "relative", right: 17, top: 6 }}
              />
              6 month membership
            </h3>
            <h1>Hair care saver</h1>
            <span>8 sessions</span>
            <span>3 service</span>
            <h2>₹ 13,500</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
