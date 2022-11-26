import React, { useState } from "react";
import "./Header.css";
import logo from "./Header_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";
import user from "./account.png";

const Header = () => {
  const data = [
    {
      name: "Kurta Pajama",
      img: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/07/Kurta2BPajama2BSong2BImage2BFeatures2BTony2BKakkar.jpg",
    },
    {
      name: "Kurta Pajama",
      img: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/07/Kurta2BPajama2BSong2BImage2BFeatures2BTony2BKakkar.jpg",
    },
    {
      name: "Kurta Pajama",
      img: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/07/Kurta2BPajama2BSong2BImage2BFeatures2BTony2BKakkar.jpg",
    },
    {
      name: "Kurta Pajama",
      img: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/07/Kurta2BPajama2BSong2BImage2BFeatures2BTony2BKakkar.jpg",
    },
    {
      name: "Kurta Pajama",
      img: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/07/Kurta2BPajama2BSong2BImage2BFeatures2BTony2BKakkar.jpg",
    },
    {
      name: "Kurta Pajama",
      img: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/07/Kurta2BPajama2BSong2BImage2BFeatures2BTony2BKakkar.jpg",
    },
  ];
  const [keyword, setKeyWord] = useState("");
  const [res, setRes] = useState([]);
  const navigate = useNavigate();
  const push = () => {
    navigate("/");
  };

  const searchFunc = (e) => {
    setKeyWord(e.target.value);
    var temp = document.getElementById("search-bar");
    if (e.target.value !== "") {
      setRes(data);
    } else if (e.target.value === "") {
      setRes([]);
    }
  };
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
              onChange={searchFunc}
            />

            <SearchIcon />
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
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
