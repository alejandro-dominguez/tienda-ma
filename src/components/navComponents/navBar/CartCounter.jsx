import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CartCounter = () => {
    return (
        <Link to='/carrito'>
            <PiShoppingCartSimpleFill
                className='block text-[#2dd4bf] text-4xl drop-shadow cursor-pointer'
            />
        </Link>
    )
};

export default CartCounter;
