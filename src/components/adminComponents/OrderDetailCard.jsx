import React from 'react';

const OrderDetailCard = ({ order }) => {
    console.log(order);
    return (
        <div className='flex flex-col items-start justify-start w-full bg-white rounded-md p-5
        drop-shadow-sm shadow-sm mt-4 mb-20 gap-2'>
            <h1 className='font-bold font-Raleway text-[1.05rem] drop-shadow-sm'>
                Orden de {order.clientFullName}:
            </h1>
            <span className='font-bold flex gap-1 items-center'>
                Dirección:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {order.clientAdress}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Teléfono:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {order.clientPhone}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Email:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {order.clientEmail}
                </span>
            </span>
        </div>
    )
};

export default OrderDetailCard;
