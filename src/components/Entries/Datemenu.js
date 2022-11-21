import { useEffect, useState } from "react";
import Year from "./Year";

const Datemenu = ({ setMonth, setYear, month, year, setMenu }) => {
  const [year1, setYear1] = useState(year);
  const [validM, setValidM] = useState(12);
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

  useEffect(() => {
    if (new Date().getFullYear() === year1) {
      let month = new Date().getMonth() + 1;
      setValidM(month);
    }
  }, [year]);

  return (
    <div id="date-menu">
      <Year setYear={setYear1} year={year1} />
      <article id="month-art">
        <button
          disabled={1 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(1)}
        >
          Jan
        </button>
        <button
          disabled={2 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(2)}
        >
          Feb
        </button>
        <button
          disabled={3 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(3)}
        >
          Mar
        </button>
        <button
          disabled={4 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(4)}
        >
          Apr
        </button>
        <button
          disabled={5 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(5)}
        >
          May
        </button>
        <button
          disabled={6 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(6)}
        >
          Jun
        </button>
        <button
          disabled={7 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(7)}
        >
          Jul
        </button>
        <button
          disabled={8 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(8)}
        >
          Aug
        </button>
        <button
          disabled={9 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(9)}
        >
          Sep
        </button>
        <button
          disabled={10 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(10)}
        >
          Oct
        </button>
        <button
          disabled={11 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(11)}
        >
          Nov
        </button>
        <button
          disabled={12 > validM}
          className="month-btn"
          onClick={(e) => handleMonth(12)}
        >
          Dec
        </button>
      </article>
    </div>
  );
};

export default Datemenu;
