import axios from "axios";
import {
  GET_ALL_SONGS_ADMIN_FAIL,
  GET_ALL_SONGS_ADMIN_REQUEST,
  GET_ALL_SONGS_ADMIN_SUCCESS,
  CLEAR_ERRORS,
  GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_FAIL,
  GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_REQUEST,
  GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_SUCCESS,
  CREATE_SONG_FAIL,
  CREATE_SONG_REQUEST,
  CREATE_SONG_SUCCESS,
  DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL,
} from "../Constants/songConstant";

export const getAllSongs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_SONGS_ADMIN_REQUEST });
    const { data } = await axios.get("/api/v1/all/songs");
    dispatch({ type: GET_ALL_SONGS_ADMIN_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_ALL_SONGS_ADMIN_FAIL,
      error: e.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export const getAllSongsFromParticularSinger = (info) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get(
      `/api/v1/songs/artist/${info?.id}`,
      config
    );
    console.log(data);
    dispatch({
      type: GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_FAIL,
      error: e.response.data.message,
    });
  }
};

export const createSong = (info) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SONG_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/v1/create/song", info, config);
    console.log("data : ", data);
    dispatch({ type: CREATE_SONG_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: CREATE_SONG_FAIL, payload: e.response.data.message });
  }
};

export const deleteSong = (info) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SONG_REQUEST });
    const { data } = await axios.delete(`/api/v1/delete/song/${info.id}`);
    console.log(data);
    dispatch({ type: DELETE_SONG_SUCCESS, payload: data, isDeleted: true });
  } catch (e) {
    dispatch({
      type: DELETE_SONG_FAIL,
      error: e.response.data.message,
    });
  }
};
