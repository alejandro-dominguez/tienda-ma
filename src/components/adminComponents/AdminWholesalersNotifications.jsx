import {
    useState,
    useContext,
    useEffect
} from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { WholesalerMessageContext } from '../../contexts/wholesalerMessageContext';

const AdminWholesalersNotifications = () => {
    const { wholesalersMessages, errorWholesalersMessages, loadingWholesalersMessages } = useContext(WholesalerMessageContext)
    const [ pendingWholesalersMessages, setPendingWholesalersMessages ] = useState(0)

    useEffect(() => {
        setPendingWholesalersMessages(wholesalersMessages.reduce((acc, message) => acc += !message.read, 0))
    }, [wholesalersMessages])

    return (
        <>
        {
            (wholesalersMessages.length && !errorWholesalersMessages && !loadingWholesalersMessages) ?
            <div className='w-fit relative'>
                <span className='flex flex-col sm:flex-row items-baseline'>
                    <div className='flex gap-1'>
                        Tienes
                        <span className='font-bold'>
                            {pendingWholesalersMessages}
                        </span>
                        mensaje/es&nbsp;
                    </div>
                    de mayoristas sin leer.
                </span>
                <div className='absolute w-full h-[.2rem] bg-red-500/50 rounded-full mt-1' />
            </div>
        : !errorWholesalersMessages ?
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
                    {errorWholesalersMessages}
                </span>
            </div>      
        }
        </>
    )
};

export default AdminWholesalersNotifications;
