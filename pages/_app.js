import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import ParticleBackground from "../components/particleBackground";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      once:false,
      offset:50,
    });
  }, []);
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      
      <Component {...pageProps} />
      <ParticleBackground/>
    </ThemeProvider>
  );
}

export default MyApp;