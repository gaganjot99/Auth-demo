import { useEffect, useState } from "react";

const Login = ({ setStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (
      document.getElementById("email").checkValidity() &&
      document.getElementById("password").value.length > 8
    ) {
      document.getElementsByClassName("auth-btn")[0].disabled = false;
    } else {
      document.getElementsByClassName("auth-btn")[0].disabled = true;
    }
  }, [email, password]);

  return (
    <div>
      <form className="main-form" action="/login/password" method="post">
        <h2>Log in</h2>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="username"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
          onClick={(e) => {
            e.preventDefault();
            setStatus("signup");
          }}
        >
          Create one
        </a>
      </p>
    </div>
  );
};

export default Login;
