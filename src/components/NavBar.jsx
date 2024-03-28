import {
    useEffect,
    useState
} from 'react';
import {
    useLocation,
    useNavigate
} from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import headerLogo from '../assets/logo-header.svg';
import NavItemMenu from './navComponents/NavItemMenu';
import CartCounter from './navComponents/navBar/CartCounter';

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [ navigateHome, setNavigateHome ] = useState(false)
    const [ showNav, setShowNav ] = useState(true)
    const [ hideMenu, setHideMenu ] = useState(false)
    const [ navData, ] = useState([
        {
            'twoLines': true,
            'nameLine1': 'pañales',
            'nameLine2': 'bebé',
            'url': 'categorias/bebe/pañales-bebe'
        },
        {
            'twoLines': true,
            'nameLine1': 'pañales',
            'nameLine2': 'adulto',
            'url': 'categorias/adulto/pañales-adulto'
        },
        {
            'twoLines': true,
            'nameLine1': 'higiene y',
            'nameLine2': 'cuidado',
            'url': 'categorias/higiene'
        },
        {
            'twoLines': false,
            'name': 'accesorios',
            'url': 'categorias/accesorios'
        },
        {
            'twoLines': false,
            'name': 'blog',
            'url': 'blogs'
        },
        {
            'twoLines': false,
            'name': 'mayoristas',
            'url': 'mayoristas'
        },
    ])
    
    const controlNavBar = () => {
        window.scrollY > 120 ? setShowNav(false) : setShowNav(true)
    }
    
    const responsiveViewport = () => window.visualViewport.width < 1024 ? setHideMenu(true) : setHideMenu(false)

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar)
        return () => window.removeEventListener('scroll', controlNavBar)
    }, [])

    useEffect(() => {
        location.pathname !== '/' ? setNavigateHome(true) : setNavigateHome(false)
    }, [location])

    useEffect(() => {
        responsiveViewport()
    }, [])

    return (
        <nav className=
            {
                showNav ?
                    'fixed shadow-sm z-40 w-full transition-all duration-200 ease-linear top-0 opacity-100'
                :
                    'fixed shadow-sm z-40 w-full transition-all duration-200 ease-linear -top-40 opacity-0'
            }
        >
            <div className='relative w-full py-3 px-4 md:px-10 bg-white h-fit flex flex-col lg:flex-row justify-between items-center'>
                    <div
                        className=
                            {
                                navigateHome ?
                                    'w-[5.5rem] cursor-pointer z-10'
                                :
                                    'w-[5.5rem] cursor-auto z-10'
                            }
                        onClick={() => {navigateHome ? navigate('/') : null}}
                    >
                        <img
                            src={headerLogo}
                            alt='logo tienda Ma'
                            className='w-full block'
                        />
                    </div>
                <NavItemMenu
                    navData={navData}
                    hideMenu={hideMenu}
                    showNav={showNav}
                />
                <div className='absolute inset-0 lg:static w-full bg-white lg:w-fit flex items-center justify-center gap-40 mt-2 lg:mt-0'>
                    <CartCounter />
                    <BiMenu
                        className='lg:hidden block text-5xl text-zinc-800/80 cursor-pointer'
                        onClick={() => setHideMenu(!hideMenu)}
                    />
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
