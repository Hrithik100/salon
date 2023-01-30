import React from "react";
import { NavLink } from "react-router-dom";
import "./dropdownItem.css";

const DropdownItem = () => {
  return (
    <div className="dropdownmenu">
      <div className="dropdownuser">
        <h3>USER</h3>
        <hr />
      </div>

      <ul className="dropdown">
        <li>
          <NavLink className="links">Profile</NavLink>
        </li>
        <li>
          <NavLink className="links">Appointments</NavLink>
        </li>
        <li>
          <NavLink className="links">Vouchers</NavLink>
        </li>
        <li>
          <NavLink className="links">Membership</NavLink>
        </li>
        <li>
          <NavLink className="links">Favourites</NavLink>
        </li>
        <li>
          <NavLink className="links">Payment</NavLink>
        </li>
        <hr />
        <li>
          <NavLink className="links">Download App</NavLink>
        </li>
        <li>
          <NavLink className="links">Help</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropdownItem;
