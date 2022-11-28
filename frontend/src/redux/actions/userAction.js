import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOAD_FAIL,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  GET_ALL_USERS_ADMIN_FAIL,
  GET_ALL_USERS_ADMIN_REQUEST,
  GET_ALL_USERS_ADMIN_SUCCESS,
  SINGER_APPLIED_USERS_REQUEST,
  SINGER_APPLIED_USERS_FAIL,
  SINGER_APPLIED_USERS_SUCCESS,
} from "../Constants/userConstant";

export const login = (info) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`/api/v1/login`, info, config);
    await dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (e) {
    await dispatch({ type: LOGIN_FAIL, payload: e.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_REQUEST });

    const { data } = await axios.get(`/api/v1/user/details`);
    dispatch({
      type: LOAD_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({ type: LOAD_FAIL, payload: error.response.data.message });
  }
};

export const registerUser = (info) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/v1/register", info, config);
    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
  } catch (e) {
    dispatch({ type: LOAD_FAIL, payload: e.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export const updateUser = (info) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { user } = axios.put("/api/v1/update/profile", info, config);
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: user,
    });
  } catch (e) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: e.response.data.message });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_USERS_ADMIN_REQUEST });
    const { data } = await axios.get("/api/v1/admin/users/all");
    dispatch({ type: GET_ALL_USERS_ADMIN_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_ALL_USERS_ADMIN_FAIL,
      payload: e.response.data.message,
    });
  }
};

export const userAplliedForSingers = () => async (dispatch) => {
  try {
    dispatch({ type: SINGER_APPLIED_USERS_REQUEST });
    const { data } = await axios.get("/api/v1/admin/users/applied");
    dispatch({ type: SINGER_APPLIED_USERS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: SINGER_APPLIED_USERS_FAIL,
      payload: e,
    });
  }
};
