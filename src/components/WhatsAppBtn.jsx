import { IoLogoWhatsapp } from 'react-icons/io';
import { Link } from 'react-router-dom';

const WhatsAppBtn = () => {
    return (
        <Link
            to='https://wa.me/+5493416630000'
            referrerPolicy='no-referrer'
            rel='noopener'  
            target='_blank'
        >
            <div className='fixed bottom-[16%] sm:bottom-[17%] right-2 p-[.35rem] sm:p-[.45rem] bg-zinc-300/80 rounded-full
            grid place-items-center drop-shadow'>
                <IoLogoWhatsapp className='block cursor-pointer mb-[.02rem] mt-[.025rem] ml-[.03rem] mr-[.015rem]
                text-green-700/95 text-3xl sm:text-[2rem] drop-shadow' />
            </div>
        </Link>
    )
};

export default WhatsAppBtn;
