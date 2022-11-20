import { useState } from "react";
import Listitem from "./Listitem";

const tempdata = [
  {
    heading: "Je suis fou",
    content: "Prenez mon idee que tu es tres fou",
    date: 20,
    month: "Nov",
    year: 2022,
    day: "Tue",
  },
  {
    heading: "Je suis grand",
    content: "Prenez mon idee que tu tres petit",
    date: 12,
    month: "Jun",
    year: 2022,
    day: "Fri",
  },
];

const List = (props) => {
  const [data, setData] = useState(tempdata);
  return (
    <div>
      {data.map((ele) => {
        return (
          <Listitem
            heading={ele.heading}
            content={ele.content}
            date={ele.date}
            month={ele.month}
            year={ele.year}
            day={ele.day}
            key={ele.content}
          />
        );
      })}
    </div>
  );
};

export default List;
