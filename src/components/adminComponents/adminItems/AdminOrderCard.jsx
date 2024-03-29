import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import { db } from '../../../firebase/config';
import {
    deleteDoc,
    doc,
    updateDoc
} from 'firebase/firestore';

const AdminOrderCard = ({
    order,
    setActiveToast,
    setErrorToast
}) => {
    const deliveredOrder = async (id) => {
        try {
            const docRef = doc(db, 'orders', id)
            await updateDoc(docRef,
                {
                    delivered: true,
                    process: true
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const processingOrder = async (id) => {
        try {
            const docRef = doc(db, 'orders', id)
            await updateDoc(docRef,
                {
                    process: true
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const deleteOrder = async (id) => {
        try {
            const docRef = doc(db, 'orders', id)
            await deleteDoc(docRef)
            if (localStorage.orderData) {
                localStorage.removeItem('orderData')
            }
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const storeOrder = () => {
        localStorage.setItem('orderData', JSON.stringify(order))
    }


    return (
        <div className='flex flex-col items-start justify-start gap-2'>
            <div className='grid place-items-start p-4 m-3 bg-white shadow-sm drop-shadow-sm w-[16.25rem]'>
                <div className='rounded-lg flex flex-col items-start gap-2'>
                    <h3 className='text-[.925rem] font-bold flex justify-between items-start gap-5'>
                        Fecha:
                        <span className='font-normal text-sm mt-[.21rem]'>
                            {order.orderDate}
                        </span>
                    </h3>
                    <h3 className='text-[.925rem] font-bold flex justify-between items-start gap-3'>
                        Remitente:
                        <span className='font-normal text-sm mt-[.21rem]'>
                            {order.clientFullName}
                        </span>
                    </h3>
                    <h3 className='text-[.925rem] font-bold flex justify-between items-start gap-3'>
                        Estado:
                        <span className='font-normal text-sm mt-[.21rem]'>
                            {
                                order.delivered ?
                                    'Órden entregada'
                                : !order.delivered && order.process ?
                                    'En proceso'
                                :
                                    'No procesada'
                            }
                        </span>
                    </h3>
                    <h3 className='text-[.925rem] font-bold flex flex-col mb-2'>
                        Id de orden:
                        <span className='font-black text-sm mt-2'>
                            {order.orderId}
                        </span>
                    </h3>
                    <Link
                        to={`/admin/consola/ordenes/${order.id}`}
                        onClick={() => storeOrder()}
                        className='mt-1 px-3 py-[.27rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                        ease-in-out hover:bg-zinc-700 focus:bg-zinc-700 grid place-items-center'
                    >
                        <span className='tracking-wider text-[.79rem] font-Raleway'>
                            Ver orden
                        </span>
                    </Link>
                    <div className='flex items-center gap-10 self-center mt-2'>
                        <FaTruck
                            className='block cursor-pointer text-[1.7rem] mt-2 drop-shadow-sm text-green-500/90'
                            onClick={() => deliveredOrder(order.id)}
                        />
                        <FaClock
                            className='block cursor-pointer text-[1.5rem] mt-2 drop-shadow-sm text-zinc-900/80'
                            onClick={() => processingOrder(order.id)}
                        />
                        <BsFillTrash3Fill
                            className='block cursor-pointer text-[1.5rem] mt-2 drop-shadow-sm text-red-500/80'
                            onClick={() => deleteOrder(order.id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdminOrderCard;
