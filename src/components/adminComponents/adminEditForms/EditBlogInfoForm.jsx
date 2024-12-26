import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditBlogInfoForm = ({
    blog,
    setActiveToast,
    setErrorToast
}) => {
    const [ newInfo, setNewInfo ] = useState({
        blogSubtitle: '',
        blogDrop: '',
    })
    const {
        id,
        subtitle,
        drop
    } = blog

    const registerInputs = ({ target: {name, value} }) => {
        setNewInfo({
            ...newInfo,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'blogs', id)
            await updateDoc(docRef, {
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 shadow-sm drop-shadow-sm bg-white w-72 md:w-80 mt-5 md:mt-0'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <label
                        htmlFor='blogSubtitle'
                        className='mt-2'    
                    >
                        Subtítulo:
                    </label>
                    <span className='text-sm mt-2 shadow p-2'>
                        {subtitle}
                    </span>
                    <input
                        type='text' name='blogSubtitle' id='blogSubtitle'
                        placeholder='...' required min={8}
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
                    <span className='text-sm mt-2 shadow p-2 max-h-[5.5rem] overflow-y-scroll'>
                        {drop}
                    </span>
                    <textarea
                        type='text' name='blogDrop' id='blogDrop' cols='10' rows='10' placeholder='...'
                        className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-24
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
                    Actualizar info.
                </span>
            </button>
        </form>
    )
};

export default EditBlogInfoForm;
