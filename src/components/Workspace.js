import { useEffect, useState } from "react";
import Headright from "./workspace/Headright";
import Options from "./workspace/Options";
import WritingSpace from "./workspace/Writingspace";

const Workspace = ({ selected, showList, setRefresh }) => {
  const [change, setChange] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [savedHeading, setSavedHeading] = useState(selected.heading);
  const [savedContent, setSavedContent] = useState(selected.content);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting) {
      return;
    }
    fetch("/data/deletenote/" + selected.note_id, { method: "delete" })
      .then((data) => data.json())
      .then((data) => {
        if (data.status === "success") {
          setDeleting(false);
          setRefresh((d) => d + 1);
        }
      })
      .catch((e) => console.log(e));
  }, [deleting]); //eslint-disable-line

  return (
    <div id="main-workspace">
      <Headright time={selected.created_on} />
      <Options
        change={change}
        updating={updating}
        setUpdating={setUpdating}
        setRefresh={setRefresh}
        setDeleting={setDeleting}
      />
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
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default Workspace;
