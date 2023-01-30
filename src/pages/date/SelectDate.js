import React from "react";
import "./selectDate.css";
import DateMenu from "../../components/services/menu/datepicker/DateMenu";

import ServiceHeader from "../../components/services/serviceheader/ServiceHeader";
import MainCart from "../../components/services/menu/MainCart";
import Bottombar from "../../components/services/bottombar/Bottombar";

const SelectDate = () => {
  const service = {
    name: "Select date",
  };
  return (
    <>
      <ServiceHeader myService={service} />
      <div className="selectdatecontainer">
        <div className="datemenucart">
          <div className="datecartleft">
            <DateMenu />
          </div>
          <div className="menucartright">
            <MainCart />
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default SelectDate;
