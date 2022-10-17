import Link from "next/link";
import styles from "../styles/Header.module.css";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h2 className="header__title">
        <Link href="/">Pau-Dev</Link>
      </h2>
      <ul className="header__nav">
        <li>
          <Link href="/">Gallery</Link>
        </li>
        <li>
          <Link href="/">Games</Link>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
