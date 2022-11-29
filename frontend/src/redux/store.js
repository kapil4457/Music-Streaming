import { configureStore } from "@reduxjs/toolkit";
import { deleteUser } from "./actions/userAction";
import {
  createSong,
  deleteSong,
  getLatestSongs,
  songFromArtistReducer,
  songReducer,
  trendingSongs,
  updateLikes,
} from "./Reducers/songReducer";
import {
  getAllUsers,
  getAllUserWhoAppliedForSinger,
  getLatestArtists,
  makeSinger,
  profileReducer,
  userReducer,
} from "./Reducers/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    userUpdate: profileReducer,
    allUsers: getAllUsers,
    allSongs: songReducer,
    songFromParticularSinger: songFromArtistReducer,
    singerApplication: getAllUserWhoAppliedForSinger,
    makeSinger: makeSinger,
    deleteUser: deleteUser,
    createSong: createSong,
    deleteSong: deleteSong,
    latestSinger: getLatestArtists,
    latestSongs: getLatestSongs,
    updateLikes: updateLikes,
    trendingSongs: trendingSongs,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
