import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import ItemCard from '../components/ItemCard';
import BlogMock from '../components/homeComponents/BlogMock';
import ErrorPage from '../pages/ErrorPage';
import useGetFirebaseData from '../customHooks/useGetFirebaseData';

const FeaturedItemsContainer = () => {
    const { categoryId, subcategoryId } = useParams()
    const [ data, error, loading ] = useGetFirebaseData(categoryId, subcategoryId)

    return (
        <section
            id='featured-section'
            className='w-full grid place-items-center md:px-10 py-2'
        >
            {
                (data.length && !loading && !error) ?
                    <div className='w-full py-8 justify-between items-start grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <BlogMock />
                        <div className='flex flex-col gap-5'>
                            {
                                data.map((productData, i) => {
                                    return (
                                        <ItemCard
                                            key={i}
                                            product={productData}
                                            itemList={false}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                : !error ?
                    <div className='w-full grid place-items-center bg-white/70 px-4 md:px-10 py-8 shadow-md min-h-[20.5rem]'>
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
                : <ErrorPage />
            }
        </section>
    )
};

export default FeaturedItemsContainer;
