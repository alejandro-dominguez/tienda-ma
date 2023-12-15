import { useParams } from 'react-router-dom';
import { useGetFirebaseData } from '../customHooks';
import { FeaturedItemCard } from '../components/homeComponents';

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [data, error, loading] = useGetFirebaseData(categoryId)

    return (
        <>
        {(data.length && !loading && !error) ?
            <section
                id='featured-section'
                className='w-full grid place-items-center md:px-10 py-10 bg-rose-300/70'
            >
                <div className='w-full flex md:flex-row flex-col items-center md:justify-between justify-center md:px-10 py-8
                bg-rose-500/95 rounded-lg shadow-md'>
                    {data.map(product => {
                        return <FeaturedItemCard product={product} />
                    })}
                </div>
            </section>
        : null}
        </>
    )
};

export default ItemListContainer;
