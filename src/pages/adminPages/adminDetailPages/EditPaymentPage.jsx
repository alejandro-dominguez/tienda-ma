import {
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import { PaymentContext } from '../../../contexts/paymentContext';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import EditPaymentTitleForm from '../../../components/adminComponents/adminEditForms/EditPaymentTitleForm';
import EditPaymentDesc1Form from '../../../components/adminComponents/adminEditForms/EditPaymentDesc1Form';
import EditPaymentDesc2Form from '../../../components/adminComponents/adminEditForms/EditPaymentDesc2Form';
import EditPaymentDesc3Form from '../../../components/adminComponents/adminEditForms/EditPaymentDesc3Form';
import AdminErrorPage from '../../../pages/AdminErrorPage';

const EditPaymentPage = () => {
    const { id } = useParams()
    const { payments, errorPayments, loadingPayments } = useContext(PaymentContext)
    const [ payment, setPayment ] = useState({})
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')

    useEffect(() => {
        if (localStorage.paymentData) {
            setPayment(JSON.parse(localStorage.paymentData))
        }
        else if (payments.length && !loadingPayments && !errorPayments) {
            const getPaymentId = payments.find(payment => payment.id === id)
            setPayment(getPaymentId)
        }
    }, [])

    if (activeToast && errorToast === '') {
        toast.success(
            'Forma de pago editada',
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
        <main className='w-full flex flex-col items-start mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            {
                (JSON.stringify(payment) !== '{}' && payments.length && !loadingPayments && !errorPayments) ?
                    <>
                    <h1 className='flex flex-col font-bold font-Raleway text-lg text-center mt-3 drop-shadow-sm mx-auto'>
                        <span className='text-[1.05rem]'>
                            Forma de pago:
                        </span>
                        {payment.title}
                    </h1>
                    <div className='flex flex-col mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 place-items-start md:gap-8'>
                                <EditPaymentTitleForm
                                    payment={payment}
                                    setActiveToast={setActiveToast}
                                    setErrorToast={setErrorToast}
                                />
                                <EditPaymentDesc1Form
                                    payment={payment}
                                    setActiveToast={setActiveToast}
                                    setErrorToast={setErrorToast}
                                />
                            </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 place-items-start md:gap-8'>
                                <EditPaymentDesc2Form
                                    payment={payment}
                                    setActiveToast={setActiveToast}
                                    setErrorToast={setErrorToast}
                                />
                                <EditPaymentDesc3Form
                                    payment={payment}
                                    setActiveToast={setActiveToast}
                                    setErrorToast={setErrorToast}
                                />
                        </div>
                    </div>
                        <Toaster
                            visibleToasts={1}
                            richColors
                            toastOptions={{
                                className: 'text-center',
                            }}
                        />
                    </>
                : !errorPayments ?
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

export default EditPaymentPage;
