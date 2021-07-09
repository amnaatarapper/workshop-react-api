import { FETCH_PHOTOS } from "./photosTypes";

const initialState = {
  photos: [],
  loading: false,
  error: true,
  notFound: false,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
