
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Navbar from "..//components/Navbar";
import HeroImage from "../images/Profilbild.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


// import styles from '../styles/Home.module.css';

export default function About() {
    const router = useRouter();
    const noNav = ["/", ""];
    return (
        <>
            <Layout title="Christopher Rolke - About">
                {noNav.includes(router.pathname) ? null : <Navbar/>}
                <section id="about" className="about section-show">
                    <div className="about-me container pb-4">
                        <div className="section-title">
                            <h2 className='text-left'>About</h2>
                            <p className='text-left'>Learn more about me</p>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                            <div className='col-span-1' data-aos="fade-right">
                                <Image src={HeroImage} height={390} width={300} />
                                
                            </div>
                            <div className="content col-span-2" data-aos="fade-left">
                                <h3>Softwaredeveloper & Project Manager</h3>
                                <p className="text-white">
                                    I am a programmer and project manager whose mission is to shape the future.
                                </p><br></br>
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Birthday:</strong> <span className='text-white'>31 August 2000</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>City:</strong> <span className='text-white'>Graz, Austria</span></li>
                                </ul>
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Age:</strong> <span className='text-white'>21</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Degree:</strong> <span className='text-white'>Bachelor</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Email:</strong> <span className='text-white'>christopher.rolke@edu.fh-joanneum.at</span></li>
                                </ul>
                                <p className='text-white'>
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="skills container">
                        <div className="section-title">
                            <h2 className='text-left'>Skills</h2>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-3 gap-x-10 skills-content">
                            <div className='col-span-1' data-aos="fade-down-right">
                                <div className='progress'>
                                    <span className="skill">
                                        Python
                                        <i className="val">100%</i>
                                    </span>
                                    <div className="progress-bar load100">
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1' data-aos="fade-down-left">
                                <div className='progress'>
                                    <span className="skill">
                                        HTML
                                        <i className="val">100%</i>
                                    </span>
                                    <div className="progress-bar load100">
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1' data-aos="fade-right">
                                <div className='progress'>
                                    <span className="skill">
                                        C#
                                        <i className="val">80%</i>
                                    </span>
                                    <div className="progress-bar load80">
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1' data-aos="fade-left">
                                <div className='progress'>
                                    <span className="skill">
                                        Linksphere
                                        <i className="val">100%</i>
                                    </span>
                                    <div className="progress-bar load100">
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1' data-aos="fade-right">
                                <div className='progress'>
                                    <span className="skill">
                                        Kotlin
                                        <i className="val">85%</i>
                                    </span>
                                    <div className="progress-bar load85">
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1' data-aos="fade-left">
                                <div className='progress'>
                                    <span className="skill">
                                        Angular
                                        <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar load75">
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1' data-aos="fade-up-right">
                                <div className='progress'>
                                    <span className="skill">
                                        Nextjs
                                        <i className="val">80%</i>
                                    </span>
                                    <div className="progress-bar load80">
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1' data-aos="fade-up-left">
                                <div className='progress'>
                                    <span className="skill">
                                        Tailwindcss
                                        <i className="val">90%</i>
                                    </span>
                                    <div className="progress-bar load90">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="interests container">
                        <div className="section-title">
                            <h2 className='text-left'>Interests</h2>
                        </div>

                    </div>
                </section>
            </Layout>
        </>
    )
};
