import { createStore, combineReducers } from "redux";
import photoReducer from "./photos/photoReducer";
import userReducer from "./userProfile/userReducer";

const rootReducer = combineReducers({
  photo: photoReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
