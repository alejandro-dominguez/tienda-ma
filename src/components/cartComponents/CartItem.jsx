import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { ShopContext } from '../../contexts/shopContext';
import { MdEdit } from 'react-icons/md';
import numberFormater from '../../utilities/numberFormater';

const CartItem = ({ item }) => {
    const { removeProduct } = useContext(ShopContext)
    const navigate = useNavigate()

    const editItem = () => {
        removeProduct(item.prodId)
        navigate((`/categorias/${item.category}/${item.subcategory}/detalle/${item.id}`))
    }

    const removeItem = () => {
        removeProduct(item.prodId)
    }

    return (
        <div className='flex items-start justify-between w-full py-4 px-5 bg-white shadow-sm drop-shadow-sm rounded gap-4'>
            <div className='flex gap-5'>
                <div className='w-[4.5rem] sm:w-20 lg:w-[5.5rem] drop-shadow'>
                    <img
                        src={item.img}
                        alt={item.name}
                        className='w-full block aspect-square object-cover rounded drop-shadow-sm'
                    />
                </div>
                <div className='flex flex-col items-start justify-start leading-[1.325rem] gap-[.1rem]'>
                    <h3 className='font-bold text-sm md:text-base'>
                        Detalle:
                    </h3>
                    <span className='font-black text-[.85rem] tracking-wide leading-5 drop-shadow-sm mt-[.1rem]'>
                        {item.brand} {item.name}
                    </span>
                    <h3 className='font-bold text-sm md:text-[.89rem] mt-1'>
                        Precio x unidad:
                    </h3>
                    <span className='font-black text-[.85rem] tracking-wide leading-5 drop-shadow-sm mt-[.1rem]'>
                        {numberFormater(item.price)}
                    </span>
                    <h3 className='mt-1 font-bold text-sm md:text-[.89rem] flex items-center gap-2'>
                        Cantidad:
                        <span className='font-black text[.975rem] drop-shadow-sm'>
                            {item.quantity}
                        </span>
                    </h3>
                    {   
                        item.selectedSize ?    
                            <span className='mt-1 font-bold text-sm md:text-[.89rem] flex items-baseline gap-2'>
                                Talle:
                                <span className='font-black text-[.8rem] drop-shadow-sm'>
                                    {item.selectedSize}
                                </span>
                            </span>
                        :
                            null
                    }
                </div>
            </div>
            <div className='flex items-center self-end gap-5'>
                <MdEdit
                    className='block cursor-pointer text-[1.45rem] drop-shadow-sm text-zinc-900/80'
                    onClick={() => editItem()}
                />
                <BsFillTrash3Fill
                    className='block cursor-pointer text-[1.3rem] drop-shadow-sm text-red-500/80'
                    onClick={() => removeItem()}
                />
            </div>
        </div>
    )
};

export default CartItem;
