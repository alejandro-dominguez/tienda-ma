import {
    Link,
    useParams
} from 'react-router-dom';
import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import { RotatingLines } from 'react-loader-spinner';
import { FaGem } from 'react-icons/fa6';
import { RiHandSanitizerFill } from 'react-icons/ri';
import useGetSubcategories from '../customHooks/useGetSubcategories';
import useGetFirebaseCategoriesData from '../customHooks/useGetFirebaseCategoriesData';
import ItemCard from '../components/ItemCard';
import ErrorPage from '../pages/ErrorPage';
import DisabledSite from '../components/DisabledSite';

const ItemCategoriesContainer = () => {
    const { categoryId } = useParams()
    const [ subcategories, error, loading ] = useGetSubcategories(categoryId)
    const [ data, errorCategories, loadingCategories ] = useGetFirebaseCategoriesData(categoryId)
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite.enabled ?
                <main className='w-full min-h-[100svh]'>
                    <h1 className='font-bold font-Raleway text-center leading-8 px-4 text-[1.75rem] md:text-3xl drop-shadow-sm pb-3
                    pt-10 mt-20 w-fit mx-auto'>
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
                        (subcategories.length && data.length && !error && !errorCategories && !loading && !loadingCategories) ?
                            <>
                                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4'>
                                    {
                                        data.map(product => {
                                            return (
                                                <ItemCard
                                                    product={product}
                                                    itemList={true}
                                                    key={product.id}
                                                />
                                        )})
                                    }
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 grid-flow-row w-fit mx-auto'>
                                    {
                                        subcategories.map((subcategoryId, i) => {
                                            return (
                                                <Link
                                                    to={`/categorias/${categoryId}/${subcategoryId.subcategory}`}
                                                    key={i}
                                                    className='grid place-items-center'
                                                >
                                                    <span className='mx-3 my-[.57rem] font-bold text-sm tracking-wide
                                                    drop-shadow-sm py-[.35rem] px-2 text-center border-2 w-28 rounded-lg
                                                    border-red-500/50 bg-red-100/[7%]'>
                                                        {subcategoryId.subcategory}
                                                    </span>
                                                </Link>
                                        )})
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
                        : (!error && !errorCategories) ?
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
            :
                <DisabledSite />
        }
        </>
    )
};

export default ItemCategoriesContainer;
