import { useEffect, useState } from "react";

const time = new Date();

const Year = ({ setYear, year }) => {
  const [latest, setLatest] = useState(true);
  useEffect(() => {
    if (year < time.getFullYear()) {
      setLatest(false);
    } else {
      setLatest(true);
    }
  }, [year]);
  return (
    <div id="select-year">
      <button className="noborder" onClick={(e) => setYear(year - 1)}>
        <i className="bi bi-caret-left-fill"></i>
      </button>
      <h3 className="not-selected">{year - 1}</h3>
      <h2 className="selected-year">{year}</h2>
      <h3 className="not-selected">{year + 1}</h3>
      <button
        disabled={latest}
        className="noborder"
        onClick={(e) => setYear(year + 1)}
      >
        <i className="bi bi-caret-right-fill"></i>
      </button>
    </div>
  );
};

export default Year;
