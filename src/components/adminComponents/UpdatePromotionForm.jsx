import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Toaster,
    toast
} from 'sonner';
import {
    addDoc,
    collection,
    doc,
    updateDoc
} from 'firebase/firestore';
import { db } from '../../firebase/config';

const UpdatePromotionForm = ({ promo }) => {
    const [ newPromo, setNewPromo ] = useState('')
    const [ errorPromo, setErrorPromo ] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'promos', `${promo[0].id}`)
            await updateDoc(docRef, {
                active: false
                }
            )
            await addDoc(collection(db, 'promos'),
                {
                    text: newPromo,
                    active: true
                }
            )
            setNewPromo('')
            toast.success(
                'Promoción agregada',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                navigate('/admin/consola')
            }, 3500)
        } catch (error) {
            setNewPromo('')
            setErrorPromo(error.message)
            toast.error(
                errorPromo,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    return (
        <form
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <label
                htmlFor='newPromotion'
                className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto'>
                Nueva Promoción:
            </label>
            <input
                type='text' name='newPromotion' id='newPromotion' required
                placeholder='Texto de promoción' min={8} value={newPromo}
                className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                rounded-sm drop-shadow-sm text-black placeholder:tracking-normal'
                onChange={(e) => setNewPromo(e.target.value)}
            />
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar promoción
                </span>
            </button>
            <Toaster
                richColors
                toastOptions={{
                    className: 'text-center',
                }}
            />
        </form>
    )
};

export default UpdatePromotionForm;
