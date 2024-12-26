import {
    deleteDoc,
    doc,
    updateDoc
} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';
import { db } from '../../../firebase/config';

const AdminWholesalersCard = ({
    message,
    setActiveToast,
    setErrorToast
}) => {
    const {
        messageDate,
        wholesalerFullName,
        read,
        id
    } = message

    const readMessage = async (id) => {
        try {
            const docRef = doc(db, 'wholesalers', id)
            await updateDoc(docRef,
                {
                    read: true
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const deleteMessage = async (id) => {
        try {
            const docRef = doc(db, 'wholesalers', id)
            await deleteDoc(docRef)
            if (localStorage.wholesalerMessageData) {
                localStorage.removeItem('wholesalerMessageData')
            }
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const storeWholesalerMessage = () => {
        localStorage.setItem('wholesalerMessageData', JSON.stringify(message))
    }

    return (
        <div className='flex flex-col items-start justify-start gap-2'>
            <div className='grid place-items-start p-4 m-3 bg-white shadow-sm drop-shadow-sm w-[16.25rem]'>
                <div className='rounded-lg flex flex-col items-start gap-2'>
                    <h3 className='text-[.925rem] font-bold flex justify-between items-start gap-5'>
                        Fecha:
                        <span className='font-normal text-sm mt-[.21rem]'>
                            {messageDate}
                        </span>
                    </h3>
                    <h3 className='text-[.925rem] font-bold flex justify-between items-start gap-3'>
                        Remitente:
                        <span className='font-normal text-sm mt-[.21rem]'>
                            {wholesalerFullName}
                        </span>
                    </h3>
                    <h3 className='text-[.925rem] font-bold flex justify-between items-start gap-3'>
                        Estado:
                        <span className='font-normal text-sm mt-[.21rem]'>
                            {
                                !read ?
                                    'No leído'
                                :
                                    'Leído'
                            }
                        </span>
                    </h3>
                    <div className='flex items-end w-full justify-between'>
                        <Link
                            to={`/admin/consola/mensajesMayoristas/${id}`}
                            onClick={() => storeWholesalerMessage()}
                            className='mt-1 px-3 py-[.27rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                            ease-in-out hover:bg-zinc-700 focus:bg-zinc-700 grid place-items-center'
                        >
                            <span className='tracking-wider text-[.79rem] font-Raleway'>
                                Ver mensaje
                            </span>
                        </Link>
                        <div className='flex items-center gap-6'>
                            <IoEyeSharp
                                className='block cursor-pointer text-[1.55rem] mt-2 drop-shadow-sm text-zinc-900/80'
                                onClick={() => readMessage(id)}
                            />
                            <BsFillTrash3Fill
                                className='block cursor-pointer text-[1.3rem] mt-2 drop-shadow-sm text-red-500/80'
                                onClick={() => deleteMessage(id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdminWholesalersCard;
