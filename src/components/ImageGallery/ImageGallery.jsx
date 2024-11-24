import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImagesGallery = ({ images }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li className={s.item} key={image.id}>
          <ImageCard images={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImagesGallery;
// {images.map((card, index) => (
//   <li className={s.item} key={`${card.id}-${index}`}>
