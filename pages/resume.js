import Link from 'next/link';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../images/Logo.svg';


// import styles from '../styles/Home.module.css';

export default function Resume() {
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <Layout title="Christopher Rolke - About">
            
        </Layout>
    )
}