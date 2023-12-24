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
            <IoLogoWhatsapp className='cursor-pointer text-green-600/80 text-4xl fixed bottom-1/4 right-10 drop-shadow-md' />
        </Link>
    )
};

export default WhatsAppBtn;
