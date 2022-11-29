import { configureStore } from "@reduxjs/toolkit";
import { deleteUser } from "./actions/userAction";
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
    deleteUser: deleteUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
