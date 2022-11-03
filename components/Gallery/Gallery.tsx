import { useState } from "react";
import galleryItems from "../../data/galleryItems";
import { IGalleryItem } from "../../interfaces/Interfaces";
import GalleryDisplay from "../GalleryDisplay/GalleryDisplay";
import GalleryList from "../GalleryList/GalleryList";
import GalleryStyled from "./GalleryStyled";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<IGalleryItem>();
  const files = galleryItems;

  const handleListClick = (index: number) => {
    setCurrentImage(files[index]);
  };

  return (
    <GalleryStyled
      className="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="gallery__wrap">
        <GalleryList files={files} action={handleListClick} />
        <GalleryDisplay currentImage={currentImage as IGalleryItem} />
      </div>
    </GalleryStyled>
  );
};

export default Gallery;
