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
  DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL,
  GET_LATEST_SONGS_REQUEST,
  GET_LATEST_SONGS_SUCCESS,
  GET_LATEST_SONGS_FAIL,
  ADD_SONG_TO_FAVOURITES_REQUEST,
  ADD_SONG_TO_FAVOURITES_SUCCESS,
  ADD_SONG_TO_FAVOURITES_FAIL,
  GET_TRENDING_SONGS_REQUEST,
  GET_TRENDING_SONGS_SUCCESS,
  GET_TRENDING_SONGS_FAIL,
  GET_FAVOURITE_SONGS_FAIL,
  GET_FAVOURITE_SONGS_REQUEST,
  GET_FAVOURITE_SONGS_SUCCESS,
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
        isCreated: true,
      };

    case CREATE_SONG_FAIL:
      return {
        loading: false,
        isCreated: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteSong = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SONG_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case DELETE_SONG_SUCCESS:
      return {
        loading: false,
        song: action.paload,
        isDeleted: true,
      };

    case DELETE_SONG_FAIL:
      return {
        loading: false,
        error: action.payload,
        isDeleted: false,
      };

    default:
      return state;
  }
};

export const getLatestSongs = (state = {}, action) => {
  switch (action.type) {
    case GET_LATEST_SONGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_LATEST_SONGS_SUCCESS:
      return {
        loading: false,
        latestSongs: action.payload,
      };

    case GET_LATEST_SONGS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateLikes = (state = {}, action) => {
  switch (action.type) {
    case ADD_SONG_TO_FAVOURITES_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ADD_SONG_TO_FAVOURITES_SUCCESS:
      return {
        loading: false,
        isUpdated: true,
      };

    case ADD_SONG_TO_FAVOURITES_FAIL:
      return {
        loading: false,
        isUpdated: false,
      };

    default:
      return state;
  }
};

export const trendingSongs = (state = {}, action) => {
  switch (action.type) {
    case GET_TRENDING_SONGS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_TRENDING_SONGS_SUCCESS:
      return {
        loading: false,
        trendingSongs: action.payload,
      };

    case GET_TRENDING_SONGS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const favouriteSongs = (state = {}, action) => {
  switch (action.type) {
    case GET_FAVOURITE_SONGS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_FAVOURITE_SONGS_SUCCESS:
      return {
        loading: false,
        favSongs: action.payload,
      };

    case GET_FAVOURITE_SONGS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
