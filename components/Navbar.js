import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../images/Logo.svg';

export default function Navbar(){
    const router = useRouter();
    const currentRoute = router.pathname;
    return(
        <>
            <nav className="navbar w-full px-2 sm:px-4 py-2.5 rounded" id="navbar">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className='ml-5 mr-8 heartbeat'><Image src={logo} width={50} height={50}/></a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className={currentRoute === "/" ? "active" : "non-active"}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" href="/about">
                                    <a className={currentRoute === "/about" ? "active" : "non-active"}>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/resume">
                                    <a className={currentRoute === "/resume" ? "active" : "non-active"}>Resume</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a className={currentRoute === "/contact" ? "active" : "non-active"}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}