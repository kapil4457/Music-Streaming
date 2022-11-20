import React from "react";
import "./Header.css";
import logo from "./Header_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import user from "./account.png";
const Header = () => {
  return (
    <div className="main_header">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <div className="search_bar">
          <div>
            <input type="text" />
            <SearchIcon />
          </div>
        </div>
        <div className="menu_options">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trending">Trending</NavLink>
          <NavLink to="/latest">Latest</NavLink>
          <NavLink to="/favourites">Favourites</NavLink>
        </div>
        <div className="account_section">
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
