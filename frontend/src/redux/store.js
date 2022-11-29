import { configureStore } from "@reduxjs/toolkit";
import { songReducer } from "./Reducers/songReducer";
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
    singerApplication: getAllUserWhoAppliedForSinger,
    makeSinger: makeSinger,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
