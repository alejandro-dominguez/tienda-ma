import { useContext } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { shortenText } from '../../utilities';
import { ShopContext } from '../../contexts/shopContext';

const CartItem = ({ item }) => {
    const { removeProduct } = useContext(ShopContext)
    
    const handleRemove = () => {
        removeProduct(item.id)
    }
    
    return (
        <div className='bg-rose-300/70'>
            <div className='md:w-20 w-32'>
                <img src={item.img} alt={item.name} className="w-full block aspect-square object-contain
                bg-center cardImg" />
            </div>
            <div className='flex flex-col items-start min-w-[13rem] md:min-w-[23rem]'>
                <h3 className='font-bold tracking-wide'>Detalle:</h3>
                <h4 className='font-OpenSans font-bold'>{shortenText(item.name, 30)}</h4>
                <p className='mt-[0.15rem]'>
                    Cantidad:&nbsp;&nbsp;
                    <span className='font-OpenSans font-bold'>
                        {item.quantity}
                    </span>
                </p>
            </div>
            <BsFillTrash3Fill className='absolute bottom-0 right-0 md:-right-3 text-[#f63e3e] cursor-pointer text-3xl
            drop-shadow-md transition-transform hover:scale-105'
            onClick={() => handleRemove()} />
        </div>
    )
};

export default CartItem;
