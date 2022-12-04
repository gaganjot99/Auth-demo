import { useEffect, useState } from "react";
import List from "./Entries/List";
import Listheader from "./Entries/Listheader";
import ErrorBoundary from "./Others/ErrorBoundary";

const dateNow = new Date();

const body = {
  heading: "",
  content: "",
};

const Entries = ({ setSelected, refresh, setRefresh }) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("Loading");
  const [month, setMonth] = useState(dateNow.getMonth() + 1);
  const [year, setYear] = useState(dateNow.getFullYear());
  const shiftEntry = () => {
    //console.log("shiftEntry");
    fetch("/data/addnotes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (data) => {
        try {
          return await data.json();
        } catch {
          return setStatus("Some error occured While adding");
        }
      })
      .then((note) => {
        console.log(note);
        if (note.note_id) {
          setSelected(note);
          let arr = [...data];
          arr.unshift(note);
          setData(arr);
        }
      });
  };

  useEffect(() => {
    setStatus("Loading");
    fetch("/data/notes/dated", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: year + "-" + month + "-0 00:00:00",
        upto: year + "-" + month + "-31 23:59:59",
      }),
    })
      .then(async (data) => {
        try {
          const newData = await data.json();
          if (newData.data.length === 0) {
            setStatus("No Entries");
          } else {
            setStatus("Loaded");
          }
          return newData;
        } catch (e) {
          setStatus("Some Error occured");
          //console.log(e);
          return { data: [] };
        }
      })
      .then((data) => {
        console.log(data);
        const newData = data.data;
        if (!data) {
          return;
        }
        setData(newData);
        if (newData.length === 0) {
          return;
        }

        setSelected((d) => {
          if (d.note_id) {
            return d;
          }
          return newData[0];
        });
      });
  }, [month, year, refresh]); //eslint-disable-line

  return (
    <div id="main-entries">
      <ErrorBoundary>
        <Listheader
          setMonth={setMonth}
          setYear={setYear}
          month={month}
          year={year}
          shiftEntry={shiftEntry}
        />
        <List data={data} setSelected={setSelected} status={status} />
      </ErrorBoundary>
    </div>
  );
};

export default Entries;
