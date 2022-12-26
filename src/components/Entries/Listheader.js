import Dates from "./Dates";

const body = {
  heading: "",
  content: "",
};

const Listheader = ({ setMonth, setYear, month, year, shiftEntry }) => {
  const addEnter = () => {
    let time = new Date();
    if (time.getMonth() + 1 !== month || time.getFullYear() !== year) {
      //console.log("addEnter");
      setMonth(time.getMonth() + 1);
      setYear(time.getFullYear());
    } else {
      shiftEntry(body);
    }
  };
  return (
    <div className="list-header border-bottom">
      <Dates setMonth={setMonth} setYear={setYear} month={month} year={year} />
      <button className="add-btn" onClick={(e) => addEnter()}>
        Add Entry <i className="bi bi-plus"></i>
      </button>
    </div>
  );
};

export default Listheader;
