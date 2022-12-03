import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Context } from "../../context/ContextProvider";
import styledThemes from "../../context/styledThemes";
import LoadBar from "../LoadBar/LoadBar";
import LayoutStyled from "./LayoutStyled";
interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { theme, dispatch } = useContext(Context);
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("currentColor");
  }

  return (
    <>
      <ThemeProvider theme={styledThemes[theme]}>
        <LayoutStyled>{children}</LayoutStyled>
      </ThemeProvider>
    </>
  );
};

export default Layout;
