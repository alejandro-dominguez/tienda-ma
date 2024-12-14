import {
    useContext,
    useState,
    useEffect
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import { ProductsContext } from '../../../contexts/productsContext';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import EditProductPriceForm from '../../../components/adminComponents/adminEditForms/EditProductPriceForm';
import EditProductStockForm from '../../../components/adminComponents/adminEditForms/EditProductStockForm';
import EditProductInfoForm from '../../../components/adminComponents/adminEditForms/EditProductInfoForm';
import EditProductCategoriesForm from '../../../components/adminComponents/adminEditForms/EditProductCategoriesForm';
import EditProductLineForm from '../../../components/adminComponents/adminEditForms/EditProductLineForm';
import EditProductSizesForm from '../../../components/adminComponents/adminEditForms/EditProductSizesForm';
import EditProductImgsForm from '../../../components/adminComponents/adminEditForms/EditProductImgsForm';
import AdminErrorPage from '../../../pages/AdminErrorPage';
import EditProductImg1Form from '../../../components/adminComponents/adminEditForms/EditProductImg1Form';
import EditProductImg2Form from '../../../components/adminComponents/adminEditForms/EditProductImg2Form';
import EditProductImg3Form from '../../../components/adminComponents/adminEditForms/EditProductImg3Form';

const EditProductPage = () => {
    const { id } = useParams()
    const { prods, error, loading } = useContext(ProductsContext)
    const [ prod, setProd ] = useState([])
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')
    
    useEffect(() => {
        if (prods.length && id) {
            const productDetail = prods.filter(product => product.id === id)
            setProd(productDetail)
        }
    }, [prods, id])

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
                (prod.length && !loading && !error) ?
                <>
                    <h1 className='flex flex-col font-bold font-Raleway text-lg text-center mt-3 drop-shadow-sm mx-auto'>
                        <span className='text-[1.05rem]'>
                            Producto:
                        </span>
                        {prod[0].brand} {prod[0].name}
                    </h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-start w-fit gap-8 mx-auto'>
                        <EditProductPriceForm
                            product={prod[0]}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}    
                        />
                        <EditProductStockForm
                            product={prod[0]}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}    
                        />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-start w-fit gap-8 mx-auto'>
                        <EditProductInfoForm
                            product={prod[0]}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}    
                        />
                        <div className='flex-col mx-auto'>
                            <EditProductCategoriesForm
                                product={prod[0]}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}    
                            />
                            <EditProductLineForm
                                product={prod[0]}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}    
                            />
                        </div>
                        <EditProductSizesForm
                            product={prod[0]}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}    
                        />
                        <EditProductImgsForm
                            product={prod[0]}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <EditProductImg1Form
                            product={prod[0]}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <EditProductImg2Form
                            product={prod[0]}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <EditProductImg3Form
                            product={prod[0]}
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
                : !error ?
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
                    <AdminErrorPage />
            }
        </main>
    )
};

export default EditProductPage;
