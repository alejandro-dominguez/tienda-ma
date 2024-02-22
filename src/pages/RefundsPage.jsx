import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import DisabledSite from '../components/DisabledSite';

const RefundsPage = () => {
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite.enabled ?
                <main className='w-full min-h-[100svh]'>
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm px-4 md:px-10 leading-8
                    md:leading-normal pb-3 pt-10 mt-20 w-fit mx-auto'>
                        Devolución y Cambio de producto
                    </h1>
                    <div className='px-4 md:px-10 flex flex-col gap-2 text-[.975rem] leading-6 md:leading-normal md:text-base'>
                        <p>
                            El comprador podrá, realizar la devolución o cambio del producto comprado siempre que se encuentre 
                            en buen estado el paquete, cerrado, que no este vencido, que pertenezca a la última presentación de 
                            la marca y siendo una presentación que Tienda Ma trabaja al momento del cambio o devolución.
                        </p>
                        <p>
                            Los cambios se realizan por productos, no se realiza devolución de dinero.    
                        </p> 
                        <p>
                            Los cambios y devoluciones, son costeados por el cliente. Salvo que se deban a un error u omisión de Tienda Ma. 
                        </p>
                    </div>
                </main>
            :
                <DisabledSite />
        }
        </>
    )
};

export default RefundsPage;
