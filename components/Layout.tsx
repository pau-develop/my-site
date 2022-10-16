import styles from "../styles/Layout.module.css";
import LayoutStyled from "./LayoutStyled";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <LayoutStyled className="wrap">
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
