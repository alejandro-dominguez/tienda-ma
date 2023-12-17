import { useGetProductDetail } from '../customHooks';

const ItemDetailContainer = () => {
    const [ product, error, loading ] = useGetProductDetail()

    return (
        <main className='w-full grid place-items-center md:px-10 py-40 bg-rose-300/70 min-h-screen'>
        
        </main>
    )
};

export default ItemDetailContainer;
