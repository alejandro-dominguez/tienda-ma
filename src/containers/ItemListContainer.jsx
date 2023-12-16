import { useParams } from 'react-router-dom';
import { useGetFirebaseData } from '../customHooks';
import { ItemCard } from '../components';

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [data, error, loading] = useGetFirebaseData(categoryId)

    return (
        <>
        {(data.length && !loading && !error) ?
            <main className='w-full grid place-items-center md:px-10 py-40 bg-rose-300/70'>
                <h1 className='items-section-h1-shadow font-bold font-Raleway text-teal-50 md:text-4xl drop-shadow'>
                    {categoryId === 'bebe' ?
                        <span className='block'>
                            Selección de productos para bebés
                        </span>
                    : categoryId === 'mama' ?
                        <span className='block'>
                            Selección de productos para mamá
                        </span>
                    : categoryId === 'adultos' ?
                        <span className='block'>
                            Selección de productos para adultos
                        </span>
                    : categoryId === 'accesorios' ?
                        <span className='block'>
                            Selección de productos accesorios
                        </span>
                    : null}
                </h1>
                <div className='grid grid-cols-4 my-4 md:px-10 py-8 gap-10 bg-rose-500/95 rounded-lg shadow-md'>
                    {data.map(product => {
                        return <ItemCard product={product} />
                    })}
                </div>
            </main>
        : null}
        </>
    )
};

export default ItemListContainer;
