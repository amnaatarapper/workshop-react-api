import { FETCH_PHOTOS } from "./photosTypes";
import axios from "axios";

// Action generator
export const fetchPhotos = (query) => {
  return (dispatch) => {
    //Loading
    dispatch({
      type: FETCH_PHOTOS,
      payload: { loading: true, error: false, notFound: false },
    });

    // Get request
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query,
          per_page: 12,
          client_id: "XvBicDspJoBNuYEdd7MpMRbtvRugpKuWbQ9gpTbwBEA",
        },
      })
      .then((response) => {
        if (response.data.results.length) {
          dispatch({
            type: FETCH_PHOTOS,
            payload: {
              photos: response.data.results,
              error: false,
              notFound: false,
            },
          });
        } else {
          dispatch({
            type: FETCH_PHOTOS,
            payload: {
              notFound: true,
              photos: [],
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PHOTOS,
          payload: {
            error: true,
          },
        });
      })
      .finally(() => {
        dispatch({
          type: FETCH_PHOTOS,
          payload: {
            loading: false,
          },
        });
      });
  };
};
