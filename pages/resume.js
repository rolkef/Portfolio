import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';


export default function Resume() {
    const router = useRouter();
    const noNav = ["/", ""];
    return (
        <>
            <Layout title="Christopher Rolke - Resume">
                {noNav.includes(router.pathname) ? null : <Navbar/>}
                <section id="resume" className="resume section-show">
                    <div className="container">
                        <div className="section-title">
                            <h2 className='text-left'>Resume</h2>
                            <p className='text-left'>View my resume</p>
                        </div>
                        <div className="row">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className="col-span-1" data-aos="fade-rigt">
                                    <h3 className='resume-title'>Sumary</h3>
                                    <div className='resume-item pb-0'>
                                        <h4>Christopher Rolke</h4>
                                        <p><em>
                                            Highly motivated and future-oriented project manager and software developer with a passion for creating and managing software that is intuitive, efficient, and user-friendly.
                                        </em></p>
                                        <ul className='mt-4 list-disc'>
                                            <li>
                                                Location: Graz, Austria
                                            </li>
                                            <li>
                                                Email: christopher.rolke@edu.fh-joanneum.at
                                            </li>
                                        </ul>
                                        <p>
                                        </p>
                                    </div>
                                    <h3 className='resume-title'>Education</h3>
                                    <div className='resume-item'>
                                        <h4>Bachelor of Science in Engineering</h4>
                                        <h5>2020 - 2022</h5>
                                        <p><em>FH JOANNEUM GmbH, Graz, Austria</em></p>
                                        <p className='mt-4'>I completed the bachelor's degree program in Information Management at the FH Joanneum in Graz with distinction. Within this curriculum I learned how to professionally orchestrate processes and manage projects, as well as how to program my own programs and websites. During the study period, a variety of projects from planning, coordinating, to the presentation of the results were carried out by me alone and also within different teams.</p>
                                    </div>
                                    <div className='resume-item'>
                                        <h4>Higher School Certificate</h4>
                                        <h5>2012 - 2019</h5>
                                        <p><em>Bischöfliches Gymnasium, Graz, Austria</em></p>
                                        <p className='mt-4'>The "Bischöfliches Gymnasium Graz" is a general secondary school where I spent my 8 years until the Matura.</p>
                                    </div>
                                </div>
                                <div className="col-span-1" data-aos="fade-left">
                                    <h3 className='resume-title'>Experience</h3>
                                    <div className='resume-item'>
                                        <h4>Student assistant in project management</h4>
                                        <h5>2022 - Present</h5>
                                        <p><em>AVL, Graz, Austria</em></p>
                                        <p className='mt-4'>I currently work at AVL List in Graz, where I support the project management department. My activities include the supervision of software rollouts, which are deployed globally, as well as the coordination of program developments and the testing of the final products.</p>
                                        <p className='mt-1'>
                                        The most used skills include:
                                        </p>
                                        <ul className='list-disc mt-4'>
                                            <li>Coordination</li>
                                            <li>Software Development</li>
                                            <li>Project Management</li>
                                            <li>UI Testing</li>
                                        </ul>
                                        <p></p>
                                    </div>
                                    <div className='resume-item'>
                                        <h4>Administrator</h4>
                                        <h5>2020 - 2022</h5>
                                        <p><em>Uranschek GmbH, Graz, Austria</em></p>
                                        <p className='mt-4'>
                                            From 2020-2022 I worked at Uranschek GmbH as a system administrator. My responsibilities were managing and maintaining network devices, developing internal software solutions and managing access permissions.
                                        </p>
                                        <p className='mt-1'>
                                            The most used skills included:
                                        </p>
                                        <ul className='list-disc mt-4'>
                                            <li>Network Management</li>
                                            <li>Software Development</li>
                                        </ul>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}