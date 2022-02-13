import { createStore } from "redux";
import photoReducer from "./photos/photoReducer";

const store = createStore(photoReducer);

export default store;
