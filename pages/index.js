import Head from 'next/head'
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import AnimatedText from '../components/AnimatedText'; 

// import styles from '../styles/Home.module.css';


export default function Home() {
  const [replay, setReplay] = React.useState(true);

  const placeholderText = [
    { type: "heading1", text: "Christopher Rolke" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <motion.div
      className='title'
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >

    <sectio id="content" className="nav">
      <div className="container">
        <Link href="/about"><div id='title' className="title">
        {placeholderText.map((item, index) => {
            return (<AnimatedText {...item} key={index} />);
        })}
        </div></Link>
        <div className='tracking-in-expand-fwd-bottom'><h3 class="span loader"><span class="m">D</span><span class="m">E</span><span class="m">V</span><span class="m">E</span><span class="m">L</span><span class="m">O</span><span class="m">P</span><span class="m">E</span><span class="m">R</span><span class="m">&nbsp;</span><span class="m"><span class="m">V</span></span><span class="m">I</span><span class="m">S</span><span class="m">I</span><span class="m">O</span><span class="m">N</span><span class="m">A</span><span class="m">R</span><span class="m">Y</span><span class="m">&nbsp;</span><span class="m">a</span><span class="m">n</span><span class="m">d</span><span class="m">&nbsp;</span><span class="m">C</span><span class="m">R</span><span class="m">E</span><span class="m">A</span><span class="m">T</span><span class="m">O<span class="m">R</span></span></h3></div>
      
      
      </div>
      
      {/* <div class="nav-container"><Link href="/about"><a class="nav-tab heartbeat">About</a></Link><Link href="/resume"><a class="nav-tab heartbeat">Resume</a></Link><Link href="/contact"><a class="nav-tab heartbeat">Contact</a></Link><span class="nav-tab-slider"></span></div> */}
      </sectio>
    
    </motion.div>
  );
}
