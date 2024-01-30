import AdminOrderProduct from './adminItems/AdminOrderProduct';

const OrderDetailCard = ({ order }) => {
    return (
        <div className='flex flex-col items-start justify-start w-full bg-white rounded-md p-5
        drop-shadow-sm shadow-sm mt-4 mb-20 gap-2'>
            <h1 className='font-bold font-Raleway text-[1.05rem] drop-shadow-sm'>
                Orden de {order.clientFullName}:
            </h1>
            <div className='grid place-items-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2'>
                {
                    order.orderProducts.map((product, i) => {
                        return <AdminOrderProduct product={product} key={i}/>
                    })
                }
            </div>
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
