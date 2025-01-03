import {
    deleteDoc,
    doc,
    updateDoc
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { db } from '../../firebase/config';
import CustomImg from '../customImg/CustomImg';

const AdminBlogCard = ({
    blog,
    setActiveToast,
    setErrorToast
}) => {
    const navigate = useNavigate()
    const {
        id,
        img1,
        title,
    } = blog

    const deleteBlog = async (id) => {
        try {
            const docRef = doc(db, 'blogs', id)
            await deleteDoc(docRef)
            if (localStorage.editBlogData) {
                localStorage.removeItem('editBlogData')
            }
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const updateInactiveBlog = async (id) => {
        try {
            const docRef = doc(db, 'blogs', id)
            await updateDoc(docRef,
                {
                    featured: true
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const storeAndNavigate = () => {
        localStorage.setItem('editBlogData', JSON.stringify(blog))
        navigate((`/admin/consola/blogs/editar/${id}`))
    }

    const updateActiveBlog = async (id) => {
        try {
            const docRef = doc(db, 'blogs', id)
            await updateDoc(docRef,
                {
                    featured: false
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    return (
        <div className='p-6 bg-white drop-shadow-sm shadow-sm flex flex-col'>
            <div className='w-full drop-shadow-sm'>
                <CustomImg
                    src={img1}
                    alt='imagen de portada del blog'
                    contain={false}
                    center={false}
                    aspectVideo={true}
                />
            </div>
            <h3 className='font-black font-Raleway tracking-wide text-lg mt-2'>
                {title}
            </h3>
            <div className='flex flex-col gap-1 mt-auto'>
                <div className='flex items-center justify-between'>
                    <button
                        type='button'
                        className='mt-[.6rem] px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                        ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                        onClick={() => navigate((`/blogs/${id}`))}
                    >
                        <span className='tracking-wider text-[.8rem] font-Raleway'>
                            Ver artículo
                        </span>
                    </button>
                    <button
                        type='button'
                        className='mt-[.6rem] px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                        ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                        onClick={() => storeAndNavigate()}
                    >
                        <span className='tracking-wider text-[.8rem] font-Raleway'>
                            Editar
                        </span>
                    </button>
                    <BsFillTrash3Fill
                        className='block cursor-pointer text-[1.3rem] mt-2 drop-shadow-sm text-red-500/80'
                        onClick={() => deleteBlog(id)}
                    />
                </div>
                <div>
                    {
                        blog.featured !== true ?
                            <button
                                type='button'
                                className='mt-[.6rem] px-[.8rem] py-2 bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 leading-[1.1rem] text-start'
                                onClick={() => updateInactiveBlog(id)}
                            >
                                <span className='tracking-wider text-[.8rem] font-Raleway'>
                                    Destacar blog
                                </span>
                            </button>
                        :
                            <button
                                type='button'
                                className='mt-[.6rem] px-[.8rem] py-2 bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 leading-[1.1rem] text-start'
                                onClick={() => updateActiveBlog(id)}
                            >
                                <span className='tracking-wider text-[.8rem] font-Raleway'>
                                    No Destacar blog
                                </span>
                            </button>
                    }
                </div>
            </div>
        </div>
    )
};

export default AdminBlogCard;
