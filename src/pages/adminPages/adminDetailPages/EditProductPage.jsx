import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/authContext';
import useGetItemDetail from '../../../customHooks/useGetItemDetail';
import EditProductPriceForm from '../../../components/adminComponents/EditProductPriceForm';
import EditProductInfoForm from '../../../components/adminComponents/EditProductInfoForm';
import EditProductCategoriesForm from '../../../components/adminComponents/EditProductCategoriesForm';
import EditProductSizesForm from '../../../components/adminComponents/EditProductSizesForm';
import EditProductImgsForm from '../../../components/adminComponents/EditProductImgsForm';
import AdminErrorPage from '../../AdminErrorPage';

const EditProductPage = () => {
    const { id } = useParams()
    const [ product, errorProduct, loadingProduct ] = useGetItemDetail(id)
    const { authUser } = useContext(AuthContext)
    
    return (
        <>
        {
            authUser ?
                <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
                    {
                        (JSON.stringify(product) !== '{}' && !loadingProduct && !errorProduct) ?
                        <>
                            <EditProductPriceForm product={product} />
                            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center w-fit gap-8 mx-auto'>
                                <EditProductInfoForm product={product} />
                                <div className='flex-col'>
                                    <EditProductCategoriesForm product={product} />
                                    <EditProductImgsForm product={product} />
                                </div>
                            </div>
                            <EditProductSizesForm product={product} />
                        </>
                        : !errorProduct ?
                            <div className='w-full grid place-items-center mt-36 py-4 min-h-[24rem]'>
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
                            null
                    }
                </main>
            :
                <AdminErrorPage />
        }
        </>
    )
};

export default EditProductPage;
