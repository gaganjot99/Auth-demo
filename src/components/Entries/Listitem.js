import { useEffect, useState } from "react";

const Listitem = ({ heading, content, date, day, month, year, selected }) => {
  const [cl, setCl] = useState("list-item border-bottom");
  useEffect(() => {
    selected
      ? setCl("list-item border-bottom selected")
      : setCl("list-item border-bottom");
  }, [selected]);
  return (
    <div className={cl}>
      <div className="left-list-item">
        <h2 className="list-item-heading">
          {heading.length > 15 ? heading.substring(0, 15) + "..." : heading}
        </h2>
        <p className="list-item-p">
          {content.length > 50 ? content.substring(0, 50) + "..." : content}
        </p>
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
