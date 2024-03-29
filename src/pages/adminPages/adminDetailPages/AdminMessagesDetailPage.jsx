import {
    useEffect,
    useState,
    useContext
} from 'react';
import { ContactMessageContext } from '../../../contexts/contactMessageContext';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import MessageDetailCard from '../../../components/adminComponents/MessageDetailCard';

const AdminMessagesDetailPage = () => {
    const { id } = useParams()
    const { messages, errorMessages, loadingMessages } = useContext(ContactMessageContext)
    const [ message, setMessage ] = useState({})

    useEffect(() => {
        if (localStorage.contactMessageData) {
            setMessage(JSON.parse(localStorage.contactMessageData))
        }
        else if (messages.length && !loadingMessages && !errorMessages) {
            const getMessageId = messages.find(message => message.id === id)
            setMessage(getMessageId)
        }
    }, [])
    
    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            {
                (messages.length && !loadingMessages && !errorMessages) ?
                    <MessageDetailCard message={message} />
                : !errorMessages ?
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
    )
};

export default AdminMessagesDetailPage;
