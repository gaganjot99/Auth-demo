const Listitem = ({ heading, content, date, day, month, year }) => {
  return (
    <div className="list-item border-bottom">
      <div className="left-list-item">
        <h2 className="list-item-heading">{heading}</h2>
        <p className="list-item-p">{content}</p>
      </div>
      <div className="right-list-item">
        <h2 className="list-item-date">{date}</h2>
        <p className="list-item-month">
          {month + ", "}
          {day}
        </p>
        <p className="list-item-year">{year}</p>
      </div>
    </div>
  );
};

export default Listitem;
