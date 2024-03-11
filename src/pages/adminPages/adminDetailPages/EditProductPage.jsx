import {
    Toaster,
    toast
} from 'sonner';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';
import useGetItemDetail from '../../../customHooks/useGetItemDetail';
import EditProductPriceForm from '../../../components/adminComponents/adminEditForms/EditProductPriceForm';
import EditProductInfoForm from '../../../components/adminComponents/adminEditForms/EditProductInfoForm';
import EditProductCategoriesForm from '../../../components/adminComponents/adminEditForms/EditProductCategoriesForm';
import EditProductLineForm from '../../../components/adminComponents/adminEditForms/EditProductLineForm';
import EditProductSizesForm from '../../../components/adminComponents/adminEditForms/EditProductSizesForm';
import EditProductImgsForm from '../../../components/adminComponents/adminEditForms/EditProductImgsForm';

const EditProductPage = () => {
    const { id } = useParams()
    const [ product, errorProduct, loadingProduct ] = useGetItemDetail(id)
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')

    if (activeToast && errorToast === '') {
        toast.success(
            'Producto editado',
            {
                duration: 2000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
        }, 2500)
    }

    if (activeToast && errorToast !== '') {
        toast.error(
            errorToast,
            {
                duration: 4000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
            setErrorToast('')
        }, 4500)
    }
    
    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            {
                (JSON.stringify(product) !== '{}' && !loadingProduct && !errorProduct) ?
                <>
                    <h1 className='flex flex-col font-bold font-Raleway text-lg text-center mt-3 drop-shadow-sm mx-auto'>
                        <span className='text-[1.05rem]'>
                            Producto:
                        </span>
                        {product.name}
                    </h1>
                    <EditProductPriceForm
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}    
                    />
                    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-start w-fit gap-8 mx-auto'>
                        <EditProductInfoForm
                            product={product}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}    
                        />
                        <div className='flex-col mx-auto'>
                            <EditProductCategoriesForm
                                product={product}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}    
                            />
                            <EditProductLineForm
                                product={product}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}    
                            />
                        </div>
                        <EditProductSizesForm
                            product={product}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}    
                        />
                        <EditProductImgsForm
                            product={product}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                    </div>
                    <Toaster
                        visibleToasts={1}
                        richColors
                        toastOptions={{
                            className: 'text-center',
                        }}
                    />
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
    )
};

export default EditProductPage;
