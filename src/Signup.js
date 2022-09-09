const Signup = ({ setStatus }) => {
  return (
    <div>
      <form>
        <h2>Sign up</h2>
        <label for="email">E-mail</label>
        <input id="email" type="email" placeholder="Enter your email"></input>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your new username"
        ></input>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter new password"
        ></input>
        <label for="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          placeholder="Enter new password again"
        ></input>
        <button type="submit">Create Account</button>
      </form>
      <p>
        Already have an account?
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
