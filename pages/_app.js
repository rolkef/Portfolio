import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import ParticleBackground from "../components/particleBackground";
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from "../components/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NextNProgress from "nextjs-progressbar";




function MyApp({ Component, pageProps, router}) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
  <Layout
    title="Christopher Rolke - Developer, Visionary and Creator">
    <AnimatePresence exitBeforeEnter>
      <NextNProgress />
      <Component
        key={router.route}
        {...pageProps}
      />
      <ParticleBackground/>
    </AnimatePresence>
  </Layout>
  );
}

export default MyApp;