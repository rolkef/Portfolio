import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../images/Logo.svg';
import React, { useState } from 'react';


export default function Navbar(){
    const router = useRouter();
    const currentRoute = router.pathname;
    const [open, setOpen] = useState(false);

    
    return(
        <>
            <nav className="navbar w-full px-2 sm:px-4 py-2.5 rounded" id="navbar">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className='ml-5 mr-8 heartbeat'><Image src={logo} width={50} height={50}/></a>
                    <button
                        className="md:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
                        onClick={() => setOpen(!open)}
                        >
                        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <span
                            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                                open ? "rotate-45 delay-200" : "-translate-y-1.5"
                            }`}
                            ></span>
                            <span
                            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                                open ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                            }`}
                            ></span>
                            <span
                            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                                open ? "-rotate-45 delay-200" : "translate-y-1.5"
                            }`}
                            ></span>
                        </div>
                        </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className={currentRoute === "/" ? "active" : "non-active"} onClick={() => {
                                        setOpen(false);
                                    }}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" href="/about">
                                    <a className={currentRoute === "/about" ? "active" : "non-active"} onClick={() => {
                                        setOpen(false);
                                    }}>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/resume">
                                    <a className={currentRoute === "/resume" ? "active" : "non-active"} onClick={() => {
                                    setOpen(false);
                                }}>Resume</a>
                                </Link>
                            </li>
                            
                            <li>
                                <Link href="/contact">
                                    <a className={currentRoute === "/contact" ? "active" : "non-active"} onClick={() => {
                                    setOpen(false);
                                }}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden w-full" id="navbar-mobile">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className={currentRoute === "/" ? "active" : "non-active"} onClick={() => {
                                        setOpen(false);
                                    }}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" href="/about">
                                    <a className={currentRoute === "/about" ? "active" : "non-active"} onClick={() => {
                                        setOpen(false);
                                    }}>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/resume">
                                    <a className={currentRoute === "/resume" ? "active" : "non-active"} onClick={() => {
                                    setOpen(false);
                                }}>Resume</a>
                                </Link>
                            </li>
                            
                            <li>
                                <Link href="/contact">
                                    <a className={currentRoute === "/contact" ? "active" : "non-active"} onClick={() => {
                                    setOpen(false);
                                }}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
