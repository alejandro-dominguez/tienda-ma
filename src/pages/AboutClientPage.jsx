import {
    Toaster,
    toast
} from 'sonner';
import { useState } from 'react';
import ClientCmtContainer from '../containers/ClientCmtContainer';
import ClientCmtSendForm from '../components/clientCmtComponents/ClientCmtSendForm';

const AboutClientPage = () => {
    const [ activeToast, setActiveToast ] = useState(false)
    const [ adminToast, setAdminToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')
    
    if (activeToast && !adminToast && errorToast === '') {
        toast.success(
            'Mensaje enviado',
            {
                duration: 3000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
        }, 2500)
    }

    if (activeToast && adminToast && errorToast === '') {
        toast.success(
            'Contenido editado',
            {
                duration: 3000,
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
        <>
        <div className='w-full min-h-[100svh] px-4 md:px-10 mb-20'>
            <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-2 pt-12 mt-20 w-fit mx-auto'>
                Eso que no le dijiste a nadie
            </h1>
            <p className='leading-5 font-semibold max-w-2xl mx-auto px-4 text-center text-[.95rem]'>
                Te invitamos a compartir experiencias graciosas o valiosas sobre la crianza de tus hijos.
                Además, podés dejarnos saber cómo ha sido tu experiencia con nuestra pañalera.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-6'>
                <div className='md:col-span-1'>
                    <ClientCmtSendForm
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                    />
                </div>
                <div className='md:col-span-2 overflow-y-scroll bg-teal-500/[7%] shadow-sm drop-shadow-sm min-h-[24.5rem] max-h-[25rem]'>
                    <ClientCmtContainer
                        setActiveToast={setActiveToast}
                        setErrorToast={setErrorToast}
                        setAdminToast={setAdminToast}
                    />
                </div>
            </div>
        </div>
        <Toaster
            visibleToasts={1}
            richColors
            toastOptions={{
                unstyled: false,
                classNames: {
                    toast: 'h-24 mb-60',
                    title: 'text-lg',
                },
            }}
        />
        </>
    )
};

export default AboutClientPage;
