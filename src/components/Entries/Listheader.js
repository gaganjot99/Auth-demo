import Date from "./Date";

const Listheader = (prop) => {
  return (
    <div className="list-header border-bottom">
      <Date />
      <button className="add-btn">
        Add Entry <i className="bi bi-plus"></i>
      </button>
    </div>
  );
};

export default Listheader;
