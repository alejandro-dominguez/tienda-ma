import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CartCounter = () => {
    return (
        <Link to='/carrito'>
            <PiShoppingCartSimpleFill
                className='block text-zinc-800/80 text-4xl lg:text-2xl drop-shadow-sm cursor-pointer -mt-[1.7225rem]'
            />
        </Link>
    )
};

export default CartCounter;
