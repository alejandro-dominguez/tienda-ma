import React from 'react';

const FeaturedItemCard = ({ product }) => {
    return (
        <div className='flex flex-col items-start justify-center py-5 md:px-8 bg-rose-300/70 rounded gap-3 shadow'>
            <h3 className='text-white font-bold drop-shadow-sm tracking-wide'>
                {`${product.brand} ${product.name}`}
            </h3>
            <div className='w-44'>
                <img
                    src={product.img}
                    alt={product.name}
                    className='block w-full rounded drop-shadow-sm'
                />
            </div>
            <button
                type='button'
                className='mt-1 px-5 py-2 bg-teal-600/95 text-white text-[.9rem] rounded-md shadow-sm
                transition-colors ease-in-out duration-200 hover:bg-rose-600 focus:bg-rose-600'
                onClick=''
            >
                <span className='block drop-shadow tracking-wide text-[1.025rem]'>
                    Ver más
                </span>
            </button>
        </div>
    )
};

export default FeaturedItemCard;
