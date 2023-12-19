import { useContext } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { ShopContext } from '../../contexts/shopContext';

const CartItem = ({ item }) => {
    const { removeProduct } = useContext(ShopContext)
    const { brand, name, quantity } = item
    const handleRemove = () => {
        removeProduct(item.id)
    }
    
    return (
        <div className='flex items-end justify-between w-full py-4 px-5 bg-rose-300/70 shadow-sm rounded gap-4'>
            <div className='flex gap-5'>
                <div className='w-24'>
                    <img src={item.img} alt={item.name}
                    className='w-full block aspect-square object-cover rounded' />
                </div>
                <div className='flex flex-col items-start justify-start leading-[1.325rem] gap-[.1rem]'>
                    <h3 className='font-bold'>
                        Detalle:
                    </h3>
                    <span className='text-white drop-shadow-sm'>
                        {brand}
                        <br />
                        {name}
                    </span>
                    <span className='mt-1 font-bold flex items-baseline gap-2'>
                        Cantidad:
                        <span className='text-white font-normal drop-shadow-sm'>
                            {quantity}
                        </span>
                    </span>
                </div>
            </div>
            <BsFillTrash3Fill
                className='block ml-2 text-white cursor-pointer text-2xl drop-shadow transition-colors hover:text-red-600/90'
                onClick={() => handleRemove()}
            />
        </div>
    )
};

export default CartItem;
