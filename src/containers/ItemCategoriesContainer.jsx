import {
    Link,
    useNavigate,
    useParams
} from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { FaBabyCarriage } from 'react-icons/fa6';
import useGetSubcategories from '../customHooks/useGetSubcategories';
import ErrorPage from '../pages/ErrorPage';

const ItemCategoriesContainer = () => {
    const { categoryId } = useParams()
    const [ subcategories, error, loading ] = useGetSubcategories(categoryId)
    const navigate = useNavigate()

    return (
        <main className='w-full overflow-hidden min-h-[100svh] bg-white/70'>
            <h1 className='font-bold font-Raleway text-2xl md:text-3xl drop-shadow-sm pb-5 md:pb-8 pt-10 mt-20 w-fit mx-auto'>
                {
                    categoryId === 'bebe' ?
                        <span>
                            Categorías de Bebés
                        </span>
                    :
                        categoryId === 'mama' ?
                            <span>
                                Categorías de Mamá
                            </span>
                    :
                        categoryId === 'adultos' ?
                            <span>
                                Categorías de Adultos
                            </span>
                    :
                        categoryId === 'accesorios' ?
                            <span>
                                Categorías de Accesorios
                            </span>
                    :
                        null
                }
            </h1>
            {
                (subcategories.length && !error && !loading) ?
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row
                        items-start gap-3 sm:gap-5 md:gap-8 px-4 lg:px-40'>
                            {
                                subcategories.map((subcategoryId, i) => {
                                    return (
                                        <Link
                                            to='/'
                                            key={i}
                                            className='grid place-items-center'
                                        >
                                            <span className='font-Raleway font-bold tracking-wide drop-shadow-sm
                                            py-2 text-center border-2 w-36 rounded-lg border-red-500/50 bg-red-100/5'>
                                                {subcategoryId.subcategory}
                                            </span>
                                        </Link>
                                )})
                            }
                        </div>
                        {
                            categoryId === 'bebe' ?
                                <div className='w-full grid place-items-center py-12 lg:py-24'>
                                    <FaBabyCarriage className='block text-[3.5rem] text-red-500/50' />
                                </div>
                            :
                                categoryId === 'mama' ?
                                    <div className='w-full grid place-items-center pt-24'>
                                        <FaBabyCarriage className='block text-[3.5rem] text-red-500/50' />
                                    </div>
                            :
                                categoryId === 'adultos' ?
                                    <div className='w-full grid place-items-center pt-24'>
                                        <FaBabyCarriage className='block text-[3.5rem] text-red-500/50' />
                                    </div>
                            :
                                categoryId === 'accesorios' ?
                                    <div className='w-full grid place-items-center pt-24'>
                                        <FaBabyCarriage className='block text-[3.5rem] text-red-500/50' />
                                    </div>
                            :
                                null
                        }
                    </>
                : !error ?
                    <div className='w-full grid place-items-center pt-10'>
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
