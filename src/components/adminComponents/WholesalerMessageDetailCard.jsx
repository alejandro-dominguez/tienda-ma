import {
    doc,
    updateDoc
} from 'firebase/firestore';
import {
    Toaster,
    toast
} from 'sonner';
import { IoEyeSharp } from 'react-icons/io5';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { db } from '../../firebase/config';

const WholesalerMessageDetailCard = ({ wholesalerMessage }) => {
    const readMessage = async (id) => {
        try {
            const docRef = doc(db, 'wholesalers', id)
            await updateDoc(docRef,
                {
                    read: true
                }
            )
            toast.success(
                'Mensaje leído',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        } catch (error) {
            toast.error(
                error.message,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    const deleteMessage = async (id) => {
        try {
            const docRef = doc(db, 'messages', id)
            await deleteDoc(docRef)
            if (localStorage.wholesalerMessageData) {
                localStorage.removeItem('wholesalerMessageData')
            }
            toast.success(
                'Mensaje eliminado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        } catch (error) {
            toast.error(
                error.message,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    return (
        <div className='flex flex-col items-start justify-start w-full bg-white rounded-md p-5
        drop-shadow-sm shadow-sm mt-4 mb-20 gap-2 relative'>
            <h1 className='font-bold font-Raleway text-[1.05rem] drop-shadow-sm'>
                Mensaje de {wholesalerMessage.wholesalerFullName}:
            </h1>
            <p className='text-[.92rem] leading-[1.35rem]'>
                {wholesalerMessage.wholesalerMessage}
            </p>
            <span className='font-bold flex gap-1 items-center'>
                Teléfono:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {wholesalerMessage.wholesalerPhone}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Email:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {wholesalerMessage.wholesalerEmail}
                </span>
            </span>
            <button
                type='button'
                className='flex items-center gap-3 mt-5'
                onClick={() => readMessage(wholesalerMessage.id)}
            >
                <IoEyeSharp className='block text-[1.7rem] mt-2 drop-shadow-sm text-zinc-900/80' />
                <span className='text-sm font-bold mt-2'>
                    Marcar mensaje leído
                </span>
            </button>
            <button
                type='button'
                className='flex items-center gap-3 mt-2'
                onClick={() => deleteMessage(wholesalerMessage.id)}
            >
                <BsFillTrash3Fill className='block text-[1.5rem] mt-2 drop-shadow-sm text-red-500/80' />
                <span className='text-sm font-bold mt-2'>
                    Eliminar mensaje
                </span>
            </button>
            <div className='absolute'>
                <Toaster
                    richColors
                    toastOptions={{
                        className: 'text-center',
                    }}
                />
            </div>
        </div>
    )
};

export default WholesalerMessageDetailCard;
