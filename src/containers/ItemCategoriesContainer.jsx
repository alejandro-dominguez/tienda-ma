import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetSubcategories } from '../customHooks';
import { RotatingLines } from 'react-loader-spinner';
import { ErrorPage } from '../pages';

const ItemCategoriesContainer = () => {
    const { categoryId } = useParams()
    const [ subcategories, error, loading ] = useGetSubcategories(categoryId)
    const navigate = useNavigate()

    return (
        <main className='w-full grid place-items-center overflow-x-hidden min-h-[100svh] px-4 md:px-10'>
            {
                (subcategories.length && !error && !loading) ?
                    <div className='w-full grid grid-cols-5 place-items-center bg-white/70 py-32'>
                        {
                            subcategories.map((subcategoryId, i) => {
                                return (
                                    <Link
                                        to='/'
                                        key={i}
                                        className='uppercase font-Raleway font-bold text-lg drop-shadow-sm'
                                    >
                                        {subcategoryId.subcategory}
                                    </Link>
                            )})
                        }
                    </div>
                : !error ?
                    <div className='w-full grid place-items-center bg-white/70 shadow-md min-h-[100svh]'>
                        <div className='p-5 bg-teal-600/20 rounded-lg'>
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='96'
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
