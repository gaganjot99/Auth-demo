import Userinfo from "./Userinfo";
import { useEffect, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Headright = ({ time }) => {
  const [timeStamp, setTimeStamp] = useState(new Date());
  useEffect(() => {
    setTimeStamp(new Date(time));
  }, [time]);
  return (
    <div className="head-right border-bottom">
      <div className="date-right">
        <h1 className="time-big">
          {timeStamp.getDate() + " "}
          {months[timeStamp.getMonth()] + " "}
          {days[timeStamp.getDay()] + ", "}
          {timeStamp.getFullYear() + "  "}
          {timeStamp.toLocaleTimeString()}
        </h1>
      </div>
      <Userinfo />
    </div>
  );
};

export default Headright;
