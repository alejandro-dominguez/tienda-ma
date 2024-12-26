import {
    useContext,
    useEffect,
    useState
} from 'react';
import { WholesalerMessageContext } from '../../../contexts/wholesalerMessageContext';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import WholesalerMessageDetailCard from '../../../components/adminComponents/WholesalerMessageDetailCard';
import AdminErrorPage from '../../../pages/AdminErrorPage';

const AdminWholesalersDetailPage = () => {
    const { id } = useParams()
    const { wholesalersMessages, errorWholesalersMessages, loadingWholesalersMessages } = useContext(WholesalerMessageContext)
    const [ wholesalerMessage, setWholesalerMessage ] = useState({})

    useEffect(() => {
        if (localStorage.wholesalerMessageData) {
            setWholesalerMessage(JSON.parse(localStorage.wholesalerMessageData))
        }
        else if (wholesalersMessages.length && !loadingWholesalersMessages && !errorWholesalersMessages) {
            const getWholesalerMessageId = wholesalersMessages.find(message => message.id === id)
            setWholesalerMessage(getWholesalerMessageId)
        }
    }, [])
    
    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            {
                (
                    JSON.stringify(wholesalerMessage) &&
                    wholesalersMessages.length &&
                    !loadingWholesalersMessages &&
                    !errorWholesalersMessages
                ) ?
                    <WholesalerMessageDetailCard message={wholesalerMessage} />
                : !errorWholesalersMessages ?
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

export default AdminWholesalersDetailPage;
