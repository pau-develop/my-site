import { IGalleryItem } from "../../interfaces/Interfaces";
import GalleryListStyled from "./GalleryListStyled";

interface GalleryListProps {
  files: IGalleryItem[];
  action: (index: number) => void;
}

const GalleryList = ({ files, action }: GalleryListProps) => {
  return (
    <GalleryListStyled className="gallery-list">
      <h2 className="gallery-list__title">GALLERY</h2>
      <ul className="gallery-list__list">
        {files.map((file, index) => (
          <li key={index} onClick={() => action(index)}>
            <img src={file.source} alt={file.name} />
          </li>
        ))}
      </ul>
    </GalleryListStyled>
  );
};

export default GalleryList;
