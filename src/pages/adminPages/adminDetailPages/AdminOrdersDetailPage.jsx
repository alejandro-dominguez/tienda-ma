import {
    useContext,
    useEffect,
    useState
} from 'react';
import { OrderContext } from '../../../contexts/orderContext'
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import OrderDetailCard from '../../../components/adminComponents/OrderDetailCard';
import AdminErrorPage from '../../../pages/AdminErrorPage';

const AdminOrdersDetailPage = () => {
    const { id } = useParams()
    const { orders, errorOrders, loadingOrders } = useContext(OrderContext)
    const [ order, setOrder ] = useState({})

    useEffect(() => {
        if (localStorage.orderData) {
            setOrder(JSON.parse(localStorage.orderData))
        }
        else if (orders.length && !loadingOrders && !errorOrders) {
            const getOrderId = orders.find(order => order.id === id)
            setOrder(getOrderId)
        }
    }, [])
    
    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            {
                (JSON.stringify(order) !== '{}' && orders.length && !loadingOrders && !errorOrders) ?
                    <OrderDetailCard order={order} />
                : !errorOrders ?
                    <div className='w-full grid place-items-center mt-36 py-4 min-h-[24rem]'>
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
                    <AdminErrorPage />
            }
        </main>
    )
};

export default AdminOrdersDetailPage;
