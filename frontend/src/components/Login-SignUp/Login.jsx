import React, { useEffect } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../redux/actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.user);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const loginUser = () => {
    if (!data.email || !data.password) {
      toast("Please fill in all the details");
      return;
    }
    try {
      dispatch(login(data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user) {
      toast("Logged in successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    if (error) {
      toast("Invalid credientials");
      dispatch(clearErrors());
    }
  }, [error, user]);
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
          <button onClick={loginUser}>Login</button>
          <p>
            New User? <NavLink to="/register">Register Now</NavLink>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
