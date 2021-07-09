import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../redux/photo/photosActions";
import PhotoElement from "./PhotoElement";

const PhotoContainer = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  const { photos, loading, error, notFound } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPhotos(query));
  }, [dispatch, query]);

  return (
    <div className="photo-container">
      {!notFound ? (
        <h2>
          {loading
            ? "Loading..."
            : error
            ? "An unxpected error happend, please try again later !"
            : `Result of your search for ${query}`}
        </h2>
      ) : (
        <h2>No results found for {query}</h2>
      )}

      <ul>
        {photos.map((photo) => (
          <PhotoElement
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        ))}
      </ul>

      {}
    </div>
  );
};

export default PhotoContainer;
