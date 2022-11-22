import { useEffect, useState } from "react";

const Userinfo = () => {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("/data/user")
      .then((data) => data.json())
      .then((data) => {
        setUsername(data.username);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="user-right">
      <h1>{username}</h1>
      <button className="noborder" onClick={(e) => setShow((i) => !i)}>
        <i className="bi bi-three-dots-vertical"></i>
      </button>
      {show ? (
        <div className="drop-menu">
          <button
            className="noborder"
            onClick={(e) => {
              window.location.href = "/logout";
            }}
          >
            Log out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Userinfo;
