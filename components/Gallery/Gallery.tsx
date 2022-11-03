import galleryItems from "../../data/galleryItems";
import GalleryList from "../GalleryList/GalleryList";
import GalleryStyled from "./GalleryStyled";

const Gallery = () => {
  const files = galleryItems;

  const handleListClick = (index: number) => {
    console.log(index);
  };

  return (
    <GalleryStyled className="gallery">
      <div className="gallery__wrap">
        <GalleryList files={files} action={handleListClick} />
      </div>
    </GalleryStyled>
  );
};

export default Gallery;
