import {
  GET_ALL_SONGS_ADMIN_FAIL,
  GET_ALL_SONGS_ADMIN_REQUEST,
  GET_ALL_SONGS_ADMIN_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/songConstant";

export const songReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SONGS_ADMIN_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_ALL_SONGS_ADMIN_SUCCESS:
      return {
        loading: false,
        songs: action.payload,
      };

    case GET_ALL_SONGS_ADMIN_FAIL:
      return {
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
