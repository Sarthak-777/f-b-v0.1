import { configureStore, combineReducers } from "@reduxjs/toolkit";
import firebaseReducer from "./firebaseReducer";

const reducer = combineReducers({
  firebase: firebaseReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
