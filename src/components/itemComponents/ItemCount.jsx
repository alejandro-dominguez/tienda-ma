import { BsCheckCircleFill } from 'react-icons/bs';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ onAdd, quantity, initial }) => {
    const [ count, setCount ] = useState(initial)
    const navigate = useNavigate()

    const handleAdd = (count) => {
        onAdd(count)
        navigate('/carrito')
    }

    const onPlus = () => {
        if (count < quantity) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }

    return (
        <div className='flex flex-col self-end gap-5 drop-shadow-md'>
            <div className='flex items-center justify-between px-8'>
                <FaPlusCircle 
                    className='block cursor-pointer text-[1.425rem] text-teal-50 transition-colors
                    hover:text-[#1b9461f2] focus:text-[#1b9461f2]'
                    onClick={() => onPlus()}
                />
                <span className='font-bold text-[1.7rem] text-red-50 drop-shadow-sm tracking-wider'>
                    {count}
                </span>
                <FaMinusCircle 
                    className='block cursor-pointer text-[1.425rem] text-teal-50 transition-colors
                    hover:text-[#f74251f2] focus:text-[#f74251f2]'
                    onClick={() => onDecrement()}
                />
            </div>
            <button
                type='button'
                className='w-max flex items-center gap-2 justify-center text-white bg-teal-600/90 px-5 py-2 rounded-full
                shadow-sm transition ease-in-out duration-200 hover:shadow hover:text-teal-600 hover:bg-red-50/90
                focus:shadow focus:text-teal-600 focus:bg-red-50/80'
                onClick={() => handleAdd(count)}
            >
                <BsCheckCircleFill className='block drop-shadow'/>
                <span className='font-Raleway text-[.9rem] tracking-wider font-bold drop-shadow'>
                    Añadir al carrito
                </span>
            </button>
        </div>
    )
};

export default ItemCount;
