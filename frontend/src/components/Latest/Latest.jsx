import React from "react";
import MainCard from "../MainCard/MainCard";
import "../Trending/Trending.css";

const Latest = () => {
  return (
    <div className="main_trending">
      <h1>Latest</h1>
      <div className="trending_artists">
        <h2> Latest Artists</h2>
        <div className="artist_cards">
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
          <img
            src="https://images.hindustantimes.com/img/2021/12/03/1600x900/759d7636-5363-11ec-997e-74ec8c0ca0c9_1638506926420.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="trending_songs">
        <h2>Latest Songs</h2>
        <div className="songs_play">
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </div>
      </div>
    </div>
  );
};

export default Latest;
