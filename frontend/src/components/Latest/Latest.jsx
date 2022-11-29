import React, { useEffect, useState } from "react";
import MainCard from "../MainCard/MainCard";
import "../Trending/Trending.css";
import { useSelector, useDispatch } from "react-redux";
import { getLatestSingers } from "../../redux/actions/userAction";
import { getLatestSongs } from "../../redux/actions/songAction";
const Latest = () => {
  const { singers } = useSelector((state) => state.latestSinger);
  const { latestSongs } = useSelector((state) => state.latestSongs);
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
    dispatch(getLatestSongs());
  }, []);
  return (
    <div className="main_trending">
      <h1>Latest</h1>
      <div className="trending_artists">
        <h2> Latest Artists</h2>
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
        <h2>Latest Songs</h2>
        <div className="songs_play">
          {latestSongs?.songs?.filter(filtering)?.map((song, key) => (
            <MainCard key={key} data={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
