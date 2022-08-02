import Head from 'next/head'
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

// import styles from '../styles/Home.module.css';

export default function Home({ isFirstMount}) {
  return (
    <motion.section exit={{ opacity: 0 }}>
    {isFirstMount && <InitialTransition />}
    <sectio className="nav">
    <Link href="/about"><h1>Christopher Rolke</h1></Link>
    <h3 class="span loader"><span class="m">D</span><span class="m">E</span><span class="m">V</span><span class="m">E</span><span class="m">L</span><span class="m">O</span><span class="m">P</span><span class="m">E</span><span class="m">R</span><span class="m">&nbsp;</span><span class="m"><span class="m">V</span></span><span class="m">I</span><span class="m">S</span><span class="m">I</span><span class="m">O</span><span class="m">N</span><span class="m">A</span><span class="m">R</span><span class="m">Y</span><span class="m">&nbsp;</span><span class="m">a</span><span class="m">n</span><span class="m">d</span><span class="m">&nbsp;</span><span class="m">C</span><span class="m">R</span><span class="m">E</span><span class="m">A</span><span class="m">T</span><span class="m">O<span class="m">R</span></span></h3>
    <div class="nav-container"><Link href="/about"><a class="nav-tab">About</a></Link><Link href="/resume"><a class="nav-tab">Resume</a></Link><Link href="/contact"><a class="nav-tab">Contact</a></Link><span class="nav-tab-slider"></span></div>
    </sectio>
    </motion.section>
    
  );
}

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute h-full z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Rolke
        </text>
      </motion.svg>
    </motion.div>
  );
};