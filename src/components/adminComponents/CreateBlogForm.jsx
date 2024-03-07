import { useState } from 'react';
import { db } from '../../firebase/config';
import {
    addDoc,
    collection,
} from 'firebase/firestore';

const CreateBlogForm = ({
    setActiveToast,
    setErrorToast
}) => {
    const [ newBlog, setNewBlog ] = useState({
        blogTitle: '',
        blogSubtitle: '',
        blogDrop: '',
        blogText1: '',
        blogText2: '',
        blogImg1: '',
        blogImg2: '',
    })
    
    const registerInputs = ({ target: {name, value} }) => {
        setNewBlog({
            ...newBlog,
            [name]: value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'blogs'),
                {
                    title: newBlog.blogTitle,
                    subtitle: newBlog.blogSubtitle,
                    drop: newBlog.blogDrop,
                    text1: newBlog.blogText1,
                    text2: newBlog.blogText2,
                    img1: newBlog.blogImg1,
                    img2: newBlog.blogImg2,
                    featured: false,
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        } finally {
            e.target.reset()
        }
    }

    return (
        <form
            className='grid pt-3 pb-5 px-4 md:px-8 mt-5 shadow-sm drop-shadow-sm bg-white'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <h1 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto mt-1'>
                Nuevo Blog:
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
                        <input
                            type='text' name='blogTitle' id='blogTitle' required
                            placeholder='...' min={8}
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='blogSubtitle'
                            className='mt-3'    
                        >
                            Subtítulo:
                        </label>
                        <input
                            type='text' name='blogSubtitle' id='blogSubtitle' required
                            placeholder='...' min={8}
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='blogDrop'
                            className='mt-2'    
                        >
                            Bajada:
                        </label>
                        <textarea
                            type='text' name='blogDrop' id='blogDrop' required cols='10' rows='10'
                            placeholder='...' min={20}
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
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
                        <textarea
                            type='text' name='blogText1' id='blogText1' required cols='10' rows='10'
                            placeholder='...' min={20}
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='blogText2'
                            className='mt-2'    
                        >
                            Segundo texto:
                        </label>
                        <textarea
                            type='text' name='blogText2' id='blogText2' cols='10' rows='10'
                            placeholder='...' min={20}
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
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
                        <input
                            type='text' name='blogImg1' id='blogImg1' required
                            placeholder='...' min={8}
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='blogImg2'
                            className='mt-3'    
                        >
                            Link imagen 2:
                        </label>
                        <input
                            type='text' name='blogImg2' id='blogImg2'
                            placeholder='...' min={8}
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                </div>
            </div>
            <button
                type='submit'
                className='grid place-items-center justify-self-center py-2 w-56 mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Cargar nuevo blog
                </span>
            </button>
        </form>
    )
};

export default CreateBlogForm;
