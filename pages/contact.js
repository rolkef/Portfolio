import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';


export default function Resume( {KEY} ) {
    const router = useRouter();
    const noNav = ["/", ""];
    const [query, setQuery] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    

    const handleParam = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });
        fetch(KEY, {
            method: "POST",
            body: formData,
        }).then(() => setQuery({ name: "", email: "", subject:"", message: ""}));
    };
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
                            <div className = "col-span-1 flex items-stretch text-left" >
                                <div className="info-box">
                                    <i class="bx bi-share-fill"></i>
                                    <h3>Social Profiles</h3>
                                    <div className='social-links'>
                                        <a className='social linkedin' href='https://www.linkedin.com/in/christopher-rolke/'><i className="bi bi-linkedin"></i></a>
                                        <a className='social twitter' href="https://twitter.com/rolkef"><i class="bi bi-twitter"></i></a>
                                        <a className='social github' href="https://github.com/rolkef">
                                        <i className="bi bi-github"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-span-1 text-left" >
                                <div className="info-box">
                                    <i class="bx bi-envelope-fill"></i>
                                    <h3>Email Me</h3>
                                    <p>christopher.rolke@edu.fh-joanneum.at</p>
                                </div>
                            </div>
                        </div>
                        <form className="php-email-form mt-4" onSubmit={formSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1 form-group">
                                    <input className='form-control' type="text" name="name" placeholder="Your Name" value={query.name} onChange={handleParam()} required />
                                </div>
                                <div className='col-span-1 form-group'>
                                    <input id="email" className='form-control' type="email" name="email" placeholder="Your Email" value={query.email} onChange={handleParam()} required />
                                </div>
                            </div>
                            <div className='form-group mt-3'>
                                <input id="subject" className="form-control" type="text" name="subject" placeholder="Subject" value={query.subject} onChange={handleParam()} required />
                            </div>
                            <div className='form-group mt-3'>
                                <textarea id="message" className="form-control" name="message" placeholder="Message" value={query.message} onChange={handleParam()} required></textarea>
                            </div>
                            <div className="my-3">
                                <div className='loading'>Loading</div>
                                <div className='error-message'></div>
                                <div className='sent-message'>Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
                
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const key = process.env.FormKey;
    return {
        props: {
            KEY: key,
        },
    };
}