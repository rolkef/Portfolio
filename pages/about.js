
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Navbar from "..//components/Navbar";
import HeroImage from "../images/Hero_Image.png"
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
                <section id="about" class="about section-show">
                    <div class="about-me container">
                        <div class="section-title">
                            <h2>About</h2>
                            <p>Learn more about me</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-4" data-aos="fade-right">
                                <Image src={HeroImage} width={150} height={130} />
                                
                            </div>
                            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Softwaredeveloper</h3>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <div class="row">
                                    <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Birthday:</strong> <span className='text-white'>31 August 2000</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Phone:</strong> <span className='text-white'>+43 664 2042567</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>City:</strong> <span className='text-white'>Graz, Austria</span></li>
                                    </ul>
                                    </div>
                                    <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Age:</strong> <span className='text-white'>21</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Degree:</strong> <span className='text-white'>Bachelor</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong className='text-white'>Email:</strong> <span className='text-white'>christopher.rolke@edu.fh-joanneum.at</span></li>
                                    </ul>
                                    </div>
                                </div>
                                <p>
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
};
