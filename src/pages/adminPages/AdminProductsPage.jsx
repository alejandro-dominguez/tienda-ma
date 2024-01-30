import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { RotatingLines } from 'react-loader-spinner';
import useGetAllProducts from '../../customHooks/useGetAllProducts';
import CreateProductForm from '../../components/adminComponents/CreateProductForm';
import AdminProductCard from '../../components/adminComponents/AdminProductCard';
import AdminSubcategoriesContainer from '../../components/adminComponents/AdminSubcategoriesContainer';
import useGetAllSubcategories from '../../customHooks/useGetAllSubcategories';
import AdminErrorPage from '../AdminErrorPage';

const AdminProductsPage = () => {
    const [ prods, error, loading ] = useGetAllProducts()
    const [ subcategories, errorSubcategories, loadingSubcategories ] = useGetAllSubcategories()
    const { authUser } = useContext(AuthContext)

    return (
        <>
        {
            authUser ?
                <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
                    { 
                        (prods.length && subcategories.length && !loading && !loadingSubcategories && !error && !errorSubcategories) ?
                            <div className='mx-auto flex flex-col'>
                                <AdminSubcategoriesContainer subcategories={subcategories} />
                                <CreateProductForm />
                                <h3 className='font-bold font-Raleway text-lg mt-8 md:ml-1 text-red-500'>
                                    Asegurar siempre al menos un producto destacado.
                                </h3>
                                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 gap-6'>
                                    {
                                        prods.map(prod => {
                                            return (
                                                <AdminProductCard
                                                    prod={prod}
                                                    key={prod.id}
                                                />
                                        )})
                                    }
                                </div>
                            </div>
                        : (!error && !errorSubcategories) ?
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
                            null
                    }
                </main>
            :
                <AdminErrorPage />
        }
        </>
    )
};

export default AdminProductsPage;
