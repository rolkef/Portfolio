import Head from 'next/head'
import ContainerBlock from '../components/ContainerBlock';


// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <ContainerBlock
      title="Christopher Rolke - Developer, Visionary and Creator">
      <sectio class="nav">
    <h1>Christopher Rolke</h1>
    <h3 class="span loader"><span class="m">D</span><span class="m">E</span><span class="m">V</span><span class="m">E</span><span class="m">L</span><span class="m">O</span><span class="m">P</span><span class="m">E</span><span class="m">R</span><span class="m">&nbsp;</span><span class="m"><span class="m">V</span></span><span class="m">I</span><span class="m">S</span><span class="m">I</span><span class="m">O</span><span class="m">N</span><span class="m">A</span><span class="m">R</span><span class="m">Y</span><span class="m">&nbsp;</span><span class="m">a</span><span class="m">n</span><span class="m">d</span><span class="m">&nbsp;</span><span class="m">C</span><span class="m">R</span><span class="m">E</span><span class="m">A</span><span class="m">T</span><span class="m">O<span class="m">R</span></span></h3>
    <div class="nav-container"><a class="nav-tab" href="#tab-about">About</a><a class="nav-tab" href="#tab-resume">Resume</a><a class="nav-tab" href="#tab-contact">Contact</a><span class="nav-tab-slider"></span></div>
</sectio>
<main class="main">
        <div data-aos="fade-in">
            <h1>GraphQL</h1>
            <h2>a query language for APIs</h2>
        </div>
</main>
    </ContainerBlock>

  );
}
