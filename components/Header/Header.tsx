import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { changeThemeAction, Context } from "../../context/ContextProvider";
import styledThemes from "../../context/styledThemes";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { theme, dispatch } = useContext(Context);
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("currentColor");
    item !== null && dispatch(changeThemeAction(Number(item)));
  }

  const router = useRouter();
  return (
    <ThemeProvider theme={styledThemes[theme]}>
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
