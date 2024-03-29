import {
    useEffect,
    useState,
    useContext
} from 'react';
import { OrderContext } from '../../contexts/orderContext';
import { RotatingLines } from 'react-loader-spinner';

const AdminOrdersNotifications = () => {
    const { orders, errorOrders, loadingOrders } = useContext(OrderContext)
    const [ pendingOrders, setPendingOrders ] = useState(0)
    const [ pendingDeliveredOrders, setPendingDeliveredOrders ] = useState(0)

    useEffect(() => {
        setPendingOrders(orders.reduce((acc, order) => acc += !order.process, 0))
        const processingOrders = []
        orders.forEach(order => {
            processingOrders.push(order.process && !order.delivered)
        })
        setPendingDeliveredOrders(processingOrders.reduce((acc, order) => acc += order, 0))
    }, [orders])

    return (
        <>
        {
            (orders.length && !errorOrders && !loadingOrders) ?
                <>
                <div className='w-fit relative'>
                    <span className='flex items-baseline gap-1'>
                        Tienes
                        <span className='font-bold'>
                            {pendingOrders}
                        </span>
                        orden/es sin ver.
                    </span>
                    <div className='absolute w-full h-[.2rem] bg-red-500/50 rounded-full mt-1' />
                </div>
                <div className='w-fit relative'>
                    <span className='flex items-baseline gap-1'>
                        Tienes
                        <span className='font-bold'>
                            {pendingDeliveredOrders}
                        </span>
                        orden/es en proceso.
                    </span>
                    <div className='absolute w-full h-[.2rem] bg-red-500/50 rounded-full mt-1' />
                </div>
                </>
            : !errorOrders ?
                <div className='p-3 bg-teal-600/20 rounded-lg w-fit mx-auto'>
                    <RotatingLines
                        strokeColor='white'
                        strokeWidth='5'
                        animationDuration='0.75'
                        width='20'
                        visible={true}
                    />
                </div>
            :
                <div className='w-fit'>
                    <span>
                        {errorOrders}
                    </span>
                </div>
        }   
        </>
    )           
};

export default AdminOrdersNotifications;
