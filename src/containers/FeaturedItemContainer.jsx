import { ItemCard } from '../components';
import { useGetFirebaseData } from '../customHooks';
import { useParams } from 'react-router-dom';
import { ErrorPage } from '../pages';
import { RotatingLines } from 'react-loader-spinner';

const FeaturedItemContainer = () => {
    const { categoryId } = useParams()
    const [ data, error, loading ] = useGetFirebaseData(categoryId)
    
    return (
        <section
            id='featured-section'
            className='w-full grid place-items-center md:px-10 py-10 bg-rose-300/70'
        >
            <div className='w-full flex md:flex-row flex-col items-center md:justify-between justify-center md:px-10 py-8
            bg-rose-500/95 rounded-lg shadow-md'>
                {
                    (data.length && !loading && !error) ?
                        data.map(product => {
                            return (
                                <ItemCard
                                    product={product}
                                    itemList={false}
                                />
                            )
                        })
                    : !error ?
                        <div className='w-full grid place-items-center md:px-10 py-8 bg-rose-500/95 rounded-lg shadow-md min-h-[20.5rem]'>
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='96'
                                visible={true}
                            />
                        </div>
                    : <ErrorPage />
                }
            </div>
        </section>
    )
};

export default FeaturedItemContainer;
