import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
