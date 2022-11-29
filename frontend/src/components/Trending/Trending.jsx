import React, { useEffect, useState } from "react";
import MainCard from "../MainCard/MainCard";
import "./Trending.css";
import { useSelector, useDispatch } from "react-redux";
import { getLatestSingers } from "../../redux/actions/userAction";
import {
  getLatestSongs,
  getTrendingSongs,
} from "../../redux/actions/songAction";

const Trending = () => {
  const { singers } = useSelector((state) => state.latestSinger);
  const { trendingSongs } = useSelector((state) => state.trendingSongs);
  const dispatch = useDispatch();
  const [artistSel, setArtistSel] = useState(null);

  const filtering = (e) => {
    if (!artistSel) {
      return true;
    } else {
      if (artistSel?.name === e?.artist[0]?.name) {
        return true;
      } else {
        console.log("no");
        return false;
      }
    }
  };
  useEffect(() => {
    dispatch(getLatestSingers());
    dispatch(getTrendingSongs());
  }, []);
  return (
    <div className="main_trending">
      <h1>Trending</h1>
      <div className="trending_artists">
        <h2> Trending Artists</h2>
        <div className="artist_cards">
          {singers?.users?.map((singer, key) => (
            <>
              <img
                key={key}
                src={singer?.avatar?.url}
                onClick={() => {
                  setArtistSel(singer);
                }}
                alt=""
              />
            </>
          ))}
        </div>
      </div>
      <div className="trending_songs">
        <h2>Trending Songs</h2>
        <div className="songs_play">
          {trendingSongs?.songs?.filter(filtering)?.map((song, key) => (
            <MainCard key={key} data={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
