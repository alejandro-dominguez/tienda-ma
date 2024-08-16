import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CartCounter = () => {
    return (
        <Link
            to='/carrito'
            id='cartLink'
            className='text-4xl lg:text-2xl'
        >
            <PiShoppingCartSimpleFill className='block text-zinc-800/80 drop-shadow-sm cursor-pointer -mt-1 lg:-ml-4' />
        </Link>
    )
};

export default CartCounter;
