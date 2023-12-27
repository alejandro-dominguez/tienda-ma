import { useParams } from 'react-router-dom';
import { useGetFirebaseData } from '../customHooks';
import { ItemCard } from '../components';
import { ErrorPage } from '../pages';
import { RotatingLines } from 'react-loader-spinner';

const ItemListContainer = (
    categoryId,
    subcategoryId
    ) => {
    const [ data, error, loading ] = useGetFirebaseData(categoryId, subcategoryId)

    return (
        <main className='w-full grid place-items-center md:px-10 py-32 bg-rose-300/70 min-h-screen min-h-[100svh]'>
            <h1 className='items-section-h1-shadow font-bold font-Raleway text-white md:text-4xl drop-shadow'>
                {
                    categoryId === 'bebe' ?
                        <span>
                            Productos para bebés
                        </span>
                    :
                        categoryId === 'mama' ?
                            <span>
                                Productos para mamá
                            </span>
                    :
                        categoryId === 'adultos' ?
                            <span>
                                Productos para adultos
                            </span>
                    :
                        categoryId === 'accesorios' ?
                            <span>
                                Productos accesorios
                            </span>
                    :
                        null
                }
            </h1>
            {
                (data.length && !loading && !error) ?
                    <div className='w-full grid grid-cols-4 my-4 md:px-5 py-4 bg-rose-500/95 rounded-lg shadow-md'>
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
                : !error ?
                    <div className='w-full grid place-items-center my-4 md:px-10 py-8 bg-rose-500/95 rounded-lg
                    shadow-md min-h-[17.5rem]'>
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

export default ItemListContainer;
