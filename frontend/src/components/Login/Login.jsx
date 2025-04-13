// ./components/Login/Login.jsx
import React from "react";
import "../../styles/style.css"; // Update path if needed

const Login = () => {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      {/* Sign Up Form */}
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>

          <input type="text" name="username" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="address" placeholder="Address" required />
          <input type="text" name="location" placeholder="Location" required />
          <input type="password" name="password" placeholder="Password" required />

          <button type="submit">Sign up</button>
        </form>
      </div>

      {/* Login Form */}
      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>

          <input type="text" name="username" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

