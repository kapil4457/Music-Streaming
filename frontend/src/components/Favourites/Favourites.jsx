import React from "react";
import "./Favourites.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DeleteIcon from "@mui/icons-material/Delete";
import PauseIcon from "@mui/icons-material/Pause";
import { useState } from "react";

const Favourites = () => {
  const [selectedSongs, setSelectedSongs] = useState(null);
  const [isPlayListPaused, setIsPlayListPaused] = useState(true);
  const data = [
    {
      name: "disco",
      songs: [],
    },
    {
      name: "disco",
      songs: [],
    },
    {
      name: "disco",
      songs: [],
    },
    {
      name: "disco",
      songs: [],
    },
    {
      name: "disco",
      songs: [
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
        {
          name: "kabira",
          img: "https://a10.gaanacdn.com/images/albums/81/2463781/crop_480x480_1554259503_2463781.jpg",
        },
      ],
    },
    {
      name: "disco",
      songs: [
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
      ],
    },
    {
      name: "disco",
      songs: [
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
      ],
    },
    {
      name: "disco",
      songs: [
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
        {
          name: "kabira",
          img: "",
        },
      ],
    },
  ];
  return (
    <div className="favourites_main">
      <div className="head">
        <h2>Favourites</h2>
        <button>
          Create Collection <PlaylistAddIcon />
        </button>
      </div>
      <div className="bottom_half">
        <div className="my_playLists">
          {data.map((playlist, key) => (
            <div
              className="play_list_card"
              key={key}
              onClick={() => setSelectedSongs(playlist)}
            >
              <div className="leftIcons">
                <FormatListBulletedIcon />
                <h2>{playlist.name}</h2>
              </div>
              <div className="rightIcons">
                {isPlayListPaused ? <PlayArrowIcon /> : <PauseIcon />}
                <DeleteIcon />
              </div>
            </div>
          ))}
        </div>

        {selectedSongs === null ? (
          <div className="select_a_playlist">Please select a Playlist</div>
        ) : (
          <div className="play_list_songs">
            {selectedSongs.songs.length == 0 ? (
              <div className="play_list_is_empty">
                <h2>PlayList is Empty</h2>
                <p>Add songs to this Playlist to view the songs</p>
              </div>
            ) : (
              <div className="playlist_songs_main">
                {selectedSongs.songs.map((song, key) => (
                  <div key={key}>
                    <div className="left_song">
                      <img src={song.img} alt="" />
                      <div>
                        <h2>{song.name}</h2>
                        <h3>Artist Name</h3>
                      </div>
                    </div>
                    <div className="rightIcons">
                      <PlayArrowIcon />
                      <DeleteIcon />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
