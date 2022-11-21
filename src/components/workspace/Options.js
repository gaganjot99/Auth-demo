const Options = ({ updating, change, setUpdating }) => {
  return (
    <div className="edit-options border-bottom">
      <select>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
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
    </div>
  );
};

export default Options;
