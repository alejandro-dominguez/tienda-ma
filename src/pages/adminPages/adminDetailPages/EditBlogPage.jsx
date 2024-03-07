import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/authContext';
import {
    Toaster,
    toast
} from 'sonner';
import {
    useContext,
    useState
} from 'react';
import useGetBlogArticle from '../../../customHooks/useGetBlogArticle';
import EditBlogForm from '../../../components/adminComponents/EditBlogForm';
import AdminErrorPage from '../../AdminErrorPage';

const EditBlogPage = () => {
    const { id } = useParams()
    const [ blog, error, loading ] = useGetBlogArticle(id)
    const { authUser } = useContext(AuthContext)
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
        <>
        {
            authUser ?
                <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
                    {
                        (JSON.stringify(blog) !== '{}' && !loading && !error) ?
                            <div>
                                <EditBlogForm blog={blog}/>
                                <Toaster
                                    visibleToasts={1}
                                    richColors
                                    toastOptions={{
                                        className: 'text-center',
                                    }}
                                />
                            </div>
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
                            null
                    }
                </main>
            :
                <AdminErrorPage />
        }
        </>
    )
};

export default EditBlogPage;
