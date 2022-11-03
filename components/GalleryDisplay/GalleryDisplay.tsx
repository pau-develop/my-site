import { IGalleryItem } from "../../interfaces/Interfaces";
import GalleryDisplayStyled from "./GalleryDisplayStyled";

interface GalleryDisplayProps {
  currentImage: IGalleryItem;
}

const GalleryDisplay = ({ currentImage }: GalleryDisplayProps) => {
  return (
    <GalleryDisplayStyled className="gallery-display">
      {currentImage !== undefined && (
        <>
          <div className="gallery-display__info">
            <span>{currentImage.name}</span>
            <span>{currentImage.resolution}</span>
          </div>
          <div className="gallery-display__image">
            <img src={currentImage.source} alt={currentImage.name}></img>
          </div>
        </>
      )}
    </GalleryDisplayStyled>
  );
};

export default GalleryDisplay;
