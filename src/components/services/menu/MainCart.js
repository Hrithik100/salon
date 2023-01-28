import React from "react";
import "./mainCart.css";

const MainCart = () => {
  return (
    <div className="maincartcard">
      <div className="maincartcarditem">
        <div className="maincartImg">
          <img src="https://www.linkpicture.com/q/mask-group-4@2x.png" alt="" />
        </div>
        <div className="maincarttitle">
          <h1>Daisy Salon</h1>
          <h3>GS Rd, Christian Basti</h3>
          <hr />
        </div>
        <div className="addeditems">
          <h1>Wash, Blow Dry + Style</h1>
          <span>₹ 3,400</span>
          <h2>2:45 hr</h2>
          <hr />
        </div>
        <div className="totalamount">
          <div className="taxes">
            <h1>Taxes</h1>
            <span>₹ 200</span>
          </div>
          <div className="amount">
            <h1>Total</h1>
            <span>₹ 3,600</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
