import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImagesGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li
          className={s.item}
          key={image.id}
          onClick={() => onImageClick(image)}
        >
          <ImageCard images={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImagesGallery;
