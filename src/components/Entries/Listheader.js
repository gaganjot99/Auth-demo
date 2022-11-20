import Date from "./Date";

const Listheader = ({ setMonth, setYear, month, year }) => {
  return (
    <div className="list-header border-bottom">
      <Date setMonth={setMonth} setYear={setYear} month={month} year={year} />
      <button className="add-btn">
        Add Entry <i className="bi bi-plus"></i>
      </button>
    </div>
  );
};

export default Listheader;
