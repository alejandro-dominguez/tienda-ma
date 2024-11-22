import {
    useEffect,
    useState
} from 'react';
import { BsBagHeartFill } from 'react-icons/bs';
import HeroBtn from './homeComponents/HeroBtn';
import HeroImg from './homeComponents/HeroImg';
import HomeSlider from '../components/homeComponents/HomeSlider';
import ClientCmtsNotifications from '../components/homeComponents/ClientCmtsNotifications';

const HeroSection = () => {
    const [ isAdmin, setIsAdmin ] = useState(false)
    const [ btnsData, ] = useState([
        {
            'name': 'Historias de crianza',
            'url': 'sobreUstedes'
        },
        {
            'name': 'Formas de pago',
            'url': 'formasDePago'
        },
        {
            'name': 'Contacto',
            'section': 'contact-section'
        }
    ])

    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem('authUser'))
        admin === true ? setIsAdmin(true) : setIsAdmin(false)
    }, [])

    return (
        <main className='w-full grid place-items-center'>
            <div className='w-full flex flex-col md:flex-row relative'>
                <HeroImg />
                <div className='absolute top-32 flex flex-col items-start sm:ml-10 px-4 sm:px-0'>
                    <h1 className='text-white font-Raleway font-bold text-3xl md:text-5xl drop-shadow-sm
                    leading-8 sm:leading-normal'>
                        ¡Bienvenido a Tienda Má!
                    </h1>
                    <div className='flex items-start gap-2 mt-[.4rem] sm:mt-3'>
                        <BsBagHeartFill className='block text-white text-xl md:text-[1.7rem] mb-1 drop-shadow-sm' />
                        <h2 className='text-white font-Raleway tracking-wider md:text-2xl drop-shadow'>
                            Todo lo que buscas en un mismo lugar
                        </h2>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-3 sm:gap-4 mt-16 sm:mt-20 relative'>
                        {
                            isAdmin ?
                                <ClientCmtsNotifications />
                            :
                                null
                        }
                        {
                            btnsData.map((data, i) => {
                                return <HeroBtn btnData={data} key={i}/>
                            })
                        }
                    </div>
                </div>
                <div className='absolute w-full bottom-0 py-[1.1rem] overflow-x-hidden whitespace-nowrap bg-black/10 backdrop-blur-sm'>
                    <HomeSlider />
                    <HomeSlider />
                </div>
            </div>
        </main>
    )
};

export default HeroSection;
