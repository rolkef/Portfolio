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
        <div className='tracking-in-expand-fwd-bottom'><h3 className="span loader"><span className="m">D</span><span className="m">E</span><span className="m">V</span><span className="m">E</span><span className="m">L</span><span className="m">O</span><span className="m">P</span><span className="m">E</span><span className="m">R</span><span className="m">&nbsp;</span><span className="m"><span className="m">V</span></span><span className="m">I</span><span className="m">S</span><span className="m">I</span><span className="m">O</span><span className="m">N</span><span className="m">A</span><span className="m">R</span><span className="m">Y</span><span className="m">&nbsp;</span><span className="m">a</span><span className="m">n</span><span className="m">d</span><span className="m">&nbsp;</span><span className="m">C</span><span className="m">R</span><span className="m">E</span><span className="m">A</span><span className="m">T</span><span className="m">O<span className="m">R</span></span></h3></div>
      
      
      </div>
      
      {/* <div class="nav-container"><Link href="/about"><a class="nav-tab heartbeat">About</a></Link><Link href="/resume"><a class="nav-tab heartbeat">Resume</a></Link><Link href="/contact"><a class="nav-tab heartbeat">Contact</a></Link><span class="nav-tab-slider"></span></div> */}
      </sectio>
    
    </motion.div>
  );
}
