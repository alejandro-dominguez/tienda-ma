import { Link } from 'react-router-dom';

const AdminMessageCard = ({ message }) => {
    return (
        <div className='flex flex-col items-start justify-start gap-2'>
            <div className='grid place-items-start p-4 m-3 bg-white shadow-sm drop-shadow-sm w-[16.25rem]'>
                <div className='rounded-lg flex flex-col items-start gap-2'>
                    <h3 className='text-[.925rem] font-bold flex justify-between items-start gap-5'>
                        Fecha:
                        <span className='font-normal text-sm mt-[.21rem]'>
                            {message.messageDate}
                        </span>
                    </h3>
                    <h3 className='text-[.925rem] font-bold flex justify-between items-start gap-3'>
                        Remitente:
                        <span className='font-normal text-sm mt-[.21rem]'>
                            {message.fullName}
                        </span>
                    </h3>
                    <Link
                        to={`/admin/consola/mensajesContacto/${message.id}`}
                        className='mt-1 px-3 py-[.27rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                        ease-in-out hover:bg-zinc-700 focus:bg-zinc-700 grid place-items-center'
                    >
                        <span className='tracking-wider text-[.79rem] font-Raleway'>
                            Ver mensaje
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default AdminMessageCard;
