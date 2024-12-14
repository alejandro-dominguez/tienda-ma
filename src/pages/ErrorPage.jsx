import { Link } from 'react-router-dom';
import { BiSolidShare } from 'react-icons/bi';
import logo from '../assets/logo-header.svg';

const ErrorPage = () => {
    return (
        <main className='w-full grid place-items-center min-h-[100svh]'>
            <div className='grid place-items-center gap-5'>
                <h1 className='font-bold text-[1.75rem] md:text-3xl drop-shadow-sm text-red-500'>
                    Error 404.
                </h1>
                <p className='text-center'>
                    ¡Ups! parece que algo ha salido mal.
                    <br />
                    Lamentamos mucho el inconveniente.
                </p>
                <div className='w-fit grid place-items-center'>
                    <Link
                        to='/'
                        className='flex flex-col items-center justify-center gap-6 py-6 px-7 bg-white shadow-sm drop-shadow-sm rounded-md'
                    >
                        <h1 className='font-bold text-lg tracking-wide font-Raleway grid place-items-center leading-6 drop-shadow-sm'>
                            <div className='flex items-center justify-center gap-2'>
                                <span>
                                    Prueba con ir al inicio
                                </span>
                                <BiSolidShare className='block text-red-300 text-[1.75rem]' />
                            </div>
                        </h1>
                        <div className='w-[7.5rem]'>
                            <img
                                src={logo}
                                alt='logo tienda Ma'
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
};

export default ErrorPage;
