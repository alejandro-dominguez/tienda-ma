import { Link } from 'react-router-dom'
import { BiSolidCaretUpCircle } from 'react-icons/bi';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaTruck } from 'react-icons/fa';
import scrollTop from '../utilities/scrollTop';

const Footer = () => {
    return (
        <footer className='w-full grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-5 md:gap-0 md:px-10 bg-white z-10'>
            <div className='flex flex-col items-start justify-start'>
                <h3 className='font-Raleway font-black text-xl text-zinc-800'>
                    Contáctanos
                </h3>
                <div className='flex items-center gap-2 mt-2'>
                    <BsFillTelephoneFill className='text-[1.3rem] text-zinc-900' />
                    <span className='font-bold font-Lato drop-shadow-sm text-sm'>
                        3416 630 000
                   </span>
                </div>
                <div className='flex items-center gap-2 mt-1'>
                    <MdEmail className='text-[1.43rem] text-zinc-900' />
                    <span className='font-bold font-Lato drop-shadow-sm text-sm'>
                        contacto.tiendama@gmai.com
                    </span>
                </div>
                <div className='flex items-center gap-2 mt-1'>
                    <PiInstagramLogoFill className='text-2xl text-zinc-900' />
                    <span className='font-bold font-Lato drop-shadow-sm text-sm'>
                        @tiendama_rosario
                    </span>
                </div>
            </div>
            <div className='flex flex-col items-start justify-end mt-0 md:mt-4 lg:mt-0'>
                <h3 className='font-Raleway font-black text-base text-zinc-800'>
                    Zona de Envíos:
                </h3>
                <div className='flex items-center gap-2 mt-1'>
                    <FaTruck className='text-[1.3rem] text-zinc-900' />
                    <span className='font-bold font-Lato drop-shadow-sm text-sm'>
                        Rosario y Gran Rosario
                   </span>
                </div>
            </div>
            <BiSolidCaretUpCircle
                className='block self-end justify-self-center text-[1.55rem] cursor-pointer text-zinc-600 drop-shadow'
                onClick={() => scrollTop()}
            />
            <div className='justify-self-center self-end md:justify-self-end'>
                <Link
                    to='https://portfolio-alejandro-dominguez.vercel.app/'
                    referrerPolicy='no-referrer'
                    rel='noopener'
                    target='_blank'
                >
                    <small className='leading-4 tracking-wide text-center text-xs drop-shadow-sm grid place-items-centerr'>
                        <span>
                            &copy; 2023 
                        </span>
                        <span>
                            Alejandro Dominguez
                        </span>
                        <span>
                            Yamil Gaggiotti
                        </span>
                    </small>
                </Link>
            </div>
        </footer>
    )
};

export default Footer;
