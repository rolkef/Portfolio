import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import ParticleBackground from "../components/particleBackground";
import { AnimatePresence } from "framer-motion";
import ContainerBlock from "../components/ContainerBlock";
import React from "react";



function MyApp({ Component, pageProps, router }) {

  return (
  <ContainerBlock
    title="Christopher Rolke - Developer, Visionary and Creator">
    <AnimatePresence exitBeforeEnter>
      <Component
        key={router.route}
        {...pageProps}
      />
      <ParticleBackground/>
    </AnimatePresence>
  </ContainerBlock>
  );
}

export default MyApp;