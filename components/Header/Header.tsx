import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { changeThemeAction, Context } from "../../context/ContextProvider";
import styledThemes from "../../context/styledThemes";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { theme, dispatch } = useContext(Context);

  const handleChangeTheme = () => {
    let payload = theme;

    if (payload < 3) payload++;
    else payload = 0;
    console.log(theme, payload);
    dispatch(changeThemeAction(payload));
  };

  const router = useRouter();
  return (
    <ThemeProvider theme={styledThemes[theme]}>
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
