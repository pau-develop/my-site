import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import styledThemes from "../../context/styledThemes";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <ThemeProvider theme={styledThemes[2]}>
      <HeaderStyled className="header">
        <h2 className="header__title">
          <Link
            className={
              router.pathname === "/home"
                ? "header__link-current"
                : "header__link"
            }
            href="/home"
          >
            Pau-Dev
          </Link>
        </h2>
        <ul className="header__nav">
          <li
            className={
              router.pathname === "/gallery"
                ? "header__link--current"
                : "header__link"
            }
          >
            <Link href="/gallery">Gallery</Link>
          </li>
          <li
            className={
              router.pathname === "/projects"
                ? "header__link--current"
                : "header__link"
            }
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={
              router.pathname === "/games"
                ? "header__link--current"
                : "header__link"
            }
          >
            <Link href="/games">Games</Link>
          </li>
        </ul>
      </HeaderStyled>
    </ThemeProvider>
  );
};

export default Header;
