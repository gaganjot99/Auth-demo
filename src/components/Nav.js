import { useState } from "react";

const Navicon = (props) => {
  const [color, setColor] = useState("var(--blue)");
  const toggleCheck = () => {
    if (props.showList) {
      setColor("var(--black)");
    } else {
      setColor("var(--blue)");
    }
    props.setShowList(!props.showList);
  };
  return (
    <div id="side-nav">
      <button className="noborder medium-text full-width" onClick={toggleCheck}>
        <i style={{ color }} className="bi bi-list-nested"></i>
      </button>
    </div>
  );
};

export default Navicon;
