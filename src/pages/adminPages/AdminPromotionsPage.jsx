import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
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
import useGetPromo from '../../customHooks/useGetPromo';

const AdminPromotionsPage = () => {
    const [ promo, error, loading ] = useGetPromo()
    const [ newPromo, setNewPromo ] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const docRef = doc(db, 'promos', `${promo[0].id}`)
        await updateDoc(docRef, {
            active: false
          })
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
    }

    return (
        <main>
            <div className='w-full flex flex-col gap-4 mt-28 min-h-[100svh]'>
                { 
                    (promo.length && !loading && !error) ?
                        <div className='mx-auto flex flex-col'>
                            <h3 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto mt-2'>
                                Promoción activa:
                            </h3>
                            <span className='text-sm mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 rounded-sm drop-shadow-sm
                            text-black cursor-default select-none'>
                                {promo[0].text}
                            </span>
                            <form
                                className='flex flex-col pt-3 pb-5 px-8 mt-5 shadow-sm drop-shadow-sm bg-white'
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
                                    rounded-sm drop-shadow-sm text-black'
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
                            </form>
                        </div>
                    : !error ?
                        <div className='w-full grid place-items-center mt-2 py-4 min-h-[24rem]'>
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
            </div>
            <Toaster
                richColors
                toastOptions={{
                    className: 'text-center',
                }}
            />
        </main>
    )
};

export default AdminPromotionsPage;
