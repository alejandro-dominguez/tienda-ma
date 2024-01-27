import AdminSubcategoryCard from './adminItems/AdminSubcategoryCard';

const AdminSubcategoriesContainer = ({ subcategories }) => {
    return (
        <div className='grid place-items-start'>
            <h3 className='font-bold font-Raleway text-lg md:text-xl mt-1 drop-shadow-sm mx-auto'>
                Eliminar subcategorías
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto'>
                {
                    subcategories.map((subcategory, i) => {
                        return ( 
                            <AdminSubcategoryCard
                                key={i}
                                subcategory={subcategory}
                            />
                    )})
                }
            </div>
        </div>
    )
};

export default AdminSubcategoriesContainer;
