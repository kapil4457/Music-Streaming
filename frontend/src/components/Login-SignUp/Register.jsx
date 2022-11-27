import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearErrors, registerUser } from "../../redux/actions/userAction";
import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFiles] = useState(null);
  const [user, setUser] = useState({});
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const { error } = useSelector((state) => state.user);
  const handleFile = (e) => {
    const files = Array.from(e.target.files);

    setFiles([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFiles((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const registerTrigger = async () => {
    try {
      if (user.password != ConfirmPassword) {
        toast("Passwords do not match");
        return;
      }

      if (!user.name || !user.email || !user.password) {
        toast("Please fill in all the details");
        return;
      }
      if (!file) {
        toast("Please select an image");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "user_avatar");

      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/ds82kuoet/image/upload",
        formData
      );
      toast("Please Wait...");
      setTimeout(() => {
        let thisData = {
          public_id: data.public_id,
          url: data.url,
        };
        console.log(thisData);
        console.log(user);
        toast("Registering your account...");
        dispatch(
          registerUser({
            name: user.name,
            email: user.email,
            password: user.password,
            avatar: thisData,
          })
        );
      }, 4000);
    } catch (e) {
      console.log(e);
      dispatch(clearErrors());
    }
  };

  useEffect(() => {
    if (error) {
      toast("User already exists.Try logging in");
      dispatch(clearErrors());
      return;
    }

    if (user) {
      navigate("/me");
    }
  }, [error, user]);
  return (
    <>
      <div className="main_register">
        <div className="register_card">
          <h1>Register</h1>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Enter your Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              <input type="file" onChange={handleFile} />
            </div>
          </div>
          <div className="submit">
            <button onClick={registerTrigger}>Register</button>
            <p>
              Already a User? <NavLink to="/login">Login Now</NavLink>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
