import AdminOrderCard from './adminItems/AdminOrderCard';

const AdminOrdersContainer = ({
    orders,
    setActiveToast,
    setErrorToast
}) => {
    return (
        <div className='grid place-items-center'>
            <h1 className='font-bold font-Raleway text-lg md:text-xl mt-5 drop-shadow-sm mx-auto'>
                Órdenes de compra
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-start'>
                {
                    orders.map((order, i) => {
                        return ( 
                            <AdminOrderCard
                                key={i}
                                order={order}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
                    )})
                }
            </div>
            <h3 className='font-bold font-Raleway my-5 text-red-500'>
                Siempre dejar al menos una oden en el administrador.
            </h3>
        </div>
    )
};

export default AdminOrdersContainer;
