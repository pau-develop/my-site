import Link from "next/link";
import { useRouter } from "next/router";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const router = useRouter();
  console.log(router.pathname);
  return (
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
            router.pathname === "/home"
              ? "header__link--current"
              : "header__link"
          }
        >
          <Link href="/home">Gallery</Link>
        </li>
        <li
          className={
            router.pathname === "/home"
              ? "header__link--current"
              : "header__link"
          }
        >
          <Link href="/home">Projects</Link>
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
  );
};

export default Header;
