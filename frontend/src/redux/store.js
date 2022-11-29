import { configureStore } from "@reduxjs/toolkit";
import { deleteUser } from "./actions/userAction";
import {
  createSong,
  deleteSong,
  songFromArtistReducer,
  songReducer,
} from "./Reducers/songReducer";
import {
  getAllUsers,
  getAllUserWhoAppliedForSinger,
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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
