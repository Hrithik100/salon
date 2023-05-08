import React from "react";
import { NavLink } from "react-router-dom";
import "./dropdownItem.css";

const DropdownItem = () => {
  return (
    <div className="dropdownMenu">
      <div className="dropdownuser">
        <h3>USER</h3>
        <hr />
      </div>
      <ul className="dropdowns">
        <li>
          <NavLink className="linkItem">Profile</NavLink>
        </li>
        <li>
          <NavLink className="linkItem">Appointments</NavLink>
        </li>
        <li>
          <NavLink className="linkItem">Vouchers</NavLink>
        </li>
        <li>
          <NavLink className="linkItem">Membership</NavLink>
        </li>
        <li>
          <NavLink className="linkItem">Favourites</NavLink>
        </li>
        <li>
          <NavLink className="linkItem">Payment</NavLink>
        </li>
        <hr />
        <li>
          <NavLink className="linkItem">Download App</NavLink>
        </li>
        <li>
          <NavLink className="linkItem">Help</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropdownItem;
