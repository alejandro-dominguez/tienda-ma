import { scrollTop, shortenText } from '../utilities/';
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { BiSolidCaretUpCircle } from 'react-icons/bi';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
    const [ showBtn, setshowBtn ] = useState(true)
    const location = useLocation()
    const detailLocation = shortenText(location.pathname, 9)

    useEffect(() => {
        location.pathname === '/nosotros' || detailLocation === '/detalle/...' ? setshowBtn(false) : setshowBtn(true)
    }, [location])

    return (
        <footer className='w-full grid place-items-center bg-white z-10'>
            <div className='w-full flex md:flex-row md:items-center md:justify-between md:px-10 py-2'>
                {
                    showBtn ?
                        <BiSolidCaretUpCircle
                            className='block text-[1.55rem] cursor-pointer text-zinc-600 drop-shadow'
                            onClick={() => scrollTop()}
                        />
                    : 
                        null
                }
            </div>
        </footer>
    )
};

export default Footer;

{/* <Link
to='https://portfolio-alejandro-dominguez.vercel.app/'
referrerPolicy='no-referrer'
rel='noopener'
target='_blank'
>
<small className='leading-4 tracking-wide text-xs drop-shadow-sm grid place-items-center'>
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
</Link> */}