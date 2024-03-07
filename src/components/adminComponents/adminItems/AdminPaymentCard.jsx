import { BsFillTrash3Fill } from 'react-icons/bs';
import { db } from '../../../firebase/config';
import {
    deleteDoc,
    doc,
} from 'firebase/firestore';

const AdminPaymentCard = ({
    payment,
    setActiveToast,
    setErrorToast
}) => {
    const deletePayment = async (id) => {
        try {
            const docRef = doc(db, 'payments', id)
            await deleteDoc(docRef)
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }
    
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='grid place-items-center p-5 m-3 bg-white h-40 shadow-sm drop-shadow-sm'>
                    <span className='mx-3 my-[.57rem] font-bold text-sm tracking-wide drop-shadow-sm py-[.35rem]
                    px-2 text-center border-2 w-28 rounded-lg border-red-500/50 bg-red-100/[7%]'>
                        {payment.title}
                    </span>
                    <BsFillTrash3Fill
                        className='block self-end cursor-pointer text-[1.3rem] mt-2 drop-shadow-sm text-red-500/80'
                        onClick={() => deletePayment(payment.id)}
                    />
                </div>
            </div>
        </>
    )
};

export default AdminPaymentCard;
