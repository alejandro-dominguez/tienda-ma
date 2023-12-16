import { Link } from 'react-router-dom';

const AboutUsPage = () => {
    return (
        <div className='grid place-items-center relative'>
            <div className='about-us-banner' />
            <div className='absolute h-full w-full top-0 text-left'>
                <h1 className='about-h1-shadow pt-44 text-teal-50 font-Raleway font-bold md:text-[2.5rem] drop-shadow
                justify-self-start self-start md:ml-10 tracking-[0.02em]'>
                    Acerca de Tienda Ma
                </h1>
                <div className='about-p-shadow text-[1.025rem] flex flex-col gap-2 text-teal-50 max-w-[32.5rem]
                drop-shadow-sm mt-5 md:ml-10 leading-[1.4rem]'>
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
                        to={'/categorias/bebe'}
                        className='btn-shadow w-fit mt-2 text-sm uppercase tracking-wider text-teal-50/90 shadow-sm drop-shadow
                        px-[1.2rem] py-[.6rem] bg-zinc-800/10 border-2 border-white/60 rounded-full transition-colors ease-in-out
                        hover:border-white/80 hover:text-white hover:bg-zinc-700/30 focus:border-white/80
                        focus:text-white focus:bg-zinc-700/30'
                    >
                        Ver Productos
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default AboutUsPage;
