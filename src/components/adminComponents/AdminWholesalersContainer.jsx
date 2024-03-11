import AdminWholesalersCard from './adminItems/AdminWholesalersCard';

const AdminWholesalersContainer = ({
    wholesalersMessages,
    setActiveToast,
    setErrorToast
}) => {
    return (
        <div className='grid place-items-center'>
            <h1 className='font-bold font-Raleway text-lg md:text-xl mt-5 drop-shadow-sm mx-auto'>
                Mensajes de Mayoristas
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-start'>
                {
                    wholesalersMessages.map((message, i) => {
                        return ( 
                            <AdminWholesalersCard
                                key={i}
                                message={message}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
                    )})
                }
            </div>
            <h3 className='font-bold font-Raleway my-5 text-red-500'>
                Siempre dejar al menos un mensaje en el administrador.
            </h3>
        </div>
    )
};

export default AdminWholesalersContainer;
