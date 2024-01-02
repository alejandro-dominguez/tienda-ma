import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ItemCard from '../components/ItemCard';
import useGetFirebaseData from '../customHooks/useGetFirebaseData';

const ItemListContainer = () => {
    const urlParams = useParams()
    const { categoryId, subcategoryId } = urlParams
    const [ data, error, loading ] = useGetFirebaseData(categoryId, subcategoryId)

    return (
        <main className='w-full overflow-hidden min-h-[100svh] shadow'>
            <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-10 mt-20 w-fit mx-auto'>
                {
                        categoryId === 'bebe' ?
                            <span>
                                Pañales para Bebés
                            </span>
                    :
                        categoryId === 'adulto' ?
                            <span>
                                Pañales para Adultos
                            </span>
                    :
                        categoryId === 'higiene' ?
                            <span>
                                Productos de Higiene y Cuidado
                            </span>
                    :
                        categoryId === 'accesorios' ?
                            <span>
                                Productos Accesorios
                            </span>
                    :
                        null
                }
            </h1>
            {
                (data.length && !loading && !error) ?
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 mb-20
                    p-4 bg-white/70 shadow-sm'>
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
                :
                    <ErrorPage />
            }
        </main>
    )
};

export default ItemListContainer;
