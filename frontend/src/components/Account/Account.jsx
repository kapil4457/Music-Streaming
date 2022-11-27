import React, { useEffect } from "react";
import "./Account.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { updateUser } from "../../redux/actions/userAction";
import axios from "axios";
import { sha1 } from "crypto-hash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [display, setDisplay] = useState("none");
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [file, setFiles] = useState(null);
  const [prevClass, setPrevClass] = useState("one");
  const [currentClass, setcurrentClass] = useState("one");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const updateUserFunc = async () => {
    try {
      if (file !== null) {
        // Deleting the previous profile pic
        const public_id = user?.avatar?.public_id;
        const timestamp = new Date().getTime();
        const string = `public_id=${public_id}&timestamp=${timestamp}tJfGYEl5F5FNZutSI0P1QWM6rI8`;
        const signature = await sha1(string);
        const formData = new FormData();
        formData.append("public_id", public_id);
        formData.append("signature", signature);
        formData.append("api_key", "642948771913215");
        formData.append("timestamp", timestamp);
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/ds82kuoet/image/destroy`,
          formData
        );
        // Uploading new image

        const formData1 = new FormData();
        formData1.append("file", file);
        formData1.append("upload_preset", "user_avatar");

        const { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/ds82kuoet/image/upload`,
          formData1
        );
        toast("Please Wait...");
        setTimeout(() => {
          let thisData = {
            public_id: data.public_id,
            url: data.url,
          };
          toast("Updating your account...");
          dispatch(
            updateUser({
              name: name,
              email: email,
              avatar: thisData,
            })
          );
          toast("Account updated successfully");
          setDisplay("none");
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 2000);
        }, 4000);
      } else {
        const temp = {
          name: name,
          email: email,
          avatar: user?.avatar,
        };

        dispatch(updateUser(temp));
        toast("Profile updated successfully");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    var t = document.getElementById(currentClass);
    t.classList.add("active_admin_dahboard");

    setTimeout(() => {
      if (!isAuthenticated) {
        navigate("/");
      }
    }, 200);
  }, [isAuthenticated]);

  return (
    <div className="main_account_page">
      <div className="first_part">
        <div className="updateCard" style={{ display: `${display}` }}>
          <div className="card">
            <CloseIcon
              onClick={() => {
                setDisplay("none");
              }}
            />
            <input
              type="text"
              placeholder="Please Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Please Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <label htmlFor="">Select new Avatar</label>
              <input type="file" onChange={handleFile} />
            </div>
            <button onClick={updateUserFunc}>Update</button>
          </div>
        </div>
        <img src={user?.avatar?.url} alt="" />
        <div className="left_part_account">
          <h2>Name : {user?.name}</h2>
          <h2>Email : {user?.email}</h2>
          <button
            onClick={() => {
              setDisplay("flex");
            }}
          >
            Update Profile
          </button>
        </div>
      </div>
      <div className="second_part">
        <h1>Admin Dashboard</h1>
        <div className="admin_navbar">
          <p
            id="one"
            onClick={() => {
              var temp = document.getElementById("one");
              if (prevClass) {
                var temp2 = document.getElementById(prevClass);
                temp2.classList.remove("active_admin_dahboard");
              }
              temp.classList.add("active_admin_dahboard");
              setPrevClass("one");
            }}
          >
            All Users
          </p>
          <p
            id="two"
            onClick={() => {
              var temp = document.getElementById("two");
              if (prevClass) {
                var temp2 = document.getElementById(prevClass);
                temp2.classList.remove("active_admin_dahboard");
              }
              temp.classList.add("active_admin_dahboard");
              setPrevClass("two");
            }}
          >
            All Songs
          </p>
          <p
            id="three"
            onClick={() => {
              var temp = document.getElementById("three");
              if (prevClass) {
                var temp2 = document.getElementById(prevClass);
                temp2.classList.remove("active_admin_dahboard");
              }
              temp.classList.add("active_admin_dahboard");
              setPrevClass("three");
            }}
          >
            Pending Requests
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Account;
