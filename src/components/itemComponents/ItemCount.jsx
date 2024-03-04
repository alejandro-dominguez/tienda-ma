import { 
    FaPlusCircle,
    FaMinusCircle
} from 'react-icons/fa';
import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const ItemCount = ({
    confirmPurchase,
    quantity,
    initial
}) => {
    const [ count, setCount ] = useState(initial)

    const handlePurchase = (count) => {
        confirmPurchase(count)
    }

    const onPlus = () => {
        if (count < quantity) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }

    return (
        <div className='flex flex-col self-center md:self-end mt-4 md:mt-0 gap-2 drop-shadow-md'>
            <div className='flex items-center justify-between px-11'>
                <button
                    type='button'
                    onClick={() => onDecrement()}
                    className='transition-colors text-zinc-800/95 hover:text-red-600/90 focus:text-red-600/90'
                >
                    <FaMinusCircle className='block'/>
                </button>
                <span className='font-black text-xl drop-shadow-sm tracking-widest text-zinc-950/90'>
                    {count}
                </span>
                <button
                    type='button'
                    onClick={() => onPlus()}
                    className='transition-colors text-zinc-800/95 hover:text-teal-600/90 focus:text-teal-600/90'
                >
                    <FaPlusCircle  className='block'/>
                </button>
            </div>
            <button
                type='button'
                className='w-max flex items-center gap-2 justify-center px-3 py-2 rounded-lg shadow-sm bg-zinc-900 text-white
                transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                onClick={() => handlePurchase(count)}
            >
                <BsCheckCircleFill className='block drop-shadow'/>
                <span className='font-Raleway text-[.85rem] tracking-wider font-bold drop-shadow'>
                    Añadir al carrito
                </span>
            </button>
        </div>
    )
};

export default ItemCount;
