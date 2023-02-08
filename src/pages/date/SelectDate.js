import React, { useEffect, useState } from "react";
import "./selectDate.css";
import DateMenu from "../../components/services/menu/datepicker/DateMenu";

import ServiceHeader from "../../components/services/serviceheader/ServiceHeader";

import Bottombar from "../../components/services/bottombar/Bottombar";
import {
  getNumberOfDaysInMonth,
  getSortedDays,
  range,
} from "../../components/services/menu/datepicker/data";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { monthNames } from "../../components/services/menu/datepicker/monthdaydata";
import { Link } from "react-router-dom";

import MainCart2 from "../../components/services/menu/cart/MainCart2";

const SelectDate = () => {
  const service = {
    name: "Select date",
  };

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
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState();

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const previousMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleSelection = (e) => {
    if (e.target.id === "day") {
      const selectedDateAttributes = new Date(
        currentYear,
        currentMonth,
        e.target.getAttribute("data-day")
      );
      setSelectedDate(selectedDateAttributes);
      // console.log(selectedDate);
    }
  };

  // let text = selectedDate.toString();

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("add"));
    if (selected) {
      setSelected(selected);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("date", JSON.stringify(selectedDate));
  }, [selectedDate]);
  return (
    <>
      <ServiceHeader myService={service} />
      <div className="selectdatecontainer">
        <div className="datemenucart">
          <div className="datecartleft">
            {/* <DateMenu /> */}
            <div className="datepickercontainer">
              <div className="dateheader">
                <ChevronLeftOutlined
                  onClick={previousMonth}
                  style={{ cursor: "pointer", marginRight: 10 }}
                />
                <p>
                  {monthNames[currentMonth]} {currentYear}
                </p>
                <ChevronRightOutlined
                  onClick={nextMonth}
                  style={{ cursor: "pointer", marginLeft: 10 }}
                />
              </div>
              <div className="daydatecontainer">
                <div className="daydateitems">
                  <div className="days">
                    {getSortedDays(currentYear, currentMonth).map((day) => (
                      <p>{day}</p>
                    ))}
                  </div>
                  <div className="date">
                    {range(
                      1,
                      getNumberOfDaysInMonth(currentYear, currentMonth) + 1
                    ).map((day) => (
                      <div
                        id="day"
                        data-day={day}
                        className={
                          selectedDate?.getTime() ===
                          new Date(currentYear, currentMonth, day).getTime()
                            ? "active1"
                            : ""
                        }
                        onClick={handleSelection}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menucartright">
            <MainCart2
              item={servicesmenu}
              selected={selected}
              selectedDate={selectedDate}
            />
          </div>
        </div>
      </div>
      <Bottombar
        item={servicesmenu}
        selected={selected}
        selectedDate={selectedDate}
      />
      <Link to={`/product/services/selectdate/selecttime`} className="link">
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

export default SelectDate;
