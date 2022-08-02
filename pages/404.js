import Link from 'next/link';
import ContainerBlock from '../components/ContainerBlock';

export default function FourOhFour() {
    return <>
        <ContainerBlock>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='col-span-1'>
                    <h1 className='text-white'>404</h1>
                </div>
            </div>
            <h1>404 - Page Not Found</h1>
            <Link href='/'>
                <a>
                    <button>Go Home</button>
                </a>
            </Link>
        </ContainerBlock>
    </>
}