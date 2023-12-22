import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CartCounter = () => {
    return (
        <Link to='/carrito'>
            <PiShoppingCartSimpleFill
                className='block text-zinc-800/80 text-4xl lg:text-[1.7rem] drop-shadow-sm cursor-pointer'
            />
        </Link>
    )
};

export default CartCounter;
