import { BiSolidCaretUpCircle } from 'react-icons/bi';
import { scrollTop } from '../utilities/';
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import footerLogo from '../assets/logo-footer.svg';

const Footer = () => {
    const [showBtn, setshowBtn] = useState(true)
    const location = useLocation()

    useEffect(() => {
        location.pathname === '/nosotros' ? setshowBtn(false) : setshowBtn(true)
    }, [location])

    return (
        <footer className='absolute bottom-0 w-full grid place-items-center bg-[#2c9bba] z-20'>
            <div className='relative w-full flex md:flex-row md:items-center md:justify-between md:px-10 py-4'>
                <Link
                    to={'https://portfolio-alejandro-dominguez.vercel.app/'}
                    referrerPolicy='no-referrer'
                    rel='noopener'
                    target='_blank'
                >
                    <small className='text-white tracking-wide text-sm drop-shadow-sm'>
                        &copy; 2023 Alejandro Dominguez
                    </small>
                </Link>
                {showBtn ?
                    <BiSolidCaretUpCircle
                        className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 block text-5xl cursor-pointer
                        text-teal-50 drop-shadow transition-colors hover:text-[#70faff] focus:text-[#f1b4b4]'
                        onClick={() => scrollTop()}
                    />
                : null}
                <div className=' w-16'>
                    <img
                        src={footerLogo}
                        alt='icono tienda ma'
                        className='block w-full'
                    />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
