const Login = ({ setStatus }) => {
  return (
    <div>
      <form>
        <h2>Log in</h2>
        <label for="email">E-mail</label>
        <input id="email" type="email" placeholder="Enter your email"></input>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        ></input>
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account?
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
