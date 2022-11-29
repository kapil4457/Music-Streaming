import {
  GET_ALL_SONGS_ADMIN_FAIL,
  GET_ALL_SONGS_ADMIN_REQUEST,
  GET_ALL_SONGS_ADMIN_SUCCESS,
  CLEAR_ERRORS,
  GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_FAIL,
  GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_REQUEST,
  GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_SUCCESS,
  CREATE_SONG_REQUEST,
  CREATE_SONG_SUCCESS,
  CREATE_SONG_FAIL,
} from "../Constants/songConstant";

export const songReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SONGS_ADMIN_REQUEST:
    case GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_ALL_SONGS_ADMIN_SUCCESS:
    case GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_SUCCESS:
      return {
        loading: false,
        songs: action.payload,
      };

    case GET_ALL_SONGS_ADMIN_FAIL:
    case GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_FAIL:
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

export const songFromArtistReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_SUCCESS:
      return {
        loading: false,
        songs: action.payload,
      };

    case GET_ALL_SONGS_FROM_A_PARTICULAR_ARTIST_FAIL:
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

export const createSong = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SONG_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case CREATE_SONG_SUCCESS:
      return {
        loading: false,
        song: action.paload,
      };

    case CREATE_SONG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
