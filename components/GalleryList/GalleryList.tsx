import { IGalleryItem } from "../../interfaces/Interfaces";
import GalleryListStyled from "./GalleryListStyled";

interface GalleryListProps {
  images: IGalleryItem[];
  action: (index: number) => void;
}

const GalleryList = ({ images, action }: GalleryListProps) => {
  return (
    <GalleryListStyled className="gallery-list">
      <h2 className="gallery-list__title">GALLERY</h2>
      <ul className="gallery-list__list">
        {images === undefined ? (
          <p>fetching...</p>
        ) : (
          images.map((file, index) => (
            <li key={index} onClick={() => action(index)}>
              <img src={file.source} alt={file.name} />
            </li>
          ))
        )}
      </ul>
    </GalleryListStyled>
  );
};

export default GalleryList;
