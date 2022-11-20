import Workspace from "./Workspace";
import Entries from "./Entries";

const Righthalf = (props) => {
  return (
    <div
      id="right-half"
      className={props.showList ? "" : "left-move"}
      //   style={{ left }}
    >
      <Entries />
      <Workspace showList={props.showList} />
    </div>
  );
};

export default Righthalf;
