import { useContext } from 'react';
import { ShopContext } from '../../contexts/shopContext';
import { BsFillTrash3Fill } from 'react-icons/bs';

const DeleteCartOrderBtn = () => {
    const { emptyCart } = useContext(ShopContext)
    
    return (
        <button
        className='flex items-center justify-center justify-self-center px-4 py-2 gap-2 mt-4
        rounded-lg shadow-sm bg-red-600 text-white transition-colors ease-in-out
        hover:bg-red-600/95 focus:bg-red-600/95'
        type='button'
        onClick={() => emptyCart()}
        >
            <BsFillTrash3Fill
                className='block text-[1.3rem] drop-shadow-sm text-white'
            />
            <span className='font-Raleway text-[.9rem] tracking-wider font-bold'>
                Eliminar orden
            </span>
        </button>
    )
};

export default DeleteCartOrderBtn;
