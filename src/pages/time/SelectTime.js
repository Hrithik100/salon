import { ChevronRightOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainCart3 from "../../components/services/menu/cart/MainCart3";
// import MainCart from '../../components/services/menu/MainCart'
import TimeCart from "../../components/services/menu/timecart/TimeCart";
import ServiceHeader from "../../components/services/serviceheader/ServiceHeader";
import "./selectTime.css";
const SelectTime = () => {
  const service = {
    name: "Select time",
  };

  const timelist = [
    {
      id: 1,
      timeavailable: "10:00 am",
    },
    {
      id: 2,
      timeavailable: "10:30 am",
    },
    {
      id: 3,
      timeavailable: "11:00 am",
    },
    {
      id: 4,
      timeavailable: "11:30 am",
    },
    {
      id: 5,
      timeavailable: "12:00 pm",
    },
    {
      id: 6,
      timeavailable: "12:30 pm",
    },
    {
      id: 7,
      timeavailable: "01:00 pm",
    },
    {
      id: 8,
      timeavailable: "01:30 pm",
    },
    {
      id: 9,
      timeavailable: "02:00 pm",
    },
    {
      id: 10,
      timeavailable: "02:30 pm",
    },
    {
      id: 11,
      timeavailable: "03:00 pm",
    },
    {
      id: 12,
      timeavailable: "03:30 pm",
    },
  ];

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

  const [selected, setSelected] = useState([]);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState([]);

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("add"));
    if (selected) {
      setSelected(selected);
    }
  }, []);

  useEffect(() => {
    const selectedDate = JSON.parse(localStorage.getItem("date"));
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(selectedTime));
  }, [selectedTime]);

  const handleItemSelection = (items) => {
    setSelectedTime(items);
  };

  return (
    <>
      <ServiceHeader myService={service} />
      <div className="selecttimecontainer">
        <div className="timemenucart">
          <div className="timecartleft">
            {timelist.map((items) => (
              <div className="timecontainer">
                <div
                  class="gridiitem"
                  key={items.id}
                  onClick={() => handleItemSelection(items)}
                >
                  <h1>
                    {items.timeavailable}
                    <ChevronRightOutlined
                      style={{ position: "relative", top: 10, left: "500px" }}
                    />
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="menucartright">
            <MainCart3
              item={servicesmenu}
              selected={selected}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
            />
          </div>
        </div>
      </div>
      <Link
        to={`/product/services/selectdate/selecttime/confirmation`}
        className="link"
      >
        <div className="bottombarbtn1">
          <div className="bottombarbtn2">
            <div className="bottombarbtntext2">
              <span>Next</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SelectTime;
