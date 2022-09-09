import { useEffect, useState } from "react";

const Signup = ({ setStatus }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [warnState, setWarnState] = useState(false);

  useEffect(() => {
    if (
      document.getElementById("email").checkValidity() &&
      username.length > 5 &&
      passVal(password)
    ) {
      document.getElementsByClassName("auth-btn")[0].disabled = false;
    } else {
      document.getElementsByClassName("auth-btn")[0].disabled = true;
    }
  }, [email, username, password, conPassword]);

  const passVal = (str) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      str
    );
  };

  useEffect(() => {
    if (!passVal(password) && password.length > 0) {
      document.getElementById("password").style.border = "2px solid var(--red)";
      document.getElementsByClassName("pwd-match-warn")[0].style.visibility =
        "visible";
    } else {
      document.getElementById("password").style.border =
        "2px solid var(--blue)";
      document.getElementsByClassName("pwd-match-warn")[0].style.visibility =
        "hidden";
    }
  }, [password]);

  useEffect(() => {
    if (conPassword !== password && conPassword.length > 0) {
      document.getElementById("confirm-password").style.border =
        "2px solid var(--red)";
    } else {
      document.getElementById("confirm-password").style.border =
        "2px solid var(--blue)";
    }
  }, [conPassword]);

  useEffect(() => {
    if (!warnState) {
      document.querySelectorAll(".form-warn").forEach((element) => {
        element.style.visibility = "hidden";
      });
    }
  }, [warnState]);

  const submitForm = () => {
    console.log("lsdjf");
    if (password !== conPassword) {
      document.getElementsByClassName("pwd-match-warn")[1].style.visibility =
        "visible";
      setWarnState(true);
      setTimeout(() => {
        setWarnState(false);
      }, 5000);
      return;
    }
    return false;
  };

  const togglePwdVisibility = (ele) => {
    const type = ele.getAttribute("type") === "password" ? "text" : "password";
    ele.setAttribute("type", type);
  };

  return (
    <div>
      <form
        className="main-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <h2>Sign up</h2>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your new username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <label htmlFor="password">Password</label>
        <div className="pass-div">
          <input
            id="password"
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <i
            className="bi bi-eye pass-eye"
            onClick={(e) => {
              togglePwdVisibility(document.getElementById("password"));
            }}
          ></i>
          <p className="pwd-match-warn form-warn">
            *Password must be atleast 8 characters long and contain atleast one
            alphabet, one number and one symbol
          </p>
        </div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <div className="pass-div">
          <input
            id="confirm-password"
            type="password"
            placeholder="Enter new password again"
            value={conPassword}
            onChange={(e) => {
              setConPassword(e.target.value);
            }}
          ></input>
          <i
            className="bi bi-eye pass-eye"
            onClick={(e) => {
              togglePwdVisibility(document.getElementById("confirm-password"));
            }}
          ></i>
          <p className="pwd-match-warn form-warn">
            **Confirm password doesn't match with the above password
          </p>
        </div>
        <button className="auth-btn" type="submit" disabled>
          Create Account
        </button>
      </form>
      <p className="toggle-p">
        Already have an account?&nbsp;
        <a
          href="#signup"
          onClick={(e) => {
            e.preventDefault();
            setStatus("login");
          }}
        >
          Log in
        </a>
      </p>
    </div>
  );
};

export default Signup;
