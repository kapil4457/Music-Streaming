import React, { useState } from "react";
import "./MainCard.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import { addToFav } from "../../redux/actions/songAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
const MainCard = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const changeState = () => {
    var temp = document.getElementsByClassName(`${data?._id}`);
    if (isPlaying) {
      for (var i = 0; i < temp.length; i++) {
        document.getElementById(`${data?.songLink?.public_url}`).pause();
        temp.item(i).classList.remove("animation-loader");
      }
    } else {
      document.getElementById(`${data?.songLink?.public_url}`).play();
      for (var i = 0; i < temp.length; i++) {
        temp.item(i).classList.add("animation-loader");
      }
    }
    setIsPlaying(!isPlaying);
  };

  const addToLikedSong = async () => {
    const info = {
      id: data?._id,
      type: "up",
    };
    dispatch(addToFav(info));
    toast("Added to Favourites!!");
  };
  return (
    <div className="main_card_container">
      <img src={data?.coverPoster?.url} alt="" />
      <div className="info_side_card">
        <h2> Title : {data?.title}</h2>
        {data?.artist?.map((a, key) => (
          <p key={key} style={{ fontSize: "1.3rem" }}>
            {" "}
            Artist : {a?.name}
          </p>
        ))}
      </div>
      <div className="options">
        <button onClick={changeState}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button>
          <PlaylistAddOutlinedIcon onClick={addToLikedSong} />
        </button>
        <audio src={data?.songLink?.url} id={data?.songLink?.public_url} />
        <div className="music_bars">
          <div className={`loader_line ${data?._id}`}></div>
          <div className={`loader_line ${data?._id}`}></div>
          <div className={`loader_line ${data?._id}`}></div>
          <div className={`loader_line ${data?._id}`}></div>
          <div className={`loader_line ${data?._id}`}></div>
          <div className={`loader_line ${data?._id}`}></div>
          <div className={`loader_line ${data?._id}`}></div>
          <div className={`loader_line ${data?._id}`}></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainCard;
