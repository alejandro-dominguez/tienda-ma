import {
    Outlet,
    ScrollRestoration
} from 'react-router-dom';
import NavBar from '../../components/NavBar';
import WhatsAppBtn from '../../components/WhatsAppBtn';
import Footer from '../../components/Footer';

const Root = () => {
    return (
        <div className='relative min-h-[100svh] w-full'>
            <NavBar />
            <Outlet />
            <WhatsAppBtn />
            <Footer />
            <ScrollRestoration />
        </div>
    )
};

export default Root;
