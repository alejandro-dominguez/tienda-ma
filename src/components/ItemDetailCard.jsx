import { ShopContext } from '../contexts/shopContext';
import { useContext, useState } from 'react';
import ItemCount from './itemComponents/ItemCount';

const ItemDetailCard = ({ product }) => {
    const { addProduct } = useContext(ShopContext)
    const [itemDetailQuantity, setItemDetailQuantity] = useState(1)

    const confirmPurchase = (quantity) => {
        addProduct({ ...product, quantity })
        setItemDetailQuantity(quantity)
    }

    return (
        <div className='flex flex-row items-start justify-between pt-6 pb-7 px-7 bg-rose-300/70 rounded shadow w-full'>
            <div className='flex flex-col'>
                <h1 className='text-white font-Raleway text-lg font-bold tracking-wider drop-shadow'>
                    {product.brand} {product.name}
                </h1>
                <div className='flex items-start gap-5 mt-1'>
                    <div className='w-40 mt-2'>
                        <img
                            src={product.img}
                            alt={product.name}
                            className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                        />
                    </div>
                    <p className='mt-[.3rem] md:w-[45%] leading-5 font-bold text-zinc-800/[96] text-[.9rem]
                    drop-shadow-sm tracking-tight'>
                        {product.desc}
                    </p>
                </div>
            </div>
            {itemDetailQuantity ?
                <ItemCount onAdd={confirmPurchase} initial={1} quantity={product.quantity} />
            : null }
        </div>
    )
};

export default ItemDetailCard;
