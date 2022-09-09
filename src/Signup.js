const Signup = ({ setStatus }) => {
  return (
    <div>
      <form className="main-form">
        <h2>Sign up</h2>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" placeholder="Enter your email"></input>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your new username"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter new password"
        ></input>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          placeholder="Enter new password again"
        ></input>
        <button className="auth-btn" type="submit">
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
