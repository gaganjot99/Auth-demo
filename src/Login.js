import { useEffect, useState } from "react";

const Login = ({ navigate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (
      document.getElementById("username").value.length >= 5 &&
      document.getElementById("password").value.length >= 8
    ) {
      document.getElementsByClassName("auth-btn")[0].disabled = false;
    } else {
      document.getElementsByClassName("auth-btn")[0].disabled = true;
    }
  }, [username, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/login/password", {
      method: "POST",
      mode: "same-origin",
      body: new URLSearchParams(new FormData(event.target)),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.id) {
          console.log(data);
          console.log("userID: ", data.id);
          return (window.location.href = "/");
        }
        console.log("Wrong password");
      });
  };

  return (
    <div id="main-body">
      <form
        className="main-form"
        action="/api/login/password"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
        <h2>Log in</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          minLength={8}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="auth-btn" type="submit" disabled>
          Log in
        </button>
      </form>
      <p className="toggle-p">
        Don't have an account?&nbsp;
        <a
          href="#signup"
          onClick={(event) => {
            event.preventDefault();
            navigate("/signup");
          }}
        >
          Create one
        </a>
      </p>
    </div>
  );
};

export default Login;
