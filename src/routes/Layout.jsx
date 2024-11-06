import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import WhatsAppBtn from '../components/WhatsAppBtn';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div
            className='relative min-h-[100svh] w-full'
            id='router'
        >
            <NavBar />
            <Outlet />
            <WhatsAppBtn />
            <Footer />
        </div>
    )
};

export default Layout;
