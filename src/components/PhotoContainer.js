import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhotoElement from "./PhotoElement";
import { fetchPhotos } from "../redux/photos/photosActions";

const PhotoContainer = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  const photos = useSelector((state) => state);
  const { photos: photosData, loading, error } = photos;
  console.log("error: ", error);

  useEffect(() => {
    dispatch(fetchPhotos(query));
  }, [dispatch, query]);

  useEffect(() => {}, [loading, error]);

  return (
    <div className="photo-container">
      <h2>
        {loading
          ? "Loading..."
          : error
          ? "An unxpected error happend, please try again later !"
          : `Result of your search for ${query}`}
      </h2>
      <ul>
        {!loading &&
          !error &&
          photosData.map((photo) => (
            <PhotoElement
              src={photo.urls.regular}
              alt={photo.alt_description}
              key={photo.id}
            />
          ))}
      </ul>
    </div>
  );
};

export default PhotoContainer;
