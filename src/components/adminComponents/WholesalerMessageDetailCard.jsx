import { IoEyeSharp } from 'react-icons/io5';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import {
    doc,
    updateDoc
} from 'firebase/firestore';

const WholesalerMessageDetailCard = ({ wholesalerMessage }) => {
    const navigate = useNavigate()

    const readMessage = async (id) => {
        try {
            const docRef = doc(db, 'wholesalers', id)
            await updateDoc(docRef,
                {
                    read: true
                })
            setTimeout(() => {
                navigate('/admin/consola/mensajesMayoristas')
            }, 1000)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='flex flex-col items-start justify-start w-full bg-white rounded-md p-5
        drop-shadow-sm shadow-sm mt-4 mb-20 gap-2'>
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
                <IoEyeSharp className='block cursor-pointer text-[1.7rem] mt-2 drop-shadow-sm text-zinc-900/80' />
                <span className='text-sm font-bold mt-2'>
                    Marcar mensaje leído
                </span>
            </button>
        </div>
    )
};

export default WholesalerMessageDetailCard;
