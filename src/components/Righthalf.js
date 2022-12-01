import Workspace from "./Workspace";
import Entries from "./Entries";
import { useState } from "react";
import ErrorBoundary from "./Others/ErrorBoundary";

const Righthalf = (props) => {
  const [selected, setSelected] = useState({
    created_on: new Date(),
    content: "",
    heading: "",
  });
  const [refresh, setRefresh] = useState(0);
  return (
    <div id="right-half" className={props.showList ? "" : "left-move"}>
      <ErrorBoundary>
        <Entries setSelected={setSelected} refresh={refresh} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Workspace
          selected={selected}
          showList={props.showList}
          setRefresh={setRefresh}
        />
      </ErrorBoundary>
    </div>
  );
};

export default Righthalf;
