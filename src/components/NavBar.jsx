import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiMenu } from "react-icons/bi"
import headerLogo from '../assets/logo-header.svg';
import NavItemMenu from './navComponents/NavItemMenu';
import CartCounter from './navComponents/navBar/CartCounter';

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [ navigateHome, setNavigateHome ] = useState(false)
    const [ navData, ] = useState([
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
            'name': 'blog',
            'url': 'blog'
        },
        {
            'name': 'nosotros',
            'url': 'nosotros'
        }
    ])
    const [ hideMenu, setHideMenu ] = useState(false)

    useEffect(() => {
        location.pathname !== '/' ? setNavigateHome(true) : setNavigateHome(false)
    }, [location])

    return (
        <nav className='fixed w-full py-3 md:px-10 shadow-sm z-40 px-4 bg-white'>
            <div className='relative inset-0 w-full h-fit flex flex-col lg:flex-row justify-between items-center'>
                <div
                    className=
                        {
                            navigateHome ?
                                'w-[4.75rem] lg:w-20 cursor-pointer'
                            : 'w-[4.75rem] lg:w-20 cursor-auto'
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
                />
                <div className='absolute inset-0 lg:static w-full lg:w-fit flex items-center justify-center gap-36 mt-2 lg:mt-0'>
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
