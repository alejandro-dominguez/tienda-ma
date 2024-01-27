import AdminPaymentCard from './adminItems/AdminPaymentCard';

const AdminPaymentsContainer = ({ payments }) => {
    return (
        <div className='grid place-items-center'>
            <h3 className='font-bold font-Raleway text-lg md:text-xl mt-1 drop-shadow-sm mx-auto'>
                Eliminar formas de pago
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
                {
                    payments.map((payment, i) => {
                        return ( 
                            <AdminPaymentCard
                                key={i}
                                payment={payment}
                            />
                    )})
                }
            </div>
        </div>
    )
};

export default AdminPaymentsContainer;
