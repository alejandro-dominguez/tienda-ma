import {
    Outlet,
    ScrollRestoration,
    useLocation
} from 'react-router-dom';
import {
    NavBar,
    WhatsAppBtn,
    Footer
} from '../../components';
import {
    useEffect,
    useState
} from 'react';
import { shortenText } from '../../utilities';

const Root = () => {
    const location = useLocation()
    const [showBtn, setShowBtn] = useState(true)
    const detailLocation = shortenText(location.pathname, 9)
    const blogLocation = shortenText(location.pathname, 6)

    useEffect(() => {
        location.pathname === '/nosotros' ||
        detailLocation === '/detalle/...' ||
        blogLocation === '/blog/...'
        ? setShowBtn(false)
        : setShowBtn(true)
    }, [location])

    return (
        <div className='relative min-h-screen min-h-[100svh] w-full'>
            <NavBar />
            <Outlet />
            {showBtn ? <WhatsAppBtn /> : null}
            <Footer />
            <ScrollRestoration />
        </div>
    )
};

export default Root;
