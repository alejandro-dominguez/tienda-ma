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
import shortenText from '../../utilities/shortenText';

const Root = () => {
    const location = useLocation()
    const [showBtn, setShowBtn] = useState(true)
    const detailLocation = shortenText(location.pathname, 9)

    useEffect(() => {
        location.pathname === '/nosotros' ||
        detailLocation === '/detalle/...'
        ? setShowBtn(false)
        : setShowBtn(true)
    }, [location])

    return (
        <div className='relative min-h-[100svh] w-full'>
            <NavBar />
            <Outlet />
            {showBtn ? <WhatsAppBtn /> : null}
            <Footer />
            <ScrollRestoration />
        </div>
    )
};

export default Root;
