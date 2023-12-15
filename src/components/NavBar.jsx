import headerLogo from '../assets/logo-header.svg';
import NavItemMenu from './navComponents/NavItemMenu';
import CartCounter from './navComponents/navBar/CartCounter';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [navData,] = useState([
        {
            'name': 'bebé',
            'url': 'categorias/bebe'
        },
        {
            'name': 'mamá',
            'url': 'categorias/mama'
        },
        {
            'name': 'adultos',
            'url': 'categorias/adultos'
        },
        {
            'name': 'accesorios',
            'url': 'categorias/accesorios'
        },
        {
            'name': 'nosotros',
            'url': 'nosotros'
        }
    ])
    const location = useLocation()
    const navigate = useNavigate()
    const [navigateHome, setNavigateHome] = useState(false)

    useEffect(() => {
        location.pathname !== '/' ? setNavigateHome(true) : setNavigateHome(false)
    }, [location])

    return (
        <nav className='fixed w-full grid place-items-center md:flex md:justify-between md:items-center bg-[#fff7f4]/90
        py-4 md:px-10 shadow-md shadow-red-600/10 z-40 backdrop-blur-[3px]'>
            <div
                className={navigateHome ? 'w-24 cursor-pointer' : 'w-24 cursor-auto'}
                onClick={() => {navigateHome ? navigate("/") : null}}
            >
                <img
                    src={headerLogo}
                    alt='logo tienda Ma'
                    className='w-full block'
                />
            </div>    
            <NavItemMenu navData={navData} />
            <CartCounter />
        </nav>
    )
};

export default NavBar;
