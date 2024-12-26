import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditBlogText3Form = ({
    blog,
    setActiveToast,
    setErrorToast
}) => {
    const [ newInfo, setNewInfo ] = useState({
        blogText3: '',
    })
    const {
        text3,
        id
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
                text3: newInfo.blogText3,
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white w-72 md:w-80'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <label
                        htmlFor='blogText3'
                        className='mt-2'    
                    >
                        Tercer texto:
                    </label>
                    {
                        text3 !== '' ?
                            <span className='text-sm mt-2 shadow p-2 max-h-28 overflow-y-scroll'>
                                {text3}
                            </span>
                        :
                            <span className='text-sm mt-2 shadow p-2 max-h-28 overflow-y-scroll'>
                                Aún no hay tercer texto.
                            </span>
                    }
                    <textarea
                        type='text' name='blogText3' id='blogText3' cols='10' rows='10'
                        placeholder='...' required minLength={20}
                        className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-[8.5rem]
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
                    Actualizar texto 3
                </span>
            </button>
        </form>
    )
};

export default EditBlogText3Form;
