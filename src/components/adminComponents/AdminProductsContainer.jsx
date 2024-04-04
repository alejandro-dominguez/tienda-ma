import {
    useEffect,
    useState
} from 'react';
import AdminProductCard from './adminItems/AdminProductCard';

const AdminProductsContainer = ({
    prods,
    brands,
    featuredProducts,
    stockedProducts,
    notStockedProducts,
    setActiveToast,
    setErrorToast
}) => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
      setProducts(prods)
    }, [])

    return (
        <div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 gap-6'>
                {
                    products.map(product => {
                        return (
                            <AdminProductCard
                                prod={product}
                                key={product.id}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
                    )})
                }
            </div>
        </div>
    )
};

export default AdminProductsContainer;
