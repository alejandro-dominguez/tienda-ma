import {
    Toaster,
    toast
} from 'sonner';
import { useState } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import EditProductPriceForm from '../adminComponents/adminEditForms/EditProductPriceForm';
import EditProductStockForm from '../adminComponents/adminEditForms/EditProductStockForm';
import EditProductLineForm from '../adminComponents/adminEditForms/EditProductLineForm';
import EditProductImgsForm from '../adminComponents/adminEditForms/EditProductImgsForm';
import EditProductImg1Form from '../adminComponents/adminEditForms/EditProductImg1Form';
import EditProductImg2Form from '../adminComponents/adminEditForms/EditProductImg2Form';
import EditProductImg3Form from '../adminComponents/adminEditForms/EditProductImg3Form';
import EditProductInfoForm from '../adminComponents/adminEditForms/EditProductInfoForm';
import EditProductCategoriesForm from '../adminComponents/adminEditForms/EditProductCategoriesForm';
import EditProductSizesForm from '../adminComponents/adminEditForms/EditProductSizesForm';
import EditProductFeatureForm from '../adminComponents/adminEditForms/EditProductFeatureForm';

const EditProductModal = ({
    product,
    setShowEditItemModal,
    cardRef
}) => {
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')

    if (activeToast && errorToast === '') {
        toast.success(
            'Contenido editado',
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

    const closeModal = () => {
        setShowEditItemModal(false)
        cardRef.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
        <div
            className='fixed top-0 left-0 w-full h-full bg-black/30 z-40'
            onClick={() => closeModal()}
        />
        <div className='absolute top-12 left-0 w-full h-full flex flex-col items-center text-center px-4 md:px-10'>
            <div className='w-full relative flex flex-col items-center gap-4 py-6 pb-10 bg-white
            rounded shadow-sm drop-shadow-sm z-50'>
                <h1 className='flex flex-col font-bold font-Raleway text-lg text-center drop-shadow-sm mx-auto px-4 md:px-0'>
                    <span className='text-[1.05rem]'>
                        Producto:
                    </span>
                    {product.name}
                </h1>
                <button 
                    type='button'
                    className='absolute right-5 top-5 text-xl transition-colors text-zinc-800/95
                    hover:text-red-600/90 focus:text-red-600/90 z-10'
                    onClick={() => closeModal()}
                >
                    <FaCircleXmark className='block'/>
                </button>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <EditProductPriceForm
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                    <EditProductImgsForm
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
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
                    <EditProductImg1Form
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                    <EditProductImg2Form
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                    <EditProductImg3Form
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                </div>
                    <EditProductInfoForm
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <EditProductCategoriesForm
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                    <EditProductSizesForm
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <EditProductStockForm
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                    <EditProductFeatureForm
                        product={product}
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                </div>
            </div>
        </div>
        <Toaster
            visibleToasts={1}
            richColors
            toastOptions={{
                className: 'text-center',
            }}
        />
        </>
    )
};

export default EditProductModal;
