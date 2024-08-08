import {
    useEffect,
    useState
} from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io';

const WhatsAppBtn = () => {
    const [ showBtn, setShowBtn ] = useState(true)
    const location = useLocation()
    
    useEffect(() => {
      location.pathname.includes('/admin/consola') ? setShowBtn(false) : setShowBtn(true)
    }, [location])

    return (
        <>
        {
            showBtn ?
                <div
                    className='fixed bottom-[16%] sm:bottom-[17%] right-2 grid place-items-center'
                    id='wspBtn'
                >
                    <Link
                        to='https://wa.me/+5493416630000'
                        referrerPolicy='no-referrer'
                        rel='noopener'  
                        target='_blank'
                    >
                        <div className='p-[.35rem] sm:p-[.45rem] bg-zinc-300/80 rounded-full drop-shadow'>
                            <IoLogoWhatsapp className='block cursor-pointer mb-[.02rem] mt-[.025rem] ml-[.03rem] mr-[.015rem]
                            text-green-700/95 text-3xl sm:text-[2rem] drop-shadow' />
                        </div>
                    </Link>
                </div>
            :
                null
        }
        </>
    )
};

export default WhatsAppBtn;
