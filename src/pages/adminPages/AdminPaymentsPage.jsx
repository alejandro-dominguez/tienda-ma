import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { RotatingLines } from 'react-loader-spinner';
import useGetAllPayments from '../../customHooks/useGetAllPayments';
import CreatePaymentsForm from '../../components/adminComponents/CreatePaymentsForm';
import AdminPaymentsContainer from '../../components/adminComponents/AdminPaymentsContainer';
import AdminErrorPage from '../AdminErrorPage';

const AdminPaymentsPage = () => {
    const [ payments, error, loading ] = useGetAllPayments()
    const { authUser } = useContext(AuthContext)

    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            { 
                (payments.length && !loading && !error) ?
                    <div className='mx-auto flex flex-col'>
                        <AdminPaymentsContainer payments={payments} />
                        <CreatePaymentsForm />
                    </div>
                : !error ?
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
                    null
            }
        </main>
    )
};

export default AdminPaymentsPage;
