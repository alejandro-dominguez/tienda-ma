import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { NavBar, Footer } from '../../components';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useEffect } from 'react';

const Root = () => {
    const location = useLocation()

    useEffect(() => {
        console.log(location)
    }, [location])
    /* location.pathname === '/nosotros' || location.pathname === '/' || location.pathname === '/' ? setshowBtn(false) : setshowBtn(true) */
    return (
        <div className='relative min-h-screen w-full'>
            <NavBar />
            <Outlet />
            {
                <IoLogoWhatsapp className='cursor-pointer text-green-600/80 text-4xl fixed bottom-1/4 right-10 drop-shadow-md' />
            }
            <Footer />
            <ScrollRestoration />
        </div>
    )
}

export default Root;
