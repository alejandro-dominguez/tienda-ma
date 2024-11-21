import { useEffect, useState } from 'react';
import AdminProductCard from './adminItems/AdminProductCard';
import AdminProductFilters from './adminItems/AdminProductFilters';

const AdminProductsContainer = ({
    prods,
    brands,
    featuredProducts,
    stockedProducts,
    notStockedProducts,
    setActiveToast,
    setErrorToast
}) => {
    const [ products, setProducts ] = useState({})

    useEffect(() => {
        if (localStorage.getItem('adminBrandFilter')) {
            const brandFilter = localStorage.getItem('adminBrandFilter')
            setProducts(
                prods.filter(prod => prod.brand === brandFilter)
            )
        } else {
            setProducts(prods)
        }
    }, [])
    
    return (
        <>
            <AdminProductFilters
                prods={prods}
                brands={brands}
                featuredProducts={featuredProducts}
                stockedProducts={stockedProducts}
                notStockedProducts={notStockedProducts}
                setProducts={setProducts}
            />
            {
                products.length ?
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 gap-6'>
                        {
                            products.map(prod => {
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
                :
                    <div className='min-w-[93vw] min-h-[20rem] mt-3'>
                        <h3 className='text-lg'>
                            Actualmente todos los productos se encuentran en stock.
                        </h3>
                    </div>
            }
        </>
    )
};

export default AdminProductsContainer;
