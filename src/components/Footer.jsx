import { BiSolidCaretUpCircle } from 'react-icons/bi';
import { scrollTop } from '../utilities/';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/logo-footer.svg';

const Footer = () => {
    return (
        <footer className='absolute bottom-0 w-full flex md:flex-row md:items-center md:justify-between md:px-10 py-4 bg-[#2c9bba]'>
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
            <BiSolidCaretUpCircle
                className='text-5xl cursor-pointer text-teal-50 drop-shadow transition-colors
                hover:text-[#70faff] focus:text-[#f1b4b4]'
                onClick={() => scrollTop()}
            />
            <div className=' w-16'>
                <img
                    src={footerLogo}
                    alt='icono tienda ma'
                    className='block w-full'
                />
            </div>
        </footer>
    )
};

export default Footer;
