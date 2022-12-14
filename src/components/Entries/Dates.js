import { useState } from "react";
import Datemenu from "./Datemenu";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Dates = ({ setMonth, setYear, year, month }) => {
  const [menu, setMenu] = useState(false);

  const leftBtnHandle = (e) => {
    if (month === 1) {
      setMonth(12);
      setYear((d) => d - 1);
    } else {
      setMonth((d) => d - 1);
    }
  };

  const rightBtnHandle = (e) => {
    const curYear = new Date().getFullYear();
    const curMonth = new Date().getMonth() + 1;
    console.log(curYear, curMonth);
    if (month === curMonth && year === curYear) {
      return;
    }
    if (month === 12) {
      if (year === curYear) {
        return;
      } else {
        setMonth(1);
        setYear((d) => d + 1);
      }
    } else {
      setMonth((d) => d + 1);
    }
  };

  return (
    <div id="date-div">
      <button className="noborder nrm-btn" onClick={(e) => setMenu(!menu)}>
        {months[month - 1]} {year}
        {menu ? (
          <i className="bi bi-chevron-up left-spc"></i>
        ) : (
          <i className="bi bi-chevron-down left-spc"></i>
        )}
      </button>
      {menu ? (
        <Datemenu
          setYear={setYear}
          setMonth={setMonth}
          month={month}
          year={year}
          setMenu={setMenu}
        />
      ) : null}
      <div id="date-arr">
        <button className="single-btn" onClick={leftBtnHandle}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          className="single-btn"
          onClick={rightBtnHandle}
          style={{ marginLeft: "-1px" }}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Dates;
