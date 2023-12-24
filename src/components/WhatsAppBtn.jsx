import { IoLogoWhatsapp } from 'react-icons/io';
import { Link } from 'react-router-dom';

const WhatsAppBtn = () => {
    return (
        <Link
            to='https://wa.me/+5493413042903'
            referrerPolicy='no-referrer'
            rel='noopener'
            target='_blank'
        >
            <div className='fixed md:bottom-[16%] right-10 p-[.35rem] bg-white/60 rounded-full grid place-items-center'>
                <IoLogoWhatsapp className='block cursor-pointer text-green-600/80 text-4xl drop-shadow-md' />
            </div>
        </Link>
    )
};

export default WhatsAppBtn;
