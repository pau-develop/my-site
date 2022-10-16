import styles from "../styles/Header.module.css";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h2 className="header__title">Pau-Dev</h2>
      <ul className="header__nav">
        <li>Gallery</li>
        <li>Projects</li>
        <li>Games</li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
