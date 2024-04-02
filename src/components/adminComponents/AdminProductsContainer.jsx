import AdminProductCard from './adminItems/AdminProductCard';

const AdminProductsContainer = ({
    prods,
    setActiveToast,
    setErrorToast
}) => {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 gap-6'>
            {
                prods.map(prod => {
                    return (
                        <AdminProductCard
                            prod={prod}
                            key={prod.id}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                )})
            }
        </div>
    )
};

export default AdminProductsContainer;
