import {
    addDoc,
    collection,
} from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase/config';

const ClientCmtSendForm = ({
    setActiveToast,
    setErrorToast
}) => {
    const [ sentComment, setSentComment ]  = useState({
        cmtMessage: '',
        cmtName: '',
    })

    const registerInputs = ({ target: {name, value} }) => {
        setSentComment({
            ...sentComment,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const localDate = Date.now()
            await addDoc(collection(db, 'comments'),
                {
                    message: sentComment.cmtMessage,
                    sender: sentComment.cmtName,
                    dateFilter: localDate,
                    approved: false,
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
            className='grid place-items-start pt-4 pb-6 px-5 bg-white shadow-sm drop-shadow-sm'
            onSubmit={handleSubmit}
            autoComplete='off'
        >
            <label htmlFor='cmtMessage' className='text-zinc-700 font-Raleway text-lg font-black leading-70
            tracking-wide drop-shadow-sm'>
                ¡Cuéntanos sobre ti!
            </label>
            <textarea
                name='cmtMessage' id='cmtMessage' cols='30' rows='10' required minLength={10} maxLength={5000}
                placeholder='Tu secreto o apreciación' className='contact-textarea w-full mt-1'
                onChange={registerInputs}
            />
            <label htmlFor='cmtName' className='text-zinc-700 flex gap-[.3rem] mt-3'>
                Nombre:
                <span className='text-zinc-700/80 tracking-wide'>
                    (opcional)
                </span>
            </label>
            <input
                type='text' name='cmtName' id='cmtName' minLength={3} maxLength={15}
                placeholder='Tu nombre aquí' className='contact-input w-full'
                onChange={registerInputs}
            />
            <button
                type='submit'
                className='grid place-items-center py-2 px-4 w-fit mt-4 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white tracking-wider font-bold'>
                    Enviar
                </span>
            </button>
        </form>
    )
};

export default ClientCmtSendForm;
