import { useNavigate, useParams } from 'react-router-dom';
import { useGetSubcategories } from '../customHooks';
import { RotatingLines } from 'react-loader-spinner';
import { ErrorPage } from '../pages';

const ItemCategoriesContainer = () => {
    const { categoryId } = useParams()
    const [ subcategories, error, loading ] = useGetSubcategories(categoryId)
    const navigate = useNavigate()
    console.log(subcategories);
    return (
        <main className='w-full grid place-items-center overflow-x-hidden min-h-[100svh]'>
            {
                (subcategories.length && !error && !loading) ?
                    subcategories.map((subcategoryId, i) => {
                        return <p className='mt-72 bg-white/70' key={i} >{JSON.stringify(subcategoryId)}</p>
                    })
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
