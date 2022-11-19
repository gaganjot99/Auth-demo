const Year = ({ setYear, year }) => {
  return (
    <div id="select-year">
      <button className="noborder" onClick={(e) => setYear(year - 1)}>
        <i className="bi bi-caret-left-fill"></i>
      </button>
      <h3 className="not-selected">{year - 1}</h3>
      <h2 className="selected-year">{year}</h2>
      <h3 className="not-selected">{year + 1}</h3>
      <button className="noborder" onClick={(e) => setYear(year + 1)}>
        <i className="bi bi-caret-right-fill"></i>
      </button>
    </div>
  );
};

export default Year;
