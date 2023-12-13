import { useState } from 'react';
import { HeroBtn } from './homeComponents';
import video from '../assets/production-ID_4178704.mp4'; 

const HeroSection = () => {
    const [btnsData,] = useState([
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
        <main className='grid place-items-center'>
            <div className='grid place-items-center h-screen overflow-y-hidden relative'>
                <video
                    src={video}
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    type={'video/mp4'}
                    className='block w-full grayscale-[.4] blur-[2px]'
                />
                <div className='absolute top-40 -translate-x-1/2 md:left-[35%]'>
                    <h1 className='hero-h-shadow text-white font-Raleway font-bold md:text-7xl drop-shadow-md'>
                        ¡Bienvenido a Tienda Má!
                    </h1>
                    <h2 className='mt-2 hero-h-shadow text-white font-Raleway tracking-wider md:text-2xl drop-shadow-md'>
                        Tu pañalera de confianza
                    </h2>
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
