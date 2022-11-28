import { configureStore } from "@reduxjs/toolkit";
import { songReducer } from "./Reducers/songReducer";
import {
  getAllUsers,
  profileReducer,
  userReducer,
} from "./Reducers/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    userUpdate: profileReducer,
    allUsers: getAllUsers,
    allSongs: songReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
