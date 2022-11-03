import { IGalleryItem } from "../../interfaces/Interfaces";
import GalleryDisplayStyled from "./GalleryDisplayStyled";

interface GalleryDisplayProps {
  currentImage: IGalleryItem;
}

const GalleryDisplay = ({ currentImage }: GalleryDisplayProps) => {
  return (
    <GalleryDisplayStyled>
      {currentImage !== undefined && (
        <img src={currentImage.source} alt={currentImage.name}></img>
      )}
    </GalleryDisplayStyled>
  );
};

export default GalleryDisplay;
