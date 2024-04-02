import {
    Toaster,
    toast
} from 'sonner';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';
import useGetAllProducts from '../../customHooks/useGetAllProducts';
import CreateProductForm from '../../components/adminComponents/CreateProductForm';
import AdminProductsContainer from '../../components/adminComponents/AdminProductsContainer';
import AdminSubcategoriesContainer from '../../components/adminComponents/AdminSubcategoriesContainer';
import AdminErrorPage from '../../pages/AdminErrorPage';

const AdminProductsPage = () => {
    const [ prods, subcategories, brands, productLines, featuredProducts, stockedProducts, notStockedProducts, error, loading ] = useGetAllProducts()
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

    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            { 
                (prods.length && subcategories.length && !loading && !error) ?
                    <div className='mx-auto flex flex-col'>
                        <AdminSubcategoriesContainer
                            subcategories={subcategories}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                            />
                        <CreateProductForm
                            subcategories={subcategories}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <h3 className='font-bold font-Raleway text-lg mt-8 md:ml-1 text-red-500'>
                            Asegurar siempre al menos un producto destacado.
                        </h3>
                        <AdminProductsContainer
                            prods={prods}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <Toaster
                            visibleToasts={1}
                            richColors
                            toastOptions={{
                                className: 'text-center',
                            }}
                        />
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
                    <AdminErrorPage />
            }
        </main>
    )
};

export default AdminProductsPage;
