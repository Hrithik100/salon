import React from "react";
import "./confirmationCart.css";
import moment from "moment/moment";

const MainCart = ({ item, selected, selectedDate, selectedTime }) => {
  console.log(
    item.filter((o) => selected.includes(o.label)).map((o) => o.label)
  );

  const renderMenuItems = () => {
    return item
      .filter((o) => selected.includes(o.label))
      .map((o) => (
        <>
          <h1>{o.label}</h1>
          <span>₹{o.price}</span>
          <h2>{o.time}</h2>
          <hr />
        </>
      ));
  };

  const calculatePrice = item
    .filter((o) => selected.includes(o.label))
    .reduce((acc, obj) => {
      let price = Number(obj.price);
      return acc + price + 200;
    }, 0);

  const totalPrice = calculatePrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formatDate = () => moment(selectedDate).format("Do MMMM");

  return (
    <div className="maincartcard1">
      <div className="maincartcarditem">
        <div className="maincartImg">
          <img src="https://www.linkpicture.com/q/mask-group-4@2x.png" alt="" />
        </div>
        <div className="maincarttitle">
          <h1>Daisy Salon</h1>
          <h3>GS Rd, Christian Basti</h3>
          <hr />
        </div>
        <div className="addeditems">{renderMenuItems()}</div>
        <div className="totalamount">
          <div className="taxes">
            <h1>Taxes</h1>
            <span>₹ 200</span>
          </div>
          <div className="amount">
            <h1>Total</h1>
            <span>₹{totalPrice}</span>
          </div>
          <div className="timedate">
            <h1>{formatDate()}</h1>
            <div>
              <span>{selectedTime.timeavailable}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
