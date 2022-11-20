import Userinfo from "./Userinfo";

const Headright = ({ time }) => {
  return (
    <div className="head-right border-bottom">
      <div className="date-right">
        <h1 className="time-big">
          {time.date + " "}
          {time.month + " "}
          {time.day + ", "}
          {time.year + "  "}
          {time.time}
        </h1>
      </div>
      <Userinfo username="fafan" />
    </div>
  );
};

export default Headright;
