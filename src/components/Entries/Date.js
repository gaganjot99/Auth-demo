import { useEffect, useState } from "react";
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

const Date = (props) => {
  const [menu, setMenu] = useState(false);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2022);
  useEffect(() => {
    setMenu(false);
  }, [month]);
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
        />
      ) : null}
      <div id="date-arr">
        <button className="single-btn">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="single-btn" style={{ marginLeft: "-1px" }}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Date;
