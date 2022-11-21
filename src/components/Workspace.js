import { useState } from "react";
import Headright from "./workspace/Headright";
import Options from "./workspace/Options";
import WritingSpace from "./workspace/Writingspace";

const Workspace = ({ selected, showList }) => {
  const [change, setChange] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [savedHeading, setSavedHeading] = useState(selected.heading);
  const [savedContent, setSavedContent] = useState(selected.content);

  return (
    <div id="main-workspace">
      <Headright time={selected.created_on} />
      <Options change={change} updating={updating} setUpdating={setUpdating} />
      <WritingSpace
        showList={showList}
        selected={selected}
        setChange={setChange}
        updating={updating}
        setUpdating={setUpdating}
        change={change}
        savedHeading={savedHeading}
        savedContent={savedContent}
        setSavedHeading={setSavedHeading}
        setSavedContent={setSavedContent}
      />
    </div>
  );
};

export default Workspace;
