import {
    Toaster,
    toast
} from 'sonner';
import {
    useState,
    useContext
} from 'react';
import { WholesalerMessageContext } from '../../contexts/wholesalerMessageContext';
import { RotatingLines } from 'react-loader-spinner';
import AdminWholesalersContainer from '../../components/adminComponents/AdminWholesalersContainer';

const AdminWholesalersPage = () => {
    const { wholesalersMessages, errorWholesalersMessages, loadingWholesalersMessages } = useContext(WholesalerMessageContext)
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')

    if (activeToast && errorToast === '') {
        toast.success(
            'Mensaje editado',
            {
                duration: 2000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
        }, 2500)
    }

    if (activeToast && errorToast !== '') {
        toast.error(
            errorToast,
            {
                duration: 4000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
            setErrorToast('')
        }, 4500)
    }

    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            { 
                (wholesalersMessages.length && !loadingWholesalersMessages && !errorWholesalersMessages) ?
                    <div className='mx-auto flex flex-col'>
                        <AdminWholesalersContainer
                            wholesalersMessages={wholesalersMessages}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <Toaster
                            visibleToasts={1}
                            richColors
                            toastOptions={{
                                className: 'text-center',
                            }}
                        />
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
    )
};

export default AdminWholesalersPage;
