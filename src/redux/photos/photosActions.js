import axios from "axios";
import { FETCH_PHOTOS } from "./photosTypes";

// Action generator
export const fetchPhotos = (query) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PHOTOS,
      payload: {
        loading: true,
        error: false,
      },
    });
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=t2d5JKu7NPQmE4gN2zi6ctLUz8TChk8g2Km5i_V5zJU&query=${query}&per_page=12`
      )
      .then((response) => {
        dispatch({
          type: FETCH_PHOTOS,
          payload: {
            photos: response.data.results,
            loading: false,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_PHOTOS,
          payload: {
            loading: false,
            error: true,
          },
        });
      });
  };
};
