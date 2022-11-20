import { useEffect, useState } from "react";
import List from "./Entries/List";
import Listheader from "./Entries/Listheader";

const dateNow = new Date();

const Entries = (props) => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState(dateNow.getMonth() + 1);
  const [year, setYear] = useState(dateNow.getFullYear());
  useEffect(() => {
    fetch("/data/notes/dated", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: year + "-" + month + "-1 00:00:00",
        upto: year + "-" + month + "-31 23:59:59",
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, [month, year]);
  return (
    <div id="main-entries">
      <Listheader
        setMonth={setMonth}
        setYear={setYear}
        month={month}
        year={year}
      />
      <List data={data} />
    </div>
  );
};

export default Entries;
