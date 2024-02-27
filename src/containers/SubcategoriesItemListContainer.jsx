import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ItemCard from '../components/ItemCard';
import useGetFirebaseSubcategoriesData from '../customHooks/useGetFirebaseSubcategoriesData';
import DisabledSite from '../components/DisabledSite';

const SubcategoriesItemListContainer = () => {
    const { subcategoryId } = useParams()
    const [ data, error, loading ] = useGetFirebaseSubcategoriesData(subcategoryId)
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite.enabled ?
                <main className='w-full min-h-[100svh]'>
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-12 mt-20 w-fit mx-auto'>
                        {
                            subcategoryId === 'pañales-bebe' ?
                                <span>
                                    Pañales para Bebés
                                </span>
                            :
                                subcategoryId === 'pañales-adulto' ?
                                    <span>
                                        Pañales para Adultos
                                    </span>
                            :
                                null
                        }
                    </h1>
                    {
                        (data.length && !loading && !error) ?
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20 p-4'>
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
                            <div className='w-full grid place-items-center mt-2 py-4 min-h-[24rem]'>
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
            :
                <DisabledSite />
        }
        </>
    )
};

export default SubcategoriesItemListContainer;
