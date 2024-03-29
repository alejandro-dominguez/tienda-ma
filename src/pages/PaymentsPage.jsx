import {
    useContext,
    useEffect,
    useState
} from 'react';
import { PaymentContext } from '../contexts/paymentContext';
import { RotatingLines } from 'react-loader-spinner';
import ErrorPage from '../pages/ErrorPage';
import PaymentsCard from '../components/PaymentsCard';
import icon from '/favicon.svg';

const PaymentsPage = () => {
    const { payments, errorPayments, loadingPayments } = useContext(PaymentContext)
    const [ paymentItems, setPaymentItems ] = useState({})

    useEffect(() => {
        if (localStorage.paymentsData) {
            setPaymentItems(JSON.parse(localStorage.paymentsData))
        }
    }, [])

    return (
        <main className='w-full min-h-[100svh]'>
            <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-12 mt-20 w-fit mx-auto'>
                Formas de pago
            </h1>
            {
                JSON.stringify(paymentItems) !== '{}' ?
                    <div className='mb-20'>
                        <div className='mx-4 md:mx-10 mt-3 grid place-items-center'>
                            <div className='flex flex-col items-center justify-center sm:grid sm:grid-cols-2
                            md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                {
                                    payments.map(payment => {
                                        return (
                                            <PaymentsCard
                                                payment={payment}
                                                key={payment.id}
                                            />
                                    )})
                                }
                            </div>
                        </div>
                        <div className='w-8 mx-auto mt-6'>
                            <img
                                src={icon}
                                alt='icono tienda ma'
                                className='block w-full'
                            />
                        </div>
                    </div>
                : (payments.length && !loadingPayments && !errorPayments) ?
                    <div className='mb-20'>
                        <div className='mx-4 md:mx-10 mt-3 grid place-items-center'>
                            <div className='flex flex-col items-center justify-center sm:grid sm:grid-cols-2
                            md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                {
                                    payments.map(payment => {
                                        return (
                                            <PaymentsCard
                                                payment={payment}
                                                key={payment.id}
                                            />
                                    )})
                                }
                            </div>
                        </div>
                        <div className='w-8 mx-auto mt-6'>
                            <img
                                src={icon}
                                alt='icono tienda ma'
                                className='block w-full'
                            />
                        </div>
                    </div>
                : !errorPayments ?
                    <div className='w-full grid place-items-center mt-2 py-4 shadow-sm min-h-[24rem]'>
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
                    <ErrorPage />
            }
        </main>
    )
};

export default PaymentsPage;
