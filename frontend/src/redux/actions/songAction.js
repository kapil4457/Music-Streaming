import axios from "axios";
import {
  GET_ALL_SONGS_ADMIN_FAIL,
  GET_ALL_SONGS_ADMIN_REQUEST,
  GET_ALL_SONGS_ADMIN_SUCCESS,
  CLEAR_ERRORS,
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
