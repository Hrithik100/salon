import React, { useEffect, useState } from "react";
import ConfirmationCart from "../../components/services/menu/confirmationCart/ConfirmationCart";
import ServiceHeader from "../../components/services/serviceheader/ServiceHeader";
import "./confirmation.css";

const Confirmation = () => {
  const service = {
    name: "Confirmation",
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
    const selectedTime = JSON.parse(localStorage.getItem("time"));
    if (selectedTime) {
      setSelectedTime(selectedTime);
    }
  }, []);

  return (
    <>
      <ServiceHeader myService={service} />
      <div className="confirmationcontainer">
        <div className="confirmationcart">
          <ConfirmationCart
            item={servicesmenu}
            selected={selected}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        </div>
        <div className="bottombarbtnnew">
          <div className="bottombarbtnnew1">
            <div className="bottombarbtntextnew">
              <span>Confirm</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
