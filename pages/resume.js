import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';


export default function Resume() {
    const router = useRouter();
    const noNav = ["/", ""];
    return (
        <>
            <Layout title="Christopher Rolke - Resume">
                {noNav.includes(router.pathname) ? null : <Navbar/>}
                
            </Layout>
        </>
    )
}