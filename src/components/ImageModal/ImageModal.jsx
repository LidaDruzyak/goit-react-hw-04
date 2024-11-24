import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";
Modal.setAppElement("#root");

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  if (!image) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div>
        <img
          className={s.image}
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
