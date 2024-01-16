import AdminMenuItem from './adminMenuItem/AdminMenuItem';

const AdminMenu = ({ adminMenuData }) => {
    return (
        <div className='mx-auto md:-mt-38'>
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
