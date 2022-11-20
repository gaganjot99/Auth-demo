import List from "./Entries/List";
import Listheader from "./Entries/Listheader";

const Entries = (props) => {
  return (
    <div id="main-entries">
      <Listheader />
      <List />
    </div>
  );
};

export default Entries;
