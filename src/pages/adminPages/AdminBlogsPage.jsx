import {
    Toaster,
    toast
} from 'sonner';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';
import useGetBlogs from '../../customHooks/useGetBlogs';
import AdminBlogCard from '../../components/adminComponents/AdminBlogCard';
import CreateBlogForm from '../../components/adminComponents/CreateBlogForm';

const AdminBlogsPage = () => {
    const [ blogs, errorBlogs, loadingBlogs ] = useGetBlogs()
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
                (blogs.length && !loadingBlogs && !errorBlogs) ?
                    <div className='mx-auto flex flex-col'>
                        <CreateBlogForm
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <h3 className='font-bold font-Raleway text-lg mt-8 md:ml-1 text-red-500'>
                            Asegurar siempre al menos un blog destacado.
                        </h3>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 gap-6'>
                            {
                                blogs.map(blog => {
                                    return (
                                        <AdminBlogCard
                                            blog={blog}
                                            key={blog.id}
                                            setActiveToast={setActiveToast}
                                            setErrorToast={setErrorToast}
                                        />
                                )})
                            }
                        </div>
                        <Toaster
                            visibleToasts={1}
                            richColors
                            toastOptions={{
                                className: 'text-center',
                            }}
                        />
                    </div>
                : !errorBlogs ?
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
    )
};

export default AdminBlogsPage;
