import styles from "../styles/Layout.module.css";
import LayoutStyled from "./LayoutStyled";
import { AnimatePresence } from "framer-motion";
interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
