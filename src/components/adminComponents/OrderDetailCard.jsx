import { FaTruck } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config';
import {
    doc,
    updateDoc
} from 'firebase/firestore';
import AdminOrderProduct from './adminItems/AdminOrderProduct';

const OrderDetailCard = ({ order }) => {
    const navigate = useNavigate()

    const deliveredOrder = async (id) => {
        try {
            const docRef = doc(db, 'orders', id)
            await updateDoc(docRef,
                {
                    delivered: true,
                })
            setTimeout(() => {
                navigate('/admin/consola/ordenes')
            }, 1000)
        } catch (error) {
            console.log(error.message)
        }
    }

    const processingOrder = async (id) => {
        try {
            const docRef = doc(db, 'orders', id)
            await updateDoc(docRef,
                {
                    process: true
                })
            setTimeout(() => {
                navigate('/admin/consola/ordenes')
            }, 1000)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='flex flex-col items-start justify-start w-full bg-white rounded-md p-5
        drop-shadow-sm shadow-sm mt-4 mb-20 gap-2'>
            <h1 className='font-bold font-Raleway text-[1.05rem] drop-shadow-sm'>
                Orden de {order.clientFullName}:
            </h1>
            <div className='grid place-items-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2'>
                {
                    order.orderProducts.map((product, i) => {
                        return <AdminOrderProduct product={product} key={i}/>
                    })
                }
            </div>
            <span className='font-bold flex gap-1 items-center'>
                Total:
                <span className='font-black text-sm mt-[.1rem]'>
                    {order.orderTotal}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Dirección:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {order.clientAdressStreet} {order.clientAdressNumber}
                    {
                        order.clientAdressFloor ?
                            order.clientAdressFloor
                        :
                            null
                    }
                    {
                        order.clientAdressDoor ?
                            order.clientAdressDoor
                        :
                            null
                    }
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Teléfono:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {order.clientPhone}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Email:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {order.clientEmail}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Id de orden:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {order.orderId}
                </span>
            </span>
            <button
                type='button'
                className='flex items-center gap-3 mt-5'
                onClick={() => processingOrder(order.id)}
            >
                <FaClock className='block cursor-pointer text-[1.5rem] mt-2 drop-shadow-sm text-zinc-900/80' />
                <span className='text-sm font-bold mt-2'>
                    Marcar orden en proceso
                </span>
            </button>
            <button
                type='button'
                className='flex items-center gap-3 mt-5'
                onClick={() => deliveredOrder(order.id)}
            >
                <FaTruck className='block cursor-pointer text-[1.7rem] mt-2 drop-shadow-sm text-green-500/90' />
                <span className='text-sm font-bold mt-2'>
                    Marcar orden entregada
                </span>
            </button>
        </div>
    )
};

export default OrderDetailCard;
