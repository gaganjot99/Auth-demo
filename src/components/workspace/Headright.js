const Headright = ({ date, month, year, day, time }) => {
  return (
    <div>
      <div className="date-right">
        <h1>
          {date + " "}
          {month + " "}
          {day + ", "}
          {year + "  "}
          {time}
        </h1>
      </div>
    </div>
  );
};

export default Headright;
