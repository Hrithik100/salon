import React from "react";
import "./voucherCard.css";

const VoucherCard = () => {
  return (
    <div className="voucher">
      <div className="voucherheading">
        <h3>Vouchers</h3>
        <div className="cardcontainer">
          <div class="carditem">
            <h1>₹ 500</h1>
            <h3>Voucher Value</h3>
            <span>Details</span>
            <h2>Save 12%</h2>
          </div>
          <div class="carditem">
            <h1>₹ 500</h1>
            <h3>Voucher Value</h3>
            <span>Details</span>
            <h2>Save 12%</h2>
          </div>
          <div class="carditem">
            <h1>₹ 500</h1>
            <h3>Voucher Value</h3>
            <span>Details</span>
            <h2>Save 12%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherCard;
