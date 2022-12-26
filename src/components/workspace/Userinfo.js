import { useEffect, useRef, useState } from "react";
import Dropdown from "../Others/Dropdown";

const Userinfo = () => {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow((i) => !i);
  };

  useEffect(() => {
    fetch("/api/data/user")
      .then((data) => data.json())
      .then((data) => {
        setUsername(data.username);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="user-right">
      <h1>{username}</h1>
      <button
        className="noborder dot-btn"
        onMouseDown={handleClick}
        ref={ref}
        style={show ? { backgroundColor: "var(--lightgray)" } : {}}
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>
      <Dropdown
        show={show}
        setShow={setShow}
        options={[
          {
            title: "Logout",
            fun: () => (window.location.href = "/api/logout"),
          },
        ]}
        refBtn={ref}
      />
    </div>
  );
};

export default Userinfo;
