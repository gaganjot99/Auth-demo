import Workspace from "./Workspace";
import Entries from "./Entries";
import { useState } from "react";

const Righthalf = (props) => {
  const [selected, setSelected] = useState({
    created_on: new Date(),
    content: "",
    heading: "",
  });
  const [refresh, setRefresh] = useState(0);
  return (
    <div id="right-half" className={props.showList ? "" : "left-move"}>
      <Entries setSelected={setSelected} refresh={refresh} />
      <Workspace
        selected={selected}
        showList={props.showList}
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default Righthalf;
