import React from "react";


import Bottombar from "../../components/services/bottombar/Bottombar";
import MainCart from "../../components/services/menu/MainCart";
import MenuCart from "../../components/services/menu/MenuCart";
import ServiceHeader from "../../components/services/serviceheader/ServiceHeader";
import "./services.css";

const Services = () => {
  const servicesmenu = [
    {
      id: 1,
      label: "Full Head Highlights",
      price: "₹ 3,000",
      time: "2:45 hr",
      desc: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first.",
    },
    {
      id: 2,
      label: "Wash, Blow Dry + Style",
      price: "₹ 3,400",
      time: "2:45 hr",
      desc: "A blow dry and styled with a hot tool to curl or straighten. When booking together with a colour service, please select your colour service first.",
    },
    {
      id: 3,
      label: "Gents - Wash, Cut  + Finish",
      price: "₹ 3,100",
      time: "2:00 hr",
      desc: "A precision cut and finish.",
    },
    {
      id: 4,
      label: "Scalp Spa Treatment",
      price: "₹ 1,700",
      time: "1:00 hr",
      desc: "Add this luxurious scalp spa experience to any Cut, Style or Colour Service.",
    },
  ];

  const service = {
    name: "Select services"
  }

  return (
    <div className="servicescontainer">
      <ServiceHeader myService ={service}/>
      <div className="menucart">
        <div className="menucartleft">
          {servicesmenu.map((item) => (
            <MenuCart item={item} key={item.id} />
          ))}
        </div>
        <div className="menucartright">
            <MainCart/>
        </div>
      </div>
      <Bottombar/>
    </div>
  );
};

export default Services;
