import {
    useContext,
    useState
} from 'react';
import { db } from '../../../firebase/config';
import {
    useNavigate,
    useParams
} from 'react-router-dom';
import {
    Toaster,
    toast
} from 'sonner';
import {
    doc,
    updateDoc
} from 'firebase/firestore';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/authContext';
import useGetBlogArticle from '../../../customHooks/useGetBlogArticle';

const EditBlogPage = () => {
    const { id } = useParams()
    const [ blog, error, loading ] = useGetBlogArticle(id)
    const [ errorBlog, setErrorBlog ] = useState('')
    const [ newBlog, setNewBlog ] = useState({
        blogTitle: '',
        blogSubtitle: '',
        blogDrop: '',
        blogText1: '',
        blogText2: '',
        blogImg1: '',
        blogImg2: '',
    })
    const navigate = useNavigate()
    const { authUser } = useContext(AuthContext)
    
    const registerInputs = ({ target: {name, value} }) => {
        setNewBlog({
            ...newBlog,
            [name]: value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'blogs', `${id}`)
            await updateDoc(docRef,
                {
                    title: `${newBlog.blogTitle}`,
                    subtitle: `${newBlog.blogSubtitle}`,
                    drop: `${newBlog.blogDrop}`,
                    text1: `${newBlog.blogText1}`,
                    text2: `${newBlog.blogText2}`,
                    img1: `${newBlog.blogImg1}`,
                    img2: `${newBlog.blogImg2}`,
                }
            )
            setNewBlog(
                {
                    blogTitle: '',
                    blogSubtitle: '',
                    blogDrop: '',
                    blogText1: '',
                    blogText2: '',
                    blogImg1: '',
                    blogImg2: '',
                }
            )
            toast.success(
                'Artículo editado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                navigate('/admin/consola')
            }, 3500)
        } catch (error) {
            setNewBlog(
                {
                    blogTitle: '',
                    blogSubtitle: '',
                    blogDrop: '',
                    blogText1: '',
                    blogText2: '',
                    blogImg1: '',
                    blogImg2: '',
                }
            )
            setErrorBlog(error.message)
            toast.error(
                `${errorBlog}`,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            {
                (JSON.stringify(blog) !== '{}' && !loading && !error) ?
                    <form
                        className='grid pt-3 pb-5 px-4 md:px-8 mt-5 shadow-sm drop-shadow-sm bg-white'
                        autoComplete='off'
                        onSubmit={handleSubmit}
                    >
                        <h1 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto text-center leading-6'>
                            Artículo: {blog.title}
                        </h1>
                        <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className='flex flex-col gap-1'>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='blogTitle'
                                        className='mt-2'    
                                    >
                                        Título:
                                    </label>
                                    <div>
                                        <span className='text-sm mt-2 shadow p-2'>
                                            {blog.title}
                                        </span>
                                        <input
                                            type='text' name='blogTitle' id='blogTitle'
                                            placeholder='Nuevo título' min={8} required
                                            className='w-full text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                                            rounded-sm drop-shadow-sm text-black placeholder:tracking-normal'
                                            onChange={registerInputs}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='blogSubtitle'
                                        className='mt-2'    
                                    >
                                        Subtítulo:
                                    </label>
                                    <div>
                                        <span className='text-sm mt-2 shadow p-2'>
                                            {blog.subtitle}
                                        </span>
                                        <input
                                            type='text' name='blogSubtitle' id='blogSubtitle'
                                            placeholder='Nuevo subtítulo' min={8} required
                                            className='w-full text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                                            rounded-sm drop-shadow-sm text-black placeholder:tracking-normal'
                                            onChange={registerInputs}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='blogDrop'
                                        className='mt-2'    
                                    >
                                        Bajada:
                                    </label>
                                    <div>
                                        <span className='text-sm mt-2 max-h-[4.5rem] overflow-y-scroll shadow p-2'>
                                            {blog.drop}
                                        </span>
                                        <textarea
                                            type='text' name='blogDrop' id='blogDrop' cols='10' rows='10'
                                            placeholder='Nueva bajada' min={20} required
                                            className='text-[.8rem] mt-3 w-full bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                                            rounded-sm drop-shadow-sm text-black placeholder:tracking-normal'
                                            onChange={registerInputs}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='blogText1'
                                        className='mt-2'    
                                    >
                                        Primer texto:
                                    </label>
                                    <div>
                                        <span className='text-sm mt-2 max-h-48 overflow-y-scroll shadow p-2'>
                                            {blog.text1}
                                        </span>
                                        <textarea
                                            type='text' name='blogText1' id='blogText1' cols='10' rows='10'
                                            placeholder='Nuevo primer texto' min={20} required
                                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                                            rounded-sm drop-shadow-sm text-black w-full placeholder:tracking-normal'
                                            onChange={registerInputs}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='blogText2'
                                        className='mt-2'    
                                    >
                                        Segundo texto:
                                    </label>
                                    <div>
                                        <span className='text-sm mt-2 max-h-48 overflow-y-scroll shadow p-2'>
                                            {blog.text2}
                                        </span>
                                        <textarea
                                            type='text' name='blogText2' id='blogText2' cols='10' rows='10'
                                            placeholder='Nuevo segundo texto' min={20} required
                                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                                            rounded-sm drop-shadow-sm text-black w-full placeholder:tracking-normal'
                                            onChange={registerInputs}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='blogImg1'
                                        className='mt-2'    
                                    >
                                        Link imagen 1:
                                    </label>
                                    <div>
                                        <span className='text-sm mt-2 shadow p-2'>
                                            {blog.img1}
                                        </span>
                                        <input
                                            type='text' name='blogImg1' id='blogImg1'
                                            placeholder='Nuevo link' min={8} required
                                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                                            rounded-sm drop-shadow-sm text-black w-full placeholder:tracking-normal'
                                            onChange={registerInputs}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='blogImg2'
                                        className='mt-2'    
                                    >
                                        Link imagen 2:
                                    </label>
                                    <div>
                                        <span className='text-sm mt-2 shadow p-2'>
                                            {blog.img2}
                                        </span>
                                        <input
                                            type='text' name='blogImg2' id='blogImg2'
                                            placeholder='Nuevo link' min={8} required
                                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                                            rounded-sm drop-shadow-sm text-black w-full placeholder:tracking-normal'
                                            onChange={registerInputs}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='grid place-items-center justify-self-center py-2 w-56 mt-5 bg-zinc-900 rounded-md transition-colors
                            ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
                        >
                            <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                                Actualizar blog
                            </span>
                        </button>
                        <Toaster
                            richColors
                            toastOptions={{
                                className: 'text-center',
                            }}
                        />
                    </form>
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
    )
}

export default EditBlogPage;
