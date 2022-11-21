import { useEffect, useState } from "react";

const Userinfo = () => {
  const [username, setUsername] = useState("");
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
      <i className="bi bi-three-dots-vertical"></i>
    </div>
  );
};

export default Userinfo;
