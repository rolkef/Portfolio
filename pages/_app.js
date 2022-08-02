import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import ParticleBackground from "../components/particleBackground";
import { AnimatePresence } from "framer-motion";
import ContainerBlock from "../components/ContainerBlock";
import React from "react";



function MyApp({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = React.useState(true);

  React.useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
  <ContainerBlock
    title="Christopher Rolke - Developer, Visionary and Creator">
    <AnimatePresence exitBeforeEnter>
      <Component
        isFirstMount={isFirstMount}
        key={router.route}
        {...pageProps}
      />
      <ParticleBackground/>
    </AnimatePresence>
  </ContainerBlock>
  );
}

export default MyApp;