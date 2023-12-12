import { scrollToElement } from '../../utilities';
import video from '../../assets/production-ID_4178704.mp4'; 

const HeroSection = () => {
    return (
        <main className='grid place-items-center'>
            <div className='grid place-items-center h-screen overflow-y-hidden relative'>
                <video
                    src={video}
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    type={'video/mp4'}
                    className='block w-full grayscale-[.22] blur-[1.1px] brightness-110'
                />
                <h1 className='hero-h1 absolute top-44 -translate-x-1/2 md: left-[25rem] text-teal-50 font-Raleway font-bold
                md:text-6xl drop-shadow'>
                    ¡Bienvenido a Tienda Má!
                </h1>
                <div className='absolute flex justify-between items-center gap-60 md:mt-[28.7rem]'>
                    <button
                        type='button'
                        className='hero-btn uppercase tracking-wider text-teal-50/90 shadow-sm drop-shadow md:px-7 md:py-3
                        bg-zinc-800/5 border-2 border-red-600 rounded-full transition-colors ease-in-out hover:border-white/80
                        hover:text-white hover:bg-zinc-700/30 focus:border-white/80 focus:text-white focus:bg-zinc-800/30'
                        onClick={() => scrollToElement('featured-section')}
                    >
                        Destacados
                    </button>
                    <button
                        type='button'
                        className='hero-btn uppercase tracking-wider text-teal-50/90 shadow-sm drop-shadow md:px-7 md:py-3
                        bg-zinc-800/5 border-2 border-red-600 rounded-full transition-colors ease-in-out hover:border-white/80
                        hover:text-white hover:bg-zinc-700/30 focus:border-white/80 focus:text-white focus:bg-zinc-800/30'
                        onClick={() => scrollToElement('benefits-section')}
                    >
                        Beneficios
                    </button>
                    <button
                        type='button'
                        className='hero-btn uppercase tracking-wider text-teal-50/90 shadow-sm drop-shadow md:px-7 md:py-3
                        bg-zinc-800/5 border-2 border-red-600 rounded-full transition-colors ease-in-out hover:border-white/80
                        hover:text-white hover:bg-zinc-700/30 focus:border-white/80 focus:text-white focus:bg-zinc-800/30'
                        onClick={() => scrollToElement('contact-section')}
                    >
                        Contacto
                    </button>
                </div>
            </div>
        </main>
    )
}

export default HeroSection;
