import { useCallback, useEffect, useState } from "react";
import { IGalleryItem } from "../../interfaces/Interfaces";
import GalleryDisplay from "../GalleryDisplay/GalleryDisplay";
import GalleryList from "../GalleryList/GalleryList";
import GalleryStyled from "./GalleryStyled";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<IGalleryItem>();
  const [images, setImages] = useState<IGalleryItem[]>();

  const fetchImages = useCallback(async () => {
    const response = await fetch("/api/galleryPictures");
    const { myImages } = await response.json();
    setImages(myImages);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleListClick = (index: number) => {
    setCurrentImage(images![index]);
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
        <GalleryList
          images={images as IGalleryItem[]}
          action={handleListClick}
        />
        <GalleryDisplay currentImage={currentImage as IGalleryItem} />
      </div>
    </GalleryStyled>
  );
};

export default Gallery;
