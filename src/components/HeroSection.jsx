import { HeroBtn } from './homeComponents';
import { BsBagHeartFill } from 'react-icons/bs';
import video from '../assets/video-hero.mp4'; 

const HeroSection = ({ btnsData }) => {


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
            </div>
        </main>
    )
};

export default HeroSection;
