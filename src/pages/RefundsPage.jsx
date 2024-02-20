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
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-10 mt-20 w-fit mx-auto'>
                        Política de devoluciones
                    </h1>
                    <p>
                    Devolución y Cambio de producto 
 
 El comprador podrá, realizar la devolución o cambio del producto comprado siempre que se encuentre en buen estado el paquete, cerrado, que no este vencido, que pertenezca a la última presentación de la marca y siendo una presentación que Tienda Ma trabaja al momento del cambio o devolución. 
 
 Los cambios se realizan por productos, no se realiza devolución de dinero. 
 
 Los cambios y devoluciones, son costeados por el cliente. Salvo que se deban a un error u omisión de Tienda Ma. 
 
                    </p>
                </main>
            :
                <DisabledSite />
        }
        </>
    )
};

export default RefundsPage;
