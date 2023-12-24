import { HeroBtn } from './homeComponents';
import { BsBagHeartFill } from 'react-icons/bs';
import { HomeSlider } from '../components/homeComponents';
import { useState } from 'react';
import video from '../assets/video-hero.mp4';

const HeroSection = () => {
    const [ btnsData, ] = useState([
        {
            'name': 'Promociones',
            'section': 'promo-section'
        },
        {
            'name': 'Destacado',
            'section': 'featured-section'
        },
        {
            'name': 'Formas de pago',
            'section': 'payments-section'
        },
        {
            'name': 'Contacto',
            'section': 'contact-section'
        }
    ])

    return (
        <main className='w-full grid place-items-center'>
            <div className='w-full grid place-items-center h-screen overflow-y-hidden relative'>
                <video
                    src={video}
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    type={'video/mp4'}
                    className='block w-full grayscale-[.5] blur-[2px] brightness-[.8] saturate-[1.25]'
                />
                <div className='absolute top-32 -translate-x-1/2 md:left-80 md:ml-2'>
                    <h1 className='text-white font-Raleway font-bold md:text-5xl drop-shadow-sm'>
                        ¡Bienvenido a Tienda Má!
                    </h1>
                    <div className='flex md:flex-row items-center gap-2 md:mt-3 md:ml-1'>
                        <BsBagHeartFill className='block text-white text-[1.7rem] mb-1' />
                        <h2 className='text-white font-Raleway tracking-wider md:text-2xl drop-shadow-sm'>
                            Tu pañalera de confianza
                        </h2>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-4 mt-6 md:ml-1'>
                        {btnsData.map((data, i) => {
                            return <HeroBtn btnData={data} key={i}/>
                        })}
                    </div>
                </div>
                <div className='absolute w-full bottom-0 py-[1.1rem] overflow-x-hidden whitespace-nowrap bg-white/5 backdrop-blur-sm'>
                    <HomeSlider />
                    <HomeSlider />
                </div>
            </div>
        </main>
    )
};

export default HeroSection;
