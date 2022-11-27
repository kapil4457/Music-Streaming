import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [data, setData] = useState({});
  return (
    <div className="main_login">
      <div className="login_card">
        <h1>Login</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter your Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="submit">
          <button>Login</button>
          <p>
            New User? <NavLink to="/register">Register Now</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
