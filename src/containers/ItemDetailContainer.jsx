import {
    useState,
    useEffect,
    useContext
} from 'react';
import { ProductsContext } from '../contexts/productsContext';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import ItemDetailCard from '../components/ItemDetailCard';
import ErrorPage from '../pages/ErrorPage';

const ItemDetailContainer = () => {
    const { categoryId, subcategoryId, id } = useParams()
    const { prods, error, loading } = useContext(ProductsContext)
    const [ prod, setProd ] = useState([])
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        if (prods.length && categoryId && subcategoryId && id) {
            const filteredProducts = prods.filter(product => product.category === categoryId && product.subcategory === subcategoryId)
            const productDetail = prods.filter(product => product.id === id)
            setProducts(filteredProducts)
            setProd(productDetail)
        }
    }, [prods, categoryId, subcategoryId, id])

    return (
        <main className='w-full grid place-items-start px-4 md:px-10 mt-28 min-h-[100svh]'>
            {
                (products.length && prod.length && !loading && !error) ?
                    <ItemDetailCard prod={prod} products={products} />
                : !error ?
                    <div className='w-full grid place-items-center mt-2 py-4 min-h-[33.5rem]'>
                        <div className='p-5 bg-teal-600/20 rounded-lg'>
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='70'
                                visible={true}
                            />
                        </div>
                    </div>
                : <ErrorPage />
            }
        </main>
    )
};

export default ItemDetailContainer;
