import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { changeStateAction, Context } from "../../context/ContextProvider";
import styledThemes from "../../context/styledThemes";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { state, dispatch } = useContext(Context);

  const handleChangeTheme = () => {
    console.log("HEADER");
    let payload = state.theme;
    if (payload < 3) payload++;
    else payload = 0;
    dispatch(changeStateAction({ ...state, theme: payload }));
  };

  const router = useRouter();
  return (
    <ThemeProvider theme={styledThemes[state.theme]}>
      <HeaderStyled className="header">
        <div className="header__left">
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
          <img
            onClick={handleChangeTheme}
            className="header__theme"
            src="/SPLATTER.svg"
            alt="change color theme"
          />
        </div>
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
