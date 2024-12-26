import {
    doc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';
import {
    Toaster,
    toast
} from 'sonner';
import { FaTruck } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { db } from '../../firebase/config';
import AdminOrderProduct from './adminItems/AdminOrderProduct';

const OrderDetailCard = ({ order }) => {
    const {
        clientFullName,
        orderProducts,
        orderTotal,
        clientAdressStreet,
        clientAdressNumber,
        clientAdressFloor,
        clientAdressDoor,
        clientPhone,
        clientEmail,
        orderNotes,
        orderId,
        id
    } = order

    const deliveredOrder = async (id) => {
        try {
            const docRef = doc(db, 'orders', id)
            await updateDoc(docRef,
                {
                    delivered: true,
                }
            )
            toast.success(
                'Orden enviada',
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

    const processingOrder = async (id) => {
        try {
            const docRef = doc(db, 'orders', id)
            await updateDoc(docRef,
                {
                    process: true
                }
            )
            toast.success(
                'Orden procesada',
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

    const deleteOrder = async (id) => {
        try {
            const docRef = doc(db, 'orders', id)
            await deleteDoc(docRef)
            if (localStorage.orderData) {
                localStorage.removeItem('orderData')
            }
            toast.success(
                'Orden eliminada',
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
                Orden de {clientFullName}:
            </h1>
            <div className='grid place-items-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2'>
                {
                    orderProducts.map((product, i) => {
                        return <AdminOrderProduct product={product} key={i}/>
                    })
                }
            </div>
            <span className='font-bold flex gap-1 items-center'>
                Total:
                <span className='font-black text-sm mt-[.1rem]'>
                    {orderTotal}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Dirección:
                <span className='flex gap-1 font-normal text-sm mt-[.1rem] tracking-tight'>
                    <span>
                        {clientAdressStreet}
                    </span>
                    <span>
                        {clientAdressNumber},
                    </span>
                    {
                        clientAdressFloor ?
                            <span>
                                {clientAdressFloor}
                            </span>
                        :
                            null
                    }
                    {
                        clientAdressDoor ?
                            <span>
                                {clientAdressDoor}
                            </span>
                        :
                            null
                    }
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Teléfono:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {clientPhone}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Email:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {clientEmail}
                </span>
            </span>
            {
                orderNotes ?
                    <span className='font-bold flex gap-1 items-center'>
                        Notas:
                        <span className='font-normal text-sm mt-[.1rem]'>
                            {orderNotes}
                        </span>
                    </span>
                :
                    null
            }
            <span className='font-bold flex gap-1 items-center'>
                Id de orden:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {orderId}
                </span>
            </span>
            <button
                type='button'
                className='flex items-center gap-3 mt-5'
                onClick={() => processingOrder(id)}
            >
                <FaClock className='block text-[1.5rem] mt-2 drop-shadow-sm text-zinc-900/80' />
                <span className='text-sm font-bold mt-2'>
                    Marcar orden en proceso
                </span>
            </button>
            <button
                type='button'
                className='flex items-center gap-3 mt-5'
                onClick={() => deliveredOrder(id)}
            >
                <FaTruck className='block text-[1.7rem] mt-2 drop-shadow-sm text-green-500/90' />
                <span className='text-sm font-bold mt-2'>
                    Marcar orden entregada
                </span>
            </button>
            <button
                type='button'
                className='flex items-center gap-3 mt-5'
                onClick={() => deleteOrder(id)}
            >
                <BsFillTrash3Fill className='block text-[1.5rem] mt-2 drop-shadow-sm text-red-500/80' />
                <span className='text-sm font-bold mt-2'>
                    Eliminar orden
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

export default OrderDetailCard;
