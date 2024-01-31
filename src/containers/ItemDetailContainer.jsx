import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import ItemDetailCard from '../components/ItemDetailCard';
import useGetItemDetail from '../customHooks/useGetItemDetail';
import useGetFirebaseData from '../customHooks/useGetFirebaseData';
import ErrorPage from '../pages/ErrorPage';
import DisabledSite from '../components/DisabledSite';

const ItemDetailContainer = () => {
    const { categoryId, subcategoryId, id } = useParams()
    const [ product, errorProduct, loadingProduct ] = useGetItemDetail(id)
    const [ data, error, loading ] = useGetFirebaseData(categoryId, subcategoryId)
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite.enabled ?
                <main className='w-full grid place-items-start px-4 md:px-10 mt-28 min-h-[100svh]'>
                    {
                        (data.length && JSON.stringify(product) !== '{}' && !loading && !loadingProduct && !error && !errorProduct) ?
                            <ItemDetailCard product={product} products={data} />
                        : (!error &&!errorProduct) ?
                            <div className='w-full grid place-items-center mt-2 py-4 min-h-[33.5rem]'>
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
            :
               <DisabledSite />
        }
        </>
    )
};

export default ItemDetailContainer;
