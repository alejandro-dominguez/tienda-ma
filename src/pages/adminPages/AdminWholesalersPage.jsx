import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { RotatingLines } from 'react-loader-spinner';
import AdminWholesalersContainer from '../../components/adminComponents/AdminWholesalersContainer';
import AdminErrorPage from '../AdminErrorPage';
import useGetAllWholesalersMessages from '../../customHooks/useGetAllWholesalersMessages';

const AdminWholesalersPage = () => {
    const [ wholesalersMessages, errorWholesalersMessages, loadingWholesalersMessages ] = useGetAllWholesalersMessages()
    const { authUser } = useContext(AuthContext)

    return (
        <>
        {
            authUser ?
                <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
                    { 
                        (wholesalersMessages.length && !loadingWholesalersMessages && !errorWholesalersMessages) ?
                            <div className='mx-auto flex flex-col'>
                                <AdminWholesalersContainer wholesalersMessages={wholesalersMessages} />
                            </div>
                        : !errorWholesalersMessages ?
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
            :
                <AdminErrorPage />
        }
        </>
    )
};

export default AdminWholesalersPage;