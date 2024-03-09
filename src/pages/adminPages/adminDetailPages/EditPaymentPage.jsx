import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/authContext';
import {
    Toaster,
    toast
} from 'sonner';
import {
    useContext,
    useState
} from 'react';
import useGetPayment from '../../../customHooks/useGetPayment';
import EditPaymentTitleForm from '../../../components/adminComponents/adminEditForms/EditPaymentTitleForm';
import EditPaymentDesc1Form from '../../../components/adminComponents/adminEditForms/EditPaymentDesc1Form';
import EditPaymentDesc2Form from '../../../components/adminComponents/adminEditForms/EditPaymentDesc2Form';
import EditPaymentDesc3Form from '../../../components/adminComponents/adminEditForms/EditPaymentDesc3Form';
import AdminErrorPage from '../../AdminErrorPage';

const EditPaymentPage = () => {
    const { id } = useParams()
    const [ payment, error, loading ] = useGetPayment(id)
    const { authUser } = useContext(AuthContext)
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')

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
        <>
        {
            authUser ?
                <main className='w-full flex flex-col items-start mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
                    {
                        (JSON.stringify(payment) !== '{}' && !loading && !error) ?
                            <>
                            <h1 className='font-bold font-Raleway text-lg text-center mt-4 drop-shadow-sm mx-auto'>
                                Forma de pago:
                                <br />
                                {payment.title}
                            </h1>
                            <div className='flex flex-col items-center mx-auto'>
                                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-8'>
                                    <div className='w-72 md:w-80'>
                                        <EditPaymentTitleForm
                                            payment={payment}
                                            setActiveToast={setActiveToast}
                                            setErrorToast={setErrorToast}
                                        />
                                    </div>
                                    <div className='w-72 md:w-80'>
                                        <EditPaymentDesc1Form
                                            payment={payment}
                                            setActiveToast={setActiveToast}
                                            setErrorToast={setErrorToast}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-8'>
                                    <div className='w-72 md:w-80'>
                                        <EditPaymentDesc2Form
                                            payment={payment}
                                            setActiveToast={setActiveToast}
                                            setErrorToast={setErrorToast}
                                        />
                                    </div>
                                    <div className='w-72 md:w-80'>
                                        <EditPaymentDesc3Form
                                            payment={payment}
                                            setActiveToast={setActiveToast}
                                            setErrorToast={setErrorToast}
                                        />
                                    </div>
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
                        : !error ?
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
                            null
                    }
                </main>
            :
                <AdminErrorPage />
        }
        </>
    )
};

export default EditPaymentPage;
