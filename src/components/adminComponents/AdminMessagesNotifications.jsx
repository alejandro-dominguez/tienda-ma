import {
    useEffect,
    useState,
    useContext
} from 'react';
import { ContactMessageContext } from '../../contexts/contactMessageContext';
import { RotatingLines } from 'react-loader-spinner';

const AdminMessagesNotifications = () => {
    const { messages, errorMessages, loadingMessages } = useContext(ContactMessageContext)
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
                        mensaje/es sin leer.
                    </span>
                    <div className='absolute w-full h-[.2rem] bg-red-500/50 rounded-full mt-1' />
                </div>
            : !errorMessages ?
                <div className='p-3 bg-teal-600/20 rounded-lg w-fit mx-auto'>
                    <RotatingLines
                        strokeColor='white'
                        strokeWidth='5'
                        animationDuration='0.75'
                        width='20'
                        visible={true}
                    />
                </div>
            :
                <div className='w-fit'>
                    <span>
                        {errorMessages}
                    </span>
                </div>      
        }
        </>
    )
};

export default AdminMessagesNotifications;
