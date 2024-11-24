import s from "./ImageCard.module.css";

const ImageCard = ({ images }) => {
  return (
    <div className={s.imageBox}>
      <img
        className={s.image}
        src={images.urls.small}
        alt={images.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
