import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchFunc } from "../../redux/actions/songAction";
import "./SearchResult.css";
import MainCard from "../MainCard/MainCard";
const SearchResult = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { searchRes } = useSelector((state) => state.searchResult);
  useEffect(() => {
    dispatch(searchFunc({ key: params.name }));
  }, [params.name]);
  return (
    <div className="searchRes_main">
      <h1>Search Result for '{params.name}'</h1>
      <div className="card_block">
        {searchRes?.arr?.map((song, key) => (
          <MainCard key={key} data={song} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
