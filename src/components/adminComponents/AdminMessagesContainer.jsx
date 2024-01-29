import AdminMessagesCard from './adminItems/AdminMessagesCard';

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
                            <AdminMessagesCard
                                key={i}
                                message={message}
                            />
                    )})
                }
            </div>
        </div>
    )
};

export default AdminMessagesContainer;
