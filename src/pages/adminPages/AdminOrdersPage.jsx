import {
    Toaster,
    toast
} from 'sonner';
import {
    useState,
    useContext
} from 'react';
import { OrderContext } from '../../contexts/orderContext';
import { RotatingLines } from 'react-loader-spinner';
import AdminOrdersContainer from '../../components/adminComponents/AdminOrdersContainer';
import AdminErrorPage from '../../pages/AdminErrorPage';

const AdminOrdersPage = () => {
    const { orders, errorOrders, loadingOrders } = useContext(OrderContext)
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')

    if (activeToast && errorToast === '') {
        toast.success(
            'Orden editada',
            {
                duration: 2000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
        }, 2500)
    }

    if (activeToast && errorToast !== '') {
        toast.error(
            errorToast,
            {
                duration: 4000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
            setErrorToast('')
        }, 4500)
    }

    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            { 
                (orders.length && !loadingOrders && !errorOrders) ?
                    <div className='mx-auto flex flex-col'>
                        <AdminOrdersContainer
                            orders={orders}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <Toaster
                            visibleToasts={1}
                            richColors
                            toastOptions={{
                                className: 'text-center',
                            }}
                        />
                    </div>
                : !errorOrders ?
                    <div className='w-full grid place-items-center mt-2 py-4 min-h-[24rem]'>
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

export default AdminOrdersPage;
