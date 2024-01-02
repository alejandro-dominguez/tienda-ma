import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import ItemDetailCard from '../components/ItemDetailCard';
import useGetItemDetail from '../customHooks/useGetItemDetail';
import ErrorPage from '../pages/ErrorPage';

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ product, error, loading ] = useGetItemDetail(id)

    return (
        <main className='w-full grid place-items-start px-4 md:px-10 mt-32 min-h-[100svh]'>
            {
                (JSON.stringify(product) !== '{}' && !loading && !error) ?
                        <ItemDetailCard product={product} />
                : !error ?
                    <div className='w-full grid place-items-center bg-white/70 mt-2 py-4 shadow-sm min-h-[24rem]'>
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
                : <ErrorPage />
            }
        </main>
    )
};

export default ItemDetailContainer;
