import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import photoReducer from "./photo/photosReducer";

const store = createStore(photoReducer, applyMiddleware(thunk));

export default store;
