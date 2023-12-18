import { ErrorPage } from '../pages';
import { RotatingLines } from 'react-loader-spinner';
import { ItemDetailCard } from '../components';
import { useParams } from 'react-router-dom';
import { useGetItemDetail } from '../customHooks';

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ product, error, loading ] = useGetItemDetail(id)

    return (
        <main className='w-full grid place-items-start md:px-10 py-40 bg-rose-300/70 min-h-screen'>
            {
                (JSON.stringify(product) !== '{}' && !loading && !error) ?
                    <div className='w-full py-6 px-7 bg-rose-500/95 rounded-lg shadow-md'>
                        <ItemDetailCard product={product} />
                    </div>
                : !error ?
                    <div className='w-full grid place-items-center p-10 bg-rose-500/95 rounded-lg shadow-md min-h-[17.5rem]'>
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
        </main>
    )
};

export default ItemDetailContainer;
