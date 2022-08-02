import Link from 'next/link';
import { motion } from 'framer-motion';
import ContainerBlock from '../components/ContainerBlock';


// import styles from '../styles/Home.module.css';

export default function About() {
    return (
        <ContainerBlock title="Christopher Rolke - About">
            <header id="header" class="header-top">
                <div class="container">
                    <a href="/">Christopher Rolke</a>
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/resume">
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="w-full h-full flex px-52 pt-3">
                <div className="h-full w-full flex justify-center bg-black min-h-screen opacity-90">
            </div>
        </div>
    </ContainerBlock>
    )
};
