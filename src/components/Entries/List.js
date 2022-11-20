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

const List = ({ data }) => {
  return (
    <div>
      {data.map((ele) => {
        let time = new Date(ele.created_on);
        let date = time.getDate();
        let month = months[time.getMonth()];
        let year = time.getFullYear();
        let day = days[time.getDay()];
        let key = time.getTime();
        return (
          <Listitem
            heading={ele.heading}
            content={ele.content}
            date={date}
            month={month}
            year={year}
            day={day}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default List;
