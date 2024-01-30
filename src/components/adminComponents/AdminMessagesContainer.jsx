import AdminMessageCard from './adminItems/AdminMessageCard';

const AdminMessagesContainer = ({ messages }) => {
    return (
        <div className='grid place-items-center'>
            <h1 className='font-bold font-Raleway text-lg md:text-xl mt-1 drop-shadow-sm mx-auto'>
                Mensajes de contacto
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-start'>
                {
                    messages.map((message, i) => {
                        return ( 
                            <AdminMessageCard
                                key={i}
                                message={message}
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

export default AdminMessagesContainer;
