import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
