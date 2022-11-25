import React, { useState } from "react";
import "./SongPlay.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
const SongPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const swichMode = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="main_songPlay">
      <div className="thisSong">
        <img
          src="https://i0.wp.com/99lyricstore.com/wp-content/uploads/2020/07/Kurta2BPajama2BSong2BImage2BFeatures2BTony2BKakkar.jpg"
          alt=""
        />
        <div className="right_panel">
          <h1>Kurta Pajama</h1>
          <div className="artists_main">
            <h2>Artists</h2>
            <div className="artists">
              <img
                src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                alt=""
              />
              <img
                src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                alt=""
              />
              <img
                src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="artists_main">
            <h2>Actors</h2>
            <div className="artists">
              <img
                src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                alt=""
              />
              <img
                src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                alt=""
              />
              <img
                src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="play" onClick={swichMode}>
            {isPlaying ? (
              <div className="pause_button switch_btn">
                <PauseIcon />
                <h2>Pause</h2>
              </div>
            ) : (
              <div className="play_button switch_btn">
                <PlayArrowIcon />
                <h2>Play</h2>
              </div>
            )}
          </div>
        </div>
        <div className="other_form_same_artist">
          <div className="other_from_same_artist_card">
            <h2>More songs from these artists</h2>
            <div className="cards">
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
              <div className="mini_card_other">
                <img
                  src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
                  alt=""
                />
                <div>
                  <h3>Song Name</h3>
                  <p>Tonny Kakkar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more_Song_From_Movie"></div>
      <div className="recommended_Song"></div>
    </div>
  );
};

export default SongPlay;
