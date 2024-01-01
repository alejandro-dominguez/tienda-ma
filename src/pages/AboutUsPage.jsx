import { Link } from 'react-router-dom';

const AboutUsPage = () => {
    return (
        <main className='grid place-items-center relative'>
            <div className='about-us-banner' />
            <div className='absolute h-full w-full top-0 text-left'>
                <h1 className='about-h1-shadow pt-32 mt-2 text-white font-Raleway font-bold text-3xl px-4 md:px-10 md:text-[2.5rem]
                drop-shadow justify-self-start self-start tracking-[0.02em]'>
                    Acerca de Tienda Ma
                </h1>
                <div className='about-p-shadow text-[1.025rem] flex flex-col gap-2 text-white max-w-[40rem]
                drop-shadow-sm mt-2 md:mt-3 px-4 md:px-10 leading-[1.4rem]'>
                    <p>
                        Desde nuestra inauguración, nos hemos comprometido a ofrecer productos de la más alta calidad, 
                        inspirados en la dedicación y la atención al detalle que nos caracteriza. No solo vendemos pañales 
                        y productos esenciales, también compartimos la misma pasión por tu bienestar.
                    </p>
                    <p>
                        En Tienda Ma buscamos marcar la diferencia con nuestra atención personalizada, calidad excepcional 
                        y compromiso genuino con la satisfacción de cada uno de nuestros clientes.
                    </p>
                    <Link
                        to='/categorias/bebe/pañales'
                        className='grid place-items-center shadow-sm w-[9.5rem] py-[.3rem] mt-2 bg-zinc-800/10 border-2 border-white/80
                        rounded-lg transition-colors ease-in-out hover:border-white hover:bg-zinc-700/30 
                        focus:border-white focus:bg-zinc-700/30'
                    >
                        <span className='drop-shadow-sm text-white uppercase tracking-widest text-[.8rem]'>
                            Ver productos
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    )
};

export default AboutUsPage;
