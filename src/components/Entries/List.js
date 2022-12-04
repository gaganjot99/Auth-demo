import { useState } from "react";
import Loader from "../Others/Loader";
import Listitem from "./Listitem";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const List = ({ data, setSelected, status }) => {
  const [select, setSelect] = useState(0);

  if (status === "Loading") {
    return <Loader></Loader>;
  }

  return (
    <div>
      {data.length === 0 ? <h2 className="h2-large-light">{status}</h2> : null}
      {data.map((ele, i) => {
        let time = new Date(ele.created_on);
        let date = time.getDate();
        let month = months[time.getMonth()];
        let year = time.getFullYear();
        let day = days[time.getDay()];
        let key = i;
        return (
          <div
            key={key}
            className="list-item-wrap"
            onClick={(e) => {
              setSelected(ele);
              setSelect(i);
            }}
          >
            <Listitem
              heading={ele.heading}
              content={ele.content}
              date={date}
              month={month}
              year={year}
              day={day}
              selected={select === i ? true : false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default List;
