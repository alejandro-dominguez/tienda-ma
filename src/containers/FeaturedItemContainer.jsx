import { ItemCard } from '../components';
import { useGetFirebaseData } from '../customHooks';
import { useParams } from 'react-router-dom';
import { ErrorPage } from '../pages';
import { RotatingLines } from 'react-loader-spinner';
import { BlogMock } from '../components/homeComponents';

const FeaturedItemContainer = () => {
    const { categoryId } = useParams()
    const [ data, error, loading ] = useGetFirebaseData(categoryId)
    const product = data[0]

    return (
        <section
            id='featured-section'
            className='w-full grid place-items-center md:px-10 py-10'
        >
            <div className='w-full md:px-10 py-8 justify-between items-start grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    (data.length && !loading && !error) ?
                        <>
                        <BlogMock />
                        <ItemCard
                            product={product}
                            itemList={false}
                        />
                        </>
                    : !error ?
                        <div className='w-full grid place-items-center bg-white md:px-10 py-8 shadow-md min-h-[20.5rem]'>
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

/* (data.length && !loading && !error) ?
data.map(product => {
    return (
        <ItemCard
            product={product}
            itemList={false}
            key={product.id}
        />
    )
}
) */