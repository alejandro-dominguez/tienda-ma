import { Link } from 'react-router-dom';
import { BiSolidShare } from 'react-icons/bi';
import logo from '../../assets/logo-header.svg';

const NoCartItemsCard = () => {
    return (
        <div className='w-fit grid place-items-center justify-self-center -mt-5 shadow-sm'>
            <Link
                to='/'
                className='flex flex-col items-center justify-center gap-6 py-6 px-7 rounded-md bg-white shadow-sm drop-shadow-sm'
            >
                <h1 className='font-bold text-lg tracking-wide font-Raleway grid place-items-center leading-6 drop-shadow-sm'>
                    <span>
                        Aún no hay productos
                    </span>
                    <div className='flex items-center justify-center gap-2'>
                        <span>
                            en el carrito
                        </span>
                        <BiSolidShare className='block text-red-300 text-[1.75rem]' />
                    </div>
                </h1>
                <div className='w-[7.5rem]'>
                    <img
                        
                        src={logo}
                        alt='logo tienda Ma'
                        className='block w-full'
                    />
                </div>
            </Link>
        </div>
    )
};

export default NoCartItemsCard;
