import { useParams } from 'react-router-dom';
import { useGetFirebaseData } from '../customHooks';
import { ItemCard } from '../components';
import { ErrorPage } from '../pages';
import { RotatingLines } from 'react-loader-spinner';

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [ data, error, loading ] = useGetFirebaseData(categoryId)

    return (
        <main className='w-full grid place-items-center md:px-10 py-32 bg-rose-300/70 min-h-screen'>
            <h1 className='items-section-h1-shadow font-bold font-Raleway text-white md:text-4xl drop-shadow'>
                {
                    categoryId === 'bebe' ?
                        <span>
                            Selección de productos para bebés
                        </span>
                    : categoryId === 'mama' ?
                        <span>
                            Selección de productos para mamá
                        </span>
                    : categoryId === 'adultos' ?
                        <span>
                            Selección de productos para adultos
                        </span>
                    : categoryId === 'accesorios' ?
                        <span>
                            Selección de productos accesorios
                        </span>
                    : null
                }
            </h1>
            {
                (data.length && !loading && !error) ?
                    <div className='w-full grid grid-cols-4 my-4 md:px-5 py-4 bg-rose-500/95 rounded-lg shadow-md'>
                        {data.map(product => {
                            return (
                                <ItemCard
                                    product={product}
                                    itemList={true}
                                    key={product.id}
                                />
                            )
                        })}
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
