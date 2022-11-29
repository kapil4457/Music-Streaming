import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  CLEAR_ERRORS,
  LOAD_FAIL,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  GET_ALL_USERS_ADMIN_REQUEST,
  GET_ALL_USERS_ADMIN_SUCCESS,
  GET_ALL_USERS_ADMIN_FAIL,
  SINGER_APPLIED_USERS_REQUEST,
  SINGER_APPLIED_USERS_SUCCESS,
  SINGER_APPLIED_USERS_FAIL,
  ACCEPT_SINGER_APPLICATION_REQUEST,
  ACCEPT_SINGER_APPLICATION_SUCCESS,
  ACCEPT_SINGER_APPLICATION_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../Constants/userConstant";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_REQUEST:
    case REGISTER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case LOAD_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOAD_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isUpdated: true,
      };

    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getAllUsers = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_USERS_ADMIN_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case GET_ALL_USERS_ADMIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getAllUserWhoAppliedForSinger = (state = {}, action) => {
  switch (action.type) {
    case SINGER_APPLIED_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGER_APPLIED_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case SINGER_APPLIED_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const makeSinger = (state = {}, action) => {
  switch (action.type) {
    case ACCEPT_SINGER_APPLICATION_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case ACCEPT_SINGER_APPLICATION_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case ACCEPT_SINGER_APPLICATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteUser = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case DELETE_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case DELETE_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
  }
};
