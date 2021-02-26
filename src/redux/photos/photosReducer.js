import { FETCH_PHOTOS } from "./photosTypes";

const initialState = {
  photos: [],
  loading: false,
  error: false,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default photosReducer;
