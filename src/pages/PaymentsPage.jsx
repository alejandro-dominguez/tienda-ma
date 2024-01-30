import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import { RotatingLines } from 'react-loader-spinner';
import useGetAllPayments from '../customHooks/useGetAllPayments';
import ErrorPage from '../pages/ErrorPage';
import PaymentsCard from '../components/PaymentsCard';
import icon from '/favicon.svg';
import DisabledSite from '../components/DisabledSite';

const PaymentsPage = () => {
    const [ payments, error, loading ] = useGetAllPayments()
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite ?
                <main className='w-full min-h-[100svh]'>
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-10 mt-20 w-fit mx-auto'>
                        Formas de pago
                    </h1>
                    {
                        (payments.length && !loading && !error) ?
                            <>
                            <div className='mx-4 md:mx-10 mt-3 grid place-items-center'>
                                <div className='flex flex-col items-center justify-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-6'>
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
                            <div className='w-9 mx-auto mb-20 mt-10'>
                                <img
                                    src={icon}
                                    alt='icono tienda ma'
                                    className='block w-full'
                                />
                            </div>
                            </>
                        : !error ?
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
            :
                <DisabledSite />
        }
        </>
    )
};

export default PaymentsPage;
