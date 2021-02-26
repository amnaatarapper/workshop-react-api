import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import photosReducer from "../redux/photos/photosReducer";

const store = createStore(photosReducer, applyMiddleware(thunk));

export default store;
