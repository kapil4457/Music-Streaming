import React, { useState } from "react";
import "./Header.css";
import logo from "./Header_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser } from "../../redux/actions/userAction";
import { useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { user, error } = useSelector((state) => state.user);

  const [keyword, setKeyWord] = useState("");
  const [res, setRes] = useState([]);
  const navigate = useNavigate();
  const push = () => {
    navigate("/");
  };

  const searchFunc = (e) => {
    if (keyword === "") {
      toast("Please type something to search");
      return;
    }
    navigate(`/search/${keyword}`);
  };

  const logoutTrigger = async () => {
    try {
      const { data } = await axios.post("/api/v1/logout");
      toast("Logged out successfully");
      navigate("/");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <div className="main_header">
      <div className="left">
        <img src={logo} alt="" onClick={push} style={{ cursor: "pointer" }} />
      </div>
      <div className="right">
        <div className="search_bar">
          <div className="bar">
            <input
              type="text"
              id="search-bar"
              value={keyword}
              onChange={(e) => {
                setKeyWord(e.target.value);
              }}
            />

            <SearchIcon onClick={searchFunc} />
          </div>
          <div className="results">
            {res.map((song, key) => (
              <div key={key}>
                <img src={song.img} alt="" />
                <p>{song.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="menu_options">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trending">Trending</NavLink>
          <NavLink to="/latest">Latest</NavLink>
          <NavLink to="/favourites">Favourites</NavLink>
        </div>
        <div className="account_section">
          {user ? (
            <>
              <img
                src={user?.avatar?.url}
                alt=""
                onClick={() => {
                  navigate("/me");
                }}
              />
              <LogoutIcon
                onClick={logoutTrigger}
                style={{ cursor: "pointer" }}
              />
            </>
          ) : (
            <>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
