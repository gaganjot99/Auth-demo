import Headright from "./workspace/Headright";
import Options from "./workspace/Options";
import WritingSpace from "./workspace/Writingspace";

const time = {
  date: 23,
  month: "Jun",
  day: "Sat",
  year: "2022",
  time: "2:30 PM",
};

const Workspace = (props) => {
  return (
    <div id="main-workspace">
      <Headright time={time} />
      <Options />
      <WritingSpace showList={props.showList} />
    </div>
  );
};

export default Workspace;
