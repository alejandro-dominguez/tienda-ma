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
            <button
                className='grid place-items-center'
                onClick={() => {}}
            >
                <span className='my-1 md:my-0 font-bold text-sm tracking-wide drop-shadow-sm py-2 px-3 text-center
                border-2 w-40 rounded-lg border-red-500/50 bg-red-100/[7%]'>
                    Detener sitio
                </span>
            </button>
        </div>
    )
};

export default AdminMenu;
