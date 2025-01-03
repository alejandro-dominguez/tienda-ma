import {
    FaTruck,
    FaUserCircle
} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { Link } from 'react-router-dom'
import { BiSolidCaretUpCircle } from 'react-icons/bi';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import scrollTop from '../utilities/scrollTop';

const Footer = () => {
    const { authUser } = useContext(AuthContext)

    return (
        <footer className='w-full grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-5 md:gap-0 md:px-10 bg-white z-10'>
            <div className='flex flex-col items-start mt-0 md:mt-4 lg:mt-0 gap-2'>
                <Link
                    to='/nosotros'
                    className='font-Raleway font-black text-zinc-800 border-b-[3px] border-red-500/50'
                >
                    Nosotros
                </Link>
                <Link
                    to='/talles'
                    className='font-Raleway font-black text-zinc-800 border-b-[3px] border-red-500/50'
                >
                    Guía de Talles
                </Link>
                <div className='flex flex-col justify-self-end mt-2'>
                    <h3 className='font-Raleway font-black text-zinc-800'>
                        Zona de Envíos:
                    </h3>
                    <div className='flex justify-start gap-2'>
                        <FaTruck className='block text-[1.4rem] text-zinc-900' />
                        <span className='font-bold font-Lato drop-shadow-sm'>
                            Rosario y Gran Rosario
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start sm:mt-4 lg:mt-0 gap-1'>
                <h3 className='font-Raleway font-black text-zinc-800'>
                    Contáctanos
                </h3>
                <Link
                    to='https://wa.me/+5493416630000'
                    referrerPolicy='no-referrer'
                    rel='noopener'  
                    target='_blank'
                    className='flex justify-start gap-2 mt-2'
                >
                    <BsFillTelephoneFill className='block text-[1.3rem] text-zinc-900' />
                    <span className='font-bold font-Lato drop-shadow-sm'>
                        3416 630 000
                   </span>
                </Link>
                <Link
                    to='https://www.instagram.com/panalera_tiendama_rosario/'
                    referrerPolicy='no-referrer'
                    rel='noopener'  
                    target='_blank'
                    className='flex justify-start gap-2 mt-1'
                >
                    <PiInstagramLogoFill className='block text-2xl text-zinc-900' />
                    <span className='font-bold font-Lato drop-shadow-sm'>
                        @panalera_tiendama_rosario
                    </span>
                </Link>
                <Link
                    to='mailto:contacto.tiendama@gmail.com'
                    referrerPolicy='no-referrer'
                    rel='noopener'  
                    target='_blank'
                    className='flex justify-start gap-2 mt-1'
                >
                    <MdEmail className='block text-[1.43rem] text-zinc-900' />
                    <span className='font-bold font-Lato drop-shadow-sm'>
                        contacto.tiendama@gmail.com
                    </span>
                </Link>
            </div>
            <div className='flex flex-col items-start sm:mt-5 lg:ml-12 lg:mt-0 gap-1'>
                <Link to='/terminos&condiciones'>
                    <span className='font-bold tracking-wide text-[.9rem] drop-shadow-sm'>
                        Términos y condiciones
                    </span>
                </Link>
                <Link to='/devoluciones'>
                    <span className='font-bold tracking-wide text-[.9rem] drop-shadow-sm'>
                        Devoluciones
                    </span>
                </Link>
                <Link
                    to='https://portfolio-alejandro-dominguez.vercel.app/'
                    referrerPolicy='no-referrer'
                    rel='noopener'
                    target='_blank'
                    className='mt-2'
                >
                    <small className='leading-[.9rem] tracking-wide text-[.7rem] drop-shadow-sm grid place-items-start gap-1 mt-1'>
                        <span>
                            &copy; 2024
                        </span>
                        <span>
                            Alejandro Dominguez
                        </span>
                    </small>
                </Link>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <BiSolidCaretUpCircle
                    className='block text-2xl cursor-pointer text-red-500/60 drop-shadow'
                    onClick={() => scrollTop()}
                />
                <Link
                    to=
                        {
                            localStorage.getItem('authUser') || authUser ?
                                '/admin/consola'
                            :
                                '/admin'
                        }
                    className='mt-auto'
                >
                    <div className='flex justify-start items-center gap-2'>
                        <FaUserCircle className='block text-lg text-zinc-900' />
                        <span className='font-bold font-Lato drop-shadow-sm text-sm'>
                            admin
                        </span>
                    </div>
                </Link>
            </div>
        </footer>
    )
};

export default Footer;
