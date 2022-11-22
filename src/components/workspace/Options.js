import { useEffect } from "react";

const Options = ({ updating, change, setUpdating, setDeleting }) => {
  useEffect(() => {
    const item = setInterval(() => {
      if (change) {
        setUpdating(true);
      }
    }, 20000);
    return () => clearInterval(item);
  }, [change]); //eslint-disable-line
  return (
    <div className="edit-options border-bottom">
      <select>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      <div className="right-btns">
        <button
          className="save-btn"
          onClick={(e) => {
            setUpdating(true);
          }}
        >
          {updating ? (
            <div className="loader margin-right"></div>
          ) : change ? (
            <i
              className="bi bi-circle-fill margin-right"
              style={{ color: "var(--yellow)" }}
            ></i>
          ) : (
            <i
              className="bi bi-circle-fill margin-right"
              style={{ color: "var(--green)" }}
            ></i>
          )}
          {updating ? "updating" : change ? "Save" : "Saved"}
        </button>
        <button
          className="delete-btn border-light"
          onClick={(e) => setDeleting(true)}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
};

export default Options;
