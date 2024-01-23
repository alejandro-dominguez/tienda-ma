import AdminMenuItem from './adminMenuItem/AdminMenuItem';

const AdminMenu = ({ adminMenuData }) => {
    return (
        <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 mt-2 md:mt-0 mb-2 md:mb-0'>
            {
                adminMenuData.map((data, i) => {
                    return (
                        <AdminMenuItem
                            key={i}
                            itemData={data}
                        />
                )})
            }
            {/* detener / habilitar sitio | ternario */}
            <button
                className='my-1 md:my-0 py-2 px-3 grid place-items-center bg-red-500 rounded-lg w-40'
                onClick={() => {}}
            >
                <span className='text-white font-bold text-sm tracking-wider drop-shadow text-center'>
                    Detener sitio
                </span>
            </button>
{/*             <button
                className='my-1 md:my-0 py-2 px-3 grid place-items-center bg-green-600 rounded-lg w-40'
                onClick={() => {}}
            >
                <span className='text-white font-bold text-sm tracking-wider drop-shadow text-center'>
                    Habilitar sitio
                </span>
            </button> */}
        </div>
    )
};

export default AdminMenu;
