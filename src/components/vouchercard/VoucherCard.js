import React from "react";
import "./voucherCard.css";

const VoucherCard = () => {
  return (
    <div className="voucher">
      <div className="voucherheading">
        <h3>Vouchers</h3>
        <div className="cardcontainer">
          <div className="carditem">
            <div className="carditemtop">
              <h1>₹ 500</h1>
              <h3>Voucher Value</h3>
            </div>
            <div className="carditembottom">
              <span>Details</span>
              <h2>Save 12%</h2>
            </div>
          </div>
          <div className="carditem">
            <div className="carditemtop">
              <h1>₹ 500</h1>
              <h3>Voucher Value</h3>
            </div>
            <div className="carditembottom">
              <span>Details</span>
              <h2>Save 12%</h2>
            </div>
          </div>
          <div className="carditem">
            <div className="carditemtop">
              <h1>₹ 500</h1>
              <h3>Voucher Value</h3>
            </div>
            <div className="carditembottom">
              <span>Details</span>
              <h2>Save 12%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherCard;
