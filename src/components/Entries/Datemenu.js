import { useEffect, useState } from "react";
import Year from "./Year";

const Datemenu = ({ setMonth, setYear, month, year, setMenu }) => {
  const [year1, setYear1] = useState(year);
  const handleMonth = (n) => {
    setMonth(n);
    setYear(year1);
    setMenu(false);
  };
  useEffect(() => {
    document.getElementsByClassName("month-btn")[
      month - 1
    ].style.backgroundColor = "var(--lightgray)";
  }, [month]);
  return (
    <div id="date-menu">
      <Year setYear={setYear1} year={year1} />
      <article id="month-art">
        <div className="month-btn" onClick={(e) => handleMonth(1)}>
          Jan
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(2)}>
          Feb
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(3)}>
          Mar
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(4)}>
          Apr
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(5)}>
          May
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(6)}>
          Jun
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(7)}>
          Jul
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(8)}>
          Aug
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(9)}>
          Sep
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(10)}>
          Oct
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(11)}>
          Nov
        </div>
        <div className="month-btn" onClick={(e) => handleMonth(12)}>
          Dec
        </div>
      </article>
    </div>
  );
};

export default Datemenu;
