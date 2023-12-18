import { useState } from 'react';

const ItemDetailCard = ({ product }) => {
    const [ quantityItemDetail, setQuantityItemDetail ] = useState(1)

    return (
        <div className='flex items-start justify-between py-6 px-7 bg-rose-300/70 rounded shadow'>
            <div className='flex flex-col'>
                <h1 className='text-white font-Raleway text-lg font-bold tracking-wider drop-shadow'>
                    {product.brand} {product.name}
                </h1>
                <div className='flex items-start gap-4'>
                    <div className='w-40 mt-2'>
                        <img
                            src={product.img}
                            alt={product.name}
                            className='block w-full rounded drop-shadow-sm'
                        />
                    </div>
                    <p className='mt-2 md:w-[45%] leading-[1.4rem] font-bold text-zinc-800/90 '>
                        {product.desc}
                    </p>
                </div>
                <div className='flex'>

                </div>
            </div>
        </div>
    )
};

export default ItemDetailCard;
