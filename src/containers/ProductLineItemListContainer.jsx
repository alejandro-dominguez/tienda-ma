import {
    useEffect,
    useState,
    useContext
} from 'react';
import { ProductsContext } from '../contexts/productsContext';
import { AuthContext } from '../contexts/authContext';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ListItemCard from '../components/ListItemCard';
import ItemsPagination from '../components/itemComponents/ItemsPagination';

const ProductLineItemListContainer = () => {
    const { prods, error, loading } = useContext(ProductsContext)
    const { authUser } = useContext(AuthContext)
    const { productLineId } = useParams()
    const [ filteredProducts, setFilteredProducts ] = useState([])
    const [ products, setProducts ] = useState([])
    const [ pages, setPages ] = useState(0)
    const [ pagesQuantity, setPagesQuantity ] = useState([])
    const [ itemsQuantity, setItemsQuantity ] = useState(12)
    const [ currentPage, setCurrentPage ] = useState(
        (localStorage.getItem('authUser') || authUser) && localStorage.getItem('itemPages') ?
            JSON.parse(localStorage.getItem('itemPages'))
        :
            1
    )

    const finIndex = currentPage * itemsQuantity
    const iniIndex = Math.max(finIndex - itemsQuantity, 0)

    useEffect(() => {
        const isMobileViewport = window.visualViewport.width < 1024
        if (isMobileViewport) setItemsQuantity(6)
    }, [])    

    useEffect(() => {
        if (prods.length && productLineId) {
            const filterProducts = prods.filter(product => product.productLine === productLineId)
            setFilteredProducts(filterProducts)
            setCurrentPage(
                (localStorage.getItem('authUser') || authUser) && localStorage.getItem('itemPages') ?
                    JSON.parse(localStorage.getItem('itemPages'))
                :
                    1
            )
        }
    }, [prods, productLineId])

    useEffect(() => {
        if (filteredProducts.length) {
            const slicedProducts = filteredProducts.slice(iniIndex, finIndex)
            setProducts(slicedProducts)
        }
    }, [filteredProducts, currentPage, itemsQuantity])

    useEffect(() => {
        if (filteredProducts.length) {
            const totalPages = Math.ceil(filteredProducts.length / itemsQuantity)
            setPages(totalPages)
            setPagesQuantity([...Array(totalPages).keys()].map(n => n + 1))
        }
    }, [filteredProducts, itemsQuantity])

    return (
        <main className='w-full min-h-[100svh]'>
            {
                productLineId ?
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-12 mt-20 w-fit mx-auto'>
                        {productLineId}
                    </h1>
                : 
                    null
            }
            {
                (products.length && !loading && !error) ?
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20 p-4'>
                        {
                            products.map(product => {
                                return (
                                    <ListItemCard
                                        product={product}
                                        key={product.id}
                                    />
                            )})
                        }
                        {
                            pages > 1 ?
                                <ItemsPagination
                                    pages={pages}
                                    pagesQuantity={pagesQuantity}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                />
                            : 
                                null
                        }
                    </div>
                : !error ?
                    <div className='w-full grid place-items-center mt-2 py-4 min-h-[24rem]'>
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
                :
                    <ErrorPage />
            }
        </main>
    )
};

export default ProductLineItemListContainer;
