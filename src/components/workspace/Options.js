import { useEffect, useState } from "react";
import Portal from "../Others/Portal";

const Options = ({ updating, change, setUpdating, setDeleting, setFont }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const item = setInterval(() => {
      if (change) {
        setUpdating(true);
      }
    }, 20000);
    return () => clearInterval(item);
  }, [change]); //eslint-disable-line
  const selectHandle = (e) => {
    console.log(e.target.value, "ehlo");
    setFont(e.target.value);
  };
  return (
    <div className="edit-options border-bottom">
      <select onChange={(e) => selectHandle(e)}>
        <option value={1}>Small</option>
        <option value={1.5}>Medium</option>
        <option value={2}>Large</option>
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
          onClick={(e) => setShow((v) => !v)}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
      {show && (
        <Portal>
          <div className="portal-main">
            <div className="delete-portal">
              <button onClick={() => setShow(false)}>CLOSE</button>
              <div className="del-dialog">
                <h1>Are you sure, you want to delete this entry?</h1>
                <div className="del-btns">
                  <button
                    onClick={(e) => {
                      setDeleting(true);
                      setShow(false);
                    }}
                  >
                    yes
                  </button>
                  <button onClick={(e) => setShow(false)}>no</button>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Options;
