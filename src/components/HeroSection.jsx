import { BsBagHeartFill } from 'react-icons/bs';
import { useState } from 'react';
import video from '../assets/video-hero.mp4';
import HeroBtn from './homeComponents/HeroBtn';
import HomeSlider from '../components/homeComponents/HomeSlider';

const HeroSection = () => {
    const [ btnsData, ] = useState([
        {
            'name': 'Contacto',
            'section': 'contact-section'
        },
        {
            'name': 'Formas de pago',
            'url': 'formasDePago'
        }
    ])

    return (
        <main className='w-full grid place-items-center'>
            <div className='w-full flex flex-col md:flex-row relative'>
                <video
                    src={video}
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    type={'video/mp4'}
                    className='block w-full h-[100svh] object-cover grayscale-[.5] blur-[2px] brightness-[.8] saturate-[1.25]'
                />
                <div className='absolute top-28 sm:top-32 flex flex-col items-center sm:items-start sm:ml-10'>
                    <h1 className='text-white font-Raleway font-bold text-3xl md:text-5xl drop-shadow-sm
                    text-center px-16 sm:px-0 leading-8 sm:leading-normal'>
                        ¡Bienvenido a Tienda Má!
                    </h1>
                    <div className='flex items-center gap-2 mt-[.4rem] sm:mt-3'>
                        <BsBagHeartFill className='block text-white text-xl md:text-[1.7rem] mb-1 drop-shadow-sm' />
                        <h2 className='text-white font-Raleway tracking-wider md:text-2xl drop-shadow'>
                            Lo que buscas y mucho más
                        </h2>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-3 sm:gap-4 mt-16 sm:mt-20'>
                        {
                            btnsData.map((data, i) => {
                                return <HeroBtn btnData={data} key={i}/>
                            })
                        }
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
