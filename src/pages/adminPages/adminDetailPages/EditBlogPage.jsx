import {
    Toaster,
    toast
} from 'sonner';
import {
    useState,
    useContext,
    useEffect
} from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { BlogContext } from '../../../contexts/blogContext';
import EditBlogTitleForm from '../../../components/adminComponents/adminEditForms/EditBlogTitleForm';
import EditBlogInfoForm from '../../../components/adminComponents/adminEditForms/EditBlogInfoForm';
import EditBlogText1Form from '../../../components/adminComponents/adminEditForms/EditBlogText1Form';
import EditBlogText2Form from '../../../components/adminComponents/adminEditForms/EditBlogText2Form';
import EditBlogText3Form from '../../../components/adminComponents/adminEditForms/EditBlogText3Form';
import EditBlogImgsForm from '../../../components/adminComponents/adminEditForms/EditBlogImgsForm';
import AdminErrorPage from '../../../pages/AdminErrorPage';

const EditBlogPage = () => {
    const { id } = useParams()
    const { blogs, errorBlogs, loadingBlogs } = useContext(BlogContext)
    const [ blog, setBlog ] = useState({})
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')


    useEffect(() => {
        if (localStorage.editBlogData) {
            setBlog(JSON.parse(localStorage.editBlogData))
        }
        else if (blogs.length && !loadingBlogs && !errorBlogs) {
            const getBlogId = blogs.find(blog => blog.id === id)
            setBlog(getBlogId)
        }
    }, [])

    if (activeToast && errorToast === '') {
        toast.success(
            'Blog editado',
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
                (JSON.stringify(blog) !== '{}' && blogs.length && !loadingBlogs && !errorBlogs) ?
                    <>
                    <h1 className='flex flex-col font-bold font-Raleway text-lg text-center mt-3 drop-shadow-sm mx-auto'>
                        <span className='text-[1.05rem]'>
                            Artículo:
                        </span>
                        {blog.title}
                    </h1>
                    <div className='flex flex-col items-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 place-items-start md:gap-8'>
                            <EditBlogTitleForm
                                blog={blog}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
                            <EditBlogInfoForm
                                blog={blog}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 place-items-start md:gap-8'>
                            <EditBlogImgsForm
                                blog={blog}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
                            <EditBlogText1Form
                                blog={blog}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 place-items-start md:gap-8'>
                            <EditBlogText2Form
                                blog={blog}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
                            <EditBlogText3Form
                                blog={blog}
                                setActiveToast={setActiveToast}
                                setErrorToast={setErrorToast}
                            />
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
                : !errorBlogs ?
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

export default EditBlogPage;
