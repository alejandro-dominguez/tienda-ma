import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CartCounter = () => {
    return (
        <Link
            to='/carrito'
            id='cartLink'
        >
            <PiShoppingCartSimpleFill
                className='block text-zinc-800/80 text-4xl lg:text-2xl drop-shadow-sm cursor-pointer -mt-1 lg:-ml-4'
            />
        </Link>
    )
};

export default CartCounter;
