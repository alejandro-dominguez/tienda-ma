import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavBar, Footer } from '../../components';

const Root = () => {
    return (
        <div className='relative min-h-screen w-full'>
            <NavBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    )
}

export default Root;
