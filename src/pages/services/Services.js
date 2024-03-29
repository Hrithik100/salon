import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Bottombar from "../../components/services/bottombar/Bottombar";
import MainCart1 from "../../components/services/menu/cart/MainCart1";
import MenuCart from "../../components/services/menu/MenuCart";
import ServiceHeader from "../../components/services/serviceheader/ServiceHeader";
import "./services.css";

const Services = () => {
  const servicesmenu = [
    {
      id: 1,
      label: "Full Head Highlights",
      price: "3000",
      time: "2:45 hr",
      desc: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first.",
    },
    {
      id: 2,
      label: "Wash, Blow Dry + Style",
      price: "3400",
      time: "2:45 hr",
      desc: "A blow dry and styled with a hot tool to curl or straighten. When booking together with a colour service, please select your colour service first.",
    },
    {
      id: 3,
      label: "Gents - Wash, Cut  + Finish",
      price: "3100",
      time: "2:00 hr",
      desc: "A precision cut and finish.",
    },
    {
      id: 4,
      label: "Scalp Spa Treatment",
      price: "1700",
      time: "1:00 hr",
      desc: "Add this luxurious scalp spa experience to any Cut, Style or Colour Service.",
    },
  ];

  const service = {
    name: "Select services",
  };

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    localStorage.setItem("add", JSON.stringify(selected));
  }, [selected]);

  const handleChange = (e) => {
    const selectedoption = e.target.value;
    if (selected.includes(selectedoption)) {
      setSelected(selected.filter((item) => item !== selectedoption));
    } else {
      setSelected([...selected, selectedoption]);
    }
  };
  return (
    <div className="servicescontainer">
      <ServiceHeader myService={service} />
      <div className="menucart">
        <div className="menucartleft">
          {servicesmenu.map((item) => (
            <MenuCart
              item={item}
              key={item.id}
              selected={selected}
              handleChange={handleChange}
            />
          ))}
        </div>
        <div className="menucartright">
          <MainCart1 item={servicesmenu} selected={selected} />
        </div>
      </div>
      <Bottombar item={servicesmenu} selected={selected} />
      <Link to={`/product/services/selectdate`} className="link">
        <div className="bottombarbtnservice">
          <div className="bottombarbtnservice1">
            <div className="bottombarbtntextservice1">
              <span>Next</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Services;
