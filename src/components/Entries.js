import { useEffect, useState } from "react";
import List from "./Entries/List";
import Listheader from "./Entries/Listheader";

const dateNow = new Date();

const body = {
  heading: "",
  content: "",
};

const Entries = ({ setSelected }) => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState(dateNow.getMonth() + 1);
  const [year, setYear] = useState(dateNow.getFullYear());
  const shiftEntry = () => {
    fetch("/data/addnotes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((note) => {
        if (note.note_id) {
          setSelected(note);
          let arr = [...data];
          arr.unshift(note);
          setData(arr);
        }
      });
  };

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
        if (data.length === 0) {
          return;
        }
        setSelected(data[0]);
      });
  }, [month, year]); //eslint-disable-line
  return (
    <div id="main-entries">
      <Listheader
        setMonth={setMonth}
        setYear={setYear}
        month={month}
        year={year}
        shiftEntry={shiftEntry}
      />
      <List data={data} setSelected={setSelected} />
    </div>
  );
};

export default Entries;
