import {
    useEffect,
    useState,
    useContext
} from 'react';
import { ProductsContext } from '../contexts/productsContext';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import ErrorPage from '../pages/ErrorPage';
import ListItemCard from '../components/ListItemCard';
import ItemsPagination from '../components/itemComponents/ItemsPagination';

const BrandItemListContainer = () => {
    const { prods, error, loading } = useContext(ProductsContext)
    const { brandId } = useParams()
    const [ brandItems, setBrandItems ] = useState([])
    const [ pages, setPages ] = useState(0)
    const [ pagesQuantity, setPagesQuantity ] = useState(0)
    const [ itemsQuantity, setItemsQuantity ] = useState(12)
    const [ currentPage, setCurrentPage ] = useState(1)

    useEffect(() => {
        const isMobileViewport = window.visualViewport.width < 1024
        if (isMobileViewport) setItemsQuantity(6)
    }, [])

    useEffect(() => {
        if (prods.length && brandId) {
            const filteredProducts = prods.filter(product => product.brand === brandId)
            setBrandItems(filteredProducts.slice(iniIndex, finIndex))
        }
    }, [prods, brandId])

    useEffect(() => {
        if (brandItems.length) {
            setPages(Math.ceil(brandItems.length / itemsQuantity))
            setPagesQuantity([...Array(pages + 1).keys()].slice(1))
        }
    }, [brandItems])

    const finIndex = currentPage * itemsQuantity
    const iniIndex = Math.max(finIndex - itemsQuantity, 0)

    return (
        <main className='w-full min-h-[100svh]'>
            {
                brandId ?
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-12 mt-20 w-fit mx-auto'>
                        {brandId}
                    </h1>
                : 
                    null
            }
            {
                (brandItems.length && !loading && !error) ?
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20 p-4'>
                        {
                            brandItems.map(product => {
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

export default BrandItemListContainer;
