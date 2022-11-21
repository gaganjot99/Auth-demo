import Workspace from "./Workspace";
import Entries from "./Entries";
import { useEffect, useState } from "react";

const Righthalf = (props) => {
  const [selected, setSelected] = useState({
    created_on: new Date(),
    content: "",
    heading: "",
  });
  return (
    <div id="right-half" className={props.showList ? "" : "left-move"}>
      <Entries setSelected={setSelected} />
      <Workspace selected={selected} showList={props.showList} />
    </div>
  );
};

export default Righthalf;
