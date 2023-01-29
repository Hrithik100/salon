import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { getNumberOfDaysInMonth, getSortedDays, range } from "./data";
import "./dateMenu.css";
import { monthNames } from "./monthdaydata";

const DateMenu = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

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

  const handleSelection = (e) =>{
    
    if(e.target.id === "day"){
        setSelectedDate(
            new Date(currentYear, currentMonth, e.target.getAttribute("data-day"))
        )
        console.log(selectedDate)
    }
  }

  return (
    <div className="datepickercontainer">
      <div className="dateheader">
        <ChevronLeftOutlined
          onClick={previousMonth}
          style={{ cursor: "pointer", marginRight: 10 }}
        />
        <p>{monthNames[currentMonth]} {currentYear}</p>
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
          <div className="date" >
            {range(
              1,
              getNumberOfDaysInMonth(currentYear, currentMonth) + 1
            ).map((day) => (
              <div
                id="day"
                data-day={day}
                className={
                  selectedDate?.getTime ===
                  new Date(currentYear, currentMonth, day).getTime()
                    ? "active"
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
  );
};

export default DateMenu;
