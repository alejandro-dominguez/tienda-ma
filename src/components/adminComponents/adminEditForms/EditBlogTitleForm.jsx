import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditBlogTitleForm = ({
    blog,
    setActiveToast,
    setErrorToast
}) => {
    const [ newInfo, setNewInfo ] = useState({
        blogTitle: '',
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white max-w-sm mx-auto'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <h3 className='font-bold font-Raleway text-lg mt-1 drop-shadow-sm mx-auto leading-6'>
                Artículo: {blog.title}
            </h3>
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
                        placeholder='...' min={8} required
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
                    Actualizar título
                </span>
            </button>
        </form>
    )
};

export default EditBlogTitleForm;
