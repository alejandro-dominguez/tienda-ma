import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/authContext';
import useGetContactMessage from '../../../customHooks/useGetContactMessage';
import MessageDetailCard from '../../../components/adminComponents/MessageDetailCard';
import AdminErrorPage from '../../AdminErrorPage';

const AdminMessagesDetailPage = () => {
    const { id } = useParams()
    const [ message, error, loading ] = useGetContactMessage(id)
    const { authUser } = useContext(AuthContext)
    
    return (
        <>
        {
            authUser ?
                <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
                    {
                        (JSON.stringify(message) !== '{}' && !loading && !error) ?
                            <MessageDetailCard message={message} />
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

export default AdminMessagesDetailPage;
