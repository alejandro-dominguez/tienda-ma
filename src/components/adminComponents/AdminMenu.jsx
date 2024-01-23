import AdminMenuItem from './adminMenuItem/AdminMenuItem';

const AdminMenu = ({ adminMenuData }) => {
    return (
        <div className='mx-auto my-4 md:-my-32 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4'>
            {
                adminMenuData.map((data, i) => {
                    return (
                        <AdminMenuItem
                            key={i}
                            itemData={data}
                        />
                )})
            }
        </div>
    )
};

export default AdminMenu;
