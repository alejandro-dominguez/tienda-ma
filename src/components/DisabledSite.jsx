import logo from '../assets/logo-header.svg';

const DisabledSite = () => {
    return (
        <main className='w-full grid place-items-start pt-28 min-h-[100svh] px-4 md:px-10'>
            <div className='grid place-items-center gap-5 justify-self-center'>
                <h1 className='font-Raleway font-bold text-[1.75rem] md:text-3xl drop-shadow-sm leading-8'>
                    Por el momento el sitio se encuentra en mantenimiento.
                </h1>
                <p className='font-bold leading-[1.375rem]'>
                    Nos encontramos administrando nuestros servidores.
                    <br />
                    Lamentamos mucho el inconveniente.
                    <br />
                    Por favor, intenta regresar más tarde.
                </p>
            </div>
        </main>
    )
};

export default DisabledSite;
