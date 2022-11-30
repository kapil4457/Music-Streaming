import React from "react";
import "./Favourites.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DeleteIcon from "@mui/icons-material/Delete";
import PauseIcon from "@mui/icons-material/Pause";
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addToFav,
  clearErrors,
  getFavouriteSongs,
} from "../../redux/actions/songAction";

const Favourites = () => {
  const [selectedSongs, setSelectedSongs] = useState(null);
  const { user, error, loading } = useSelector((state) => state.user);
  const { favSongs } = useSelector((state) => state.favouriteSongs);
  const [isPlayListPaused, setIsPlayListPaused] = useState(true);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const dispatch = useDispatch();

  const removeFromLikedSong = async (data) => {
    const info = {
      id: data?._id,
      type: "down",
    };
    dispatch(addToFav(info));
    toast("Removed From Favourites");
  };

  useEffect(() => {
    if (loading == false) {
      dispatch(getFavouriteSongs({ id: user?._id }));
    }
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }
  }, [loading, error, favSongs]);
  return (
    <div className="favourites_main">
      <div className="head">
        <h2>Favourites</h2>
        <button>Play All</button>
      </div>

      <div className="favourites_list">
        {favSongs?.favSongs?.length == 0 ? (
          <div className="no-fav">Favourite Song list is Empty</div>
        ) : (
          <>
            {favSongs?.favSongs?.map((song, key) => (
              <div className="favCard" key={key}>
                <img src={song?.coverPoster?.url} alt="" />
                <div className="info">
                  <p>
                    <b>Title </b> {song?.title}
                  </p>
                  <p>
                    <b>Artist </b>
                    {song?.artist[0]?.name}
                  </p>
                  <p>
                    <b>Language </b>
                    {song?.language}
                  </p>
                </div>
                <div className="btns">
                  <audio src={song?.songLink?.url} id={`temp${key}`}></audio>
                  {isSongPlaying ? (
                    <PauseIcon
                      onClick={() => {
                        setIsSongPlaying(!isSongPlaying);
                        document.getElementById(`temp${key}`).pause();
                      }}
                      className="pause"
                    />
                  ) : (
                    <PlayArrowIcon
                      onClick={() => {
                        setIsSongPlaying(!isSongPlaying);
                        document.getElementById(`temp${key}`).play();
                      }}
                      className="play"
                    />
                  )}
                  <DeleteIcon
                    className="del"
                    onClick={() => {
                      removeFromLikedSong(song);
                    }}
                  />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Favourites;
