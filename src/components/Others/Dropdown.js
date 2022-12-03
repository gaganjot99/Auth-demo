import { useEffect, useRef } from "react";

const Dropdown = ({ options, show, setShow, refBtn }) => {
  const ref = useRef(null);
  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !refBtn.current.contains(e.target)
    ) {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); //eslint-disable-line

  if (!show) {
    return null;
  }
  return (
    <div ref={ref} className="drop-menu">
      {options.map((ele, i) => {
        return (
          <button
            key={i}
            className="noborder full-width"
            onClick={(e) => ele.fun()}
          >
            {ele.title}
          </button>
        );
      })}
    </div>
  );
};

export default Dropdown;
