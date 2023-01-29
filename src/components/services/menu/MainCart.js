import React from "react";
import "./mainCart.css";

const MainCart = ({ item, selected }) => {
  console.log(
    item.filter((o) => selected.includes(o.label)).map((o) => o.label)
  );

  const renderMenuItems = () => {
    return item
      .filter((o) => selected.includes(o.label))
      .map((o) => (
        <>
          <h1>{o.label}</h1>
          <span>{o.price}</span>
          <h2>{o.time}</h2>
          <hr />
        </>
      ));
  };

 const calculatePrice = item.reduce((acc,obj)=>{
  return acc + obj.price
 },0)
 console.log(calculatePrice)

//  const calculatePrice = () => {
//   return item.reduce
//  }

 const totalPrice = calculatePrice

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
        <div className="addeditems">{renderMenuItems()}</div>
        <div className="totalamount">
          <div className="taxes">
            <h1>Taxes</h1>
            <span>₹ 200</span>
          </div>
          <div className="amount">
            <h1>Total</h1>
            <span>{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
