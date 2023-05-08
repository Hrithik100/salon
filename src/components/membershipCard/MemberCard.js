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
            <div className="memberitemtop">
              <div className="membership">
                <AccessTimeOutlined />
                <h3>2 month membership</h3>
              </div>
              <div className="membershiptitle">
                <h1>Facial saver</h1>
              </div>
            </div>
            <div className="memberitembottom">
              <div className="membersession">
                <span>6 sessions</span>
              </div>
              <div className="memberprice">
                <span>1 service</span>
                <h2>₹ 6,500</h2>
              </div>
            </div>
          </div>
          <div className="memberitem">
            <div className="memberitemtop">
              <div className="membership">
                <AccessTimeOutlined />
                <h3>4 month membership</h3>
              </div>
              <div className="membershiptitle">
                <h1>Hair care saver</h1>
              </div>
            </div>
            <div className="memberitembottom">
              <div className="membersession">
                <span>6 sessions</span>
              </div>
              <div className="memberprice">
                <span>2 services</span>
                <h2>₹ 9,500</h2>
              </div>
            </div>
          </div>
          <div className="memberitem">
            <div className="memberitemtop">
              <div className="membership">
                <AccessTimeOutlined />
                <h3>6 month membership</h3>
              </div>
              <div className="membershiptitle">
                <h1>Hair care saver</h1>
              </div>
            </div>
            <div className="memberitembottom">
              <div className="membersession">
                <span>8 sessions</span>
              </div>
              <div className="memberprice">
                <span>3 services</span>
                <h2>₹ 13,500</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
