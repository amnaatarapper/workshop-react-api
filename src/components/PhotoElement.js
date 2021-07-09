const PhotoElement = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};

export default PhotoElement;
