import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';


export default function Resume() {
    const router = useRouter();
    const noNav = ["/", ""];
    return (
        <>
            <Layout title="Christopher Rolke - Contact">
                {noNav.includes(router.pathname) ? null : <Navbar/>}
                <section id="contact" className='contact section-show'>
                    <div className="container">
                        <div className="section-title">
                            <h2 className='text-left'>Contact</h2>
                            <p className='text-left'>Contact Me</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1 flex items-stretch">
                                <div className="info-box">
                                    <i class="bi bi-envelope-fill"></i>
                                    <h3>Email Me</h3>
                                    <p>christopher.rolke@edu.fh-joanneum.at</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </Layout>
        </>
    )
}