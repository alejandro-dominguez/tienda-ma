import { RotatingLines } from 'react-loader-spinner';
import {
    useEffect,
    useState
} from 'react';
import AdminErrorPage from '../../pages/AdminErrorPage';
import useGetAllMessages from '../../customHooks/useGetAllMessages';

const AdminMessagesNotifications = () => {
    const [ messages, errorMessages, loadingMessages ] = useGetAllMessages()
    const [ pendingMessages, setPendingMessages ] = useState(0)

    useEffect(() => {
        setPendingMessages(messages.reduce((acc, message) => acc += !message.read, 0))
    }, [messages])
    
    return (
        <>
        {
            (messages.length && !errorMessages && !loadingMessages) ?
            <div className='w-fit relative mb-5'>
                <span className='flex items-baseline gap-1'>
                    Tienes
                    <span className='font-bold'>
                        {pendingMessages}
                    </span>
                    mensajes sin leer.
                </span>
                <div className='absolute w-full h-[.2rem] bg-red-500/50 rounded-full mt-1' />
            </div>
        : !errorMessages?
            <div className='p-3 bg-teal-600/20 rounded-lg w-fit mx-auto'>
                <RotatingLines
                    strokeColor='white'
                    strokeWidth='5'
                    animationDuration='0.75'
                    width='30'
                    visible={true}
                />
            </div>
        :
            <AdminErrorPage />
        }
        </>
    )
};

export default AdminMessagesNotifications;
