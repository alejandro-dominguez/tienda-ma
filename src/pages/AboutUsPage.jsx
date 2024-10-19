import {
    useEffect,
    useState,
} from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
    const [ swichImg, setSwichImg] = useState(false)

    useEffect(() => {
        const isMobileViewport = window.visualViewport.width < 1024
        isMobileViewport ? setSwichImg(true) : setSwichImg(false)
    }, [])
    
    return (
        <main className='grid place-items-center relative'>
            <div className=
                {
                    !swichImg ?
                        'about-us-banner'
                    :
                        'about-us-banner-mobile'
                }
            />
            <div className='absolute h-full w-full top-0 text-left'>
                <h1 className='about-h1-shadow pt-32 px-4 md:px-10 text-white font-Raleway font-bold text-[1.7rem]
                sm:text-3xl md:text-[2.5rem] drop-shadow justify-self-start self-start tracking-[0.02em]'>
                    Acerca de Tienda Ma
                </h1>
                <div className='about-p-shadow text-base flex flex-col gap-2 text-white max-w-[52rem]
                drop-shadow-sm mt-3 px-4 md:px-10 leading-6'>
                    <p>
                        Desde que decidimos comenzar con el proyecto Tienda Ma, nos hemos comprometido a ofrecer productos 
                        de la más alta calidad, inspirados en la dedicación y la atención al detalle que nos caracteriza. 
                    </p>
                    <p>
                        No solo vendemos pañales y productos esenciales para bebés y adultos, también somos padres 
                        y compartimos la misma pasión por tu bienestar y comodidad. 
                    </p>
                    <p>
                        Estamos dedicados al rubro desde mas de 10 años y desde el 2023 que soñamos con el proyecto 
                        de emprender nuestra propia Tienda. 
                    </p>
                    <p>
                        En Tienda Ma buscamos marcar la diferencia con nuestra atención personalizada
                        y compromiso genuino con la satisfacción de cada uno de nuestros clientes.
                    </p>
                    <p>
                        Sabemos como madres y padres que nuestros tiempos son limitados, por eso queremos ofrecerte 
                        una Tienda donde consigas los productos que necesites complementandola con información que 
                        te pueda ser de mucha ayuda. 
                    </p>
                    <p>
                        Muchas gracias por elegirnos!
                    </p>
                    <Link
                        to='/categorias/bebe/pañales-bebe'
                        className='grid place-items-center shadow-sm w-[9.5rem] py-[.3rem] mt-4 bg-zinc-800/10
                        border-2 border-white/80 rounded-lg transition-colors ease-in-out hover:border-white
                        hover:bg-zinc-700/30 focus:border-white focus:bg-zinc-700/30'
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
