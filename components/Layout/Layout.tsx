import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { changeStateAction, Context } from "../../context/ContextProvider";
import styledThemes from "../../context/styledThemes";
import LoadBar from "../LoadBar/LoadBar";
import LayoutStyled from "./LayoutStyled";
interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("currentColor");
  }

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      dispatch(changeStateAction({ ...state, isLoading: true }));
    });
  }, [router, state, dispatch]);

  return (
    <>
      <ThemeProvider theme={styledThemes[state.theme]}>
        <AnimatePresence mode="wait">
          {state.isLoading && <LoadBar />}
        </AnimatePresence>
        <LayoutStyled>{children}</LayoutStyled>
      </ThemeProvider>
    </>
  );
};

export default Layout;
