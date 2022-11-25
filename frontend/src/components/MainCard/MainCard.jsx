import React, { useState } from "react";
import "./MainCard.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
const MainCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const changeState = () => {
    var temp = document.getElementsByClassName("loader_line");
    if (isPlaying) {
      for (var i = 0; i < temp.length; i++) {
        temp.item(i).classList.remove("animation-loader");
      }
    } else {
      for (var i = 0; i < temp.length; i++) {
        temp.item(i).classList.add("animation-loader");
      }
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="main_card_container">
      <img
        src="https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/07/Kurta2BPajama2BSong2BImage2BFeatures2BTony2BKakkar.jpg"
        alt=""
      />
      <div className="info_side_card">
        <h2> Title : Song Name</h2>
        <p> Artist Names</p>
      </div>
      <div className="options">
        <button onClick={changeState}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button>
          <PlaylistAddOutlinedIcon />
        </button>
        <div className="music_bars">
          <div className="loader_line"></div>
          <div className="loader_line"></div>
          <div className="loader_line"></div>
          <div className="loader_line"></div>
          <div className="loader_line"></div>
          <div className="loader_line"></div>
          <div className="loader_line"></div>
          <div className="loader_line"></div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
