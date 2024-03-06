import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditBlogMainInfoForm = ({
    blog,
    setActiveToast,
    setErrorToast
}) => {
    const [ newInfo, setNewInfo ] = useState({
        blogTitle: '',
        blogSubtitle: '',
        blogDrop: '',
    })

    const registerInputs = ({ target: {name, value} }) => {
        setNewInfo({
            ...newInfo,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'blogs', blog.id)
            await updateDoc(docRef, {
                title: newInfo.blogTitle,
                subtitle: newInfo.blogSubtitle,
                drop: newInfo.blogDrop,
            })
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white mx-auto'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <h1 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto text-center leading-6'>
                Artículo: {blog.title}
            </h1>
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <label
                        htmlFor='blogTitle'
                        className='mt-2'    
                    >
                        Título:
                    </label>
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
                <div className='flex flex-col'>
                    <label
                        htmlFor='blogSubtitle'
                        className='mt-2'    
                    >
                        Subtítulo:
                    </label>
                    <span className='text-sm mt-2 shadow p-2'>
                        {blog.subtitle}
                    </span>
                    <input
                        type='text' name='blogSubtitle' id='blogSubtitle'
                        placeholder='...' min={8} required
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
                    <span className='text-sm mt-2 shadow p-2'>
                        {blog.drop}
                    </span>
                    <input
                        type='text' name='blogDrop' id='blogDrop'
                        placeholder='...' min={20} required
                        className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerInputs}
                    />
                </div>
            </div>
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar blog
                </span>
            </button>
        </form>
    )
};

export default EditBlogMainInfoForm;
