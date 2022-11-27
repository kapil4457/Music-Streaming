import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [data, setData] = useState({});
  const [ConfirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="main_register">
      <div className="register_card">
        <h1>Register</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
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
          <input
            type="password"
            placeholder="Enter Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <div>
            <label htmlFor="">Select Profile Picture</label>
            <input
              type="file"
              onChange={(e) => setData({ ...data, avatar: e.target.value })}
            />
          </div>
        </div>
        <div className="submit">
          <button>Register</button>
          <p>
            Already a User? <NavLink to="/login">Login Now</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
