import { 
    useEffect, 
    useState,
    useContext
} from 'react';
import {
    Link,
    useParams
} from 'react-router-dom';
import { ProductsContext } from '../contexts/productsContext';
import { SubcategoriesContext } from '../contexts/subcategoriesContext';
import { RotatingLines } from 'react-loader-spinner';
import { FaGem } from 'react-icons/fa6';
import { RiHandSanitizerFill } from 'react-icons/ri';
import { GoSortDesc } from 'react-icons/go';
import ListItemCard from '../components/ListItemCard';
import ErrorPage from '../pages/ErrorPage';
import scrollToElement from '../utilities/scrollToElement';
import ItemsPagination from '../components/itemComponents/ItemsPagination';

const ItemCategoriesContainer = () => {
    const { prods, error, loading } = useContext(ProductsContext)
    const { subcategories, errorSubcategories, loadingSubcategories } = useContext(SubcategoriesContext)
    const { categoryId } = useParams()
    const [ filteredProducts, setFilteredProducts ] = useState([])
    const [ products, setProducts ] = useState([])
    const [ currentSubcategories, setCurrentSubcategories ] = useState([])
    const [ pages, setPages ] = useState(0)
    const [ pagesQuantity, setPagesQuantity ] = useState([])
    const [ itemsQuantity, setItemsQuantity ] = useState(12)
    const [ currentPage, setCurrentPage ] = useState(1)

    const finIndex = currentPage * itemsQuantity
    const iniIndex = Math.max(finIndex - itemsQuantity, 0)
    
    useEffect(() => {
        const isMobileViewport = window.visualViewport.width < 1024
        if (isMobileViewport) setItemsQuantity(6)
    }, [])
    
    useEffect(() => {
        if (prods.length && categoryId) {
            const filterProducts = prods.filter(product => product.category === categoryId)
            setFilteredProducts(filterProducts)
            setCurrentPage(1)
        }
    }, [prods, categoryId])

    useEffect(() => {
        if (filteredProducts.length) {
            const slicedProducts = filteredProducts.slice(iniIndex, finIndex)
            setProducts(slicedProducts)
        }
    }, [filteredProducts, currentPage, itemsQuantity])

    useEffect(() => {
        if (subcategories.length && categoryId) {
            const filteredSubcategories = subcategories.filter(subcategory => subcategory.category === categoryId)
            const uniqueSubcategories = filteredSubcategories.filter((value, index, self) => 
                index === self.findIndex((t) => (
                    t.subcategory === value.subcategory
                ))
            )
            setCurrentSubcategories(uniqueSubcategories)
        }
    }, [subcategories, categoryId])

    useEffect(() => {
        if (filteredProducts.length) {
            const totalPages = Math.ceil(filteredProducts.length / itemsQuantity)
            setPages(totalPages)
            setPagesQuantity([...Array(totalPages).keys()].map(n => n + 1))
        }
    }, [filteredProducts, itemsQuantity])

    return (
        <main className='w-full min-h-[100svh]'>
            <h1 className='font-bold font-Raleway text-center leading-8 px-4 text-[1.75rem] md:text-3xl drop-shadow-sm pb-3
            pt-12 mt-20 w-fit mx-auto'>
                {
                    categoryId === 'higiene' ?
                        <span>
                            Higiene y Cuidado
                        </span>
                    :
                        categoryId === 'accesorios' ?
                            <span>
                                Accesorios
                            </span>
                    :
                        null
                }
            </h1>
            {
                (currentSubcategories.length && filteredProducts.length && !error && !errorSubcategories && !loading && !loadingSubcategories) ?
                    <>
                        <div className='w-full grid place-items-center'>
                            <button
                                type='button'
                                className='w-fit mx-auto pt-2 flex gap-1 items-center'
                                onClick={() => scrollToElement('subcategories-filter')}
                            >
                                <GoSortDesc className='block text-2xl'/>
                                <span className='font-bold tracking-wide'>
                                    Filtro
                                </span>
                            </button>
                        </div>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4'>
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
                        <div
                            className='grid grid-cols-1 sm:grid-cols-2 grid-flow-row w-fit mx-auto pt-5'
                            id='subcategories-filter'
                        >
                            {
                                currentSubcategories.map((subcategory, i) => {
                                    return (
                                        <Link
                                            to={`/categorias/${categoryId}/${subcategory.subcategory}`}
                                            key={i}
                                            className='grid place-items-center'
                                            id={subcategory.subcategory}
                                        >
                                            <span className='mx-3 my-[.57rem] font-bold text-sm tracking-wide
                                            drop-shadow-sm py-[.35rem] px-2 text-center border-2 w-28 rounded-lg
                                            border-red-500/50 bg-red-100/[7%]'>
                                                {subcategory.subcategory}
                                            </span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        {
                                categoryId === 'higiene' ?
                                    <div className='w-full grid place-items-center py-10'>
                                        <RiHandSanitizerFill className='block text-[2.6rem] text-red-500/50' />
                                    </div>
                            :
                                categoryId === 'accesorios' ?
                                    <div className='w-full grid place-items-center py-10'>
                                        <FaGem className='block text-[2.25rem] text-red-500/50' />
                                    </div>
                            :
                                null
                        }
                    </>
                : (!error && !errorSubcategories) ?
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

export default ItemCategoriesContainer;
