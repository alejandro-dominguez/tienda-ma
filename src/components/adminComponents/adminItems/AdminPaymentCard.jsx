import {
    deleteDoc,
    doc,
} from 'firebase/firestore';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { db } from '../../../firebase/config';
import { useNavigate } from 'react-router-dom';

const AdminPaymentCard = ({
    payment,
    setActiveToast,
    setErrorToast
}) => {
    const navigate = useNavigate()

    const deletePayment = async (id) => {
        try {
            const docRef = doc(db, 'payments', id)
            await deleteDoc(docRef)
            localStorage.removeItem('paymentData')
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }
    
    const storeAndNavigate = () => {
        localStorage.setItem('paymentData', JSON.stringify(payment))
        navigate((`/admin/consola/formasDePago/editar/${payment.id}`))
    }
    
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='grid place-items-center p-4 m-3 bg-white h-48 shadow-sm drop-shadow-sm'>
                    <span className='mx-3 my-[.57rem] font-bold text-sm tracking-wide drop-shadow-sm py-[.35rem]
                    px-2 text-center border-2 w-28 rounded-lg border-red-500/50 bg-red-100/[7%]'>
                        {payment.title}
                    </span>
                    <div className='flex flex-col items-center mt-auto gap-6'>
                        <button
                            type='button'
                            className='px-[.8rem] py-[.15rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                            ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                            onClick={() => storeAndNavigate()}
                        >
                            <span className='tracking-wider text-[.8rem] font-Raleway'>
                                Editar
                            </span>
                        </button>
                        <BsFillTrash3Fill
                            className='block cursor-pointer text-[1.3rem] drop-shadow-sm text-red-500/80'
                            onClick={() => deletePayment(payment.id)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default AdminPaymentCard;
