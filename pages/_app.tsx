import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import LoadBar from "../components/LoadBar/LoadBar";
import Router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Header />

      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>

      <Footer />
    </>
  );
}

export default MyApp;
