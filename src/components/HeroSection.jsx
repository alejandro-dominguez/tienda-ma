import { useState } from 'react';
import { HeroBtn } from './homeComponents';
import { BsBagHeartFill } from 'react-icons/bs';
import video from '../assets/video-hero.mp4'; 

const HeroSection = () => {
    const [ btnsData, ] = useState([
        {
            'name': 'Destacados',
            'section': 'featured-section'
        },
        {
            'name': 'Beneficios',
            'section': 'benefits-section'
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
                    className='block w-full grayscale-[.4] blur-[2px] brightness-[.85]'
                />
                <div className='absolute top-40 -translate-x-1/2 md:left-[35%]'>
                    <h1 className='hero-h-shadow text-teal-50 font-Raleway font-bold md:text-7xl drop-shadow-md'>
                        ¡Bienvenido a Tienda Má!
                    </h1>
                    <div className='flex md:flex-row items-center gap-3 md:mt-5 md:ml-1'>
                        <BsBagHeartFill className='hero-icon-shadow block text-[#ff7c92] text-[2.05rem] mb-2' />
                        <h2 className='hero-h-shadow text-teal-50 font-Raleway tracking-wider md:text-3xl drop-shadow-md'>
                            Tu pañalera de confianza
                        </h2>
                    </div>
                </div>
                <div className='absolute flex justify-between items-center gap-16 md:mt-[29rem]'>
                    {btnsData.map((data, i) => {
                        return <HeroBtn btnData={data} key={i}/>
                    })}
                </div>
            </div>
        </main>
    )
};

export default HeroSection;
