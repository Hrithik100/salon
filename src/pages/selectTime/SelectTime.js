import React, { useState } from "react";
// import "./selectDate.css";
import DateMenu from "../../components/services/menu/datepicker/DateMenu";

import ServiceHeader from "../../components/services/serviceheader/ServiceHeader";
import MainCart from "../../components/services/menu/MainCart";

const SelectDate = () => {
  const service = {
    name: "Select time",
  };
  return (
    <>
      <ServiceHeader myService={service} />
      <div className="selectdatecontainer">
        <div className="datemenucart">
          <div className="datecartleft">
            <DateMenu />
          </div>
          {/* <div className="menucartright">
            <MainCart />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SelectDate;
