import {
    Outlet,
    ScrollRestoration,
    useLocation
} from 'react-router-dom';
import {
    useEffect,
    useState
} from 'react';
import NavBar from '../../components/NavBar';
import WhatsAppBtn from '../../components/WhatsAppBtn';
import Footer from '../../components/Footer';

const Root = () => {
    const [ restoreScroll, setRestoreScroll ] = useState(false)
    const location = useLocation()
    
    useEffect(() => {
        (
            location.pathname === ('/') ||
            location.pathname.includes('/blogs') ||
            location.pathname.includes('/detalle') ||
            location.pathname.includes('/carrito') ||
            location.pathname.includes('/nosotros') ||
            location.pathname.includes('/talles') ||
            location.pathname.includes('/terminos&condiciones') ||
            location.pathname.includes('/devoluciones')
        ) ?
            setRestoreScroll(true) 
        :
            setRestoreScroll(false)
    }, [location])
    
    return (
        <div
            className='relative min-h-[100svh] w-full'
            id='router'
        >
            <NavBar />
            <Outlet />
            <WhatsAppBtn />
            <Footer />
            {
                restoreScroll ?
                    <ScrollRestoration />
                :
                    null
            }
        </div>
    )
};

export default Root;
