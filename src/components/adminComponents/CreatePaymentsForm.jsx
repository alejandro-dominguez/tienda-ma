import { useState } from 'react';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import {
    Toaster,
    toast
} from 'sonner';
import {
    addDoc,
    collection,
} from 'firebase/firestore';

const CreatePaymentsForm = () => {
    const [ errorPayment, setErrorPayment ] = useState('')
    const [ newPayment, setNewPayment ] = useState({
        paymentTitle: '',
        paymentDesc: '',
    })
    const navigate = useNavigate()
    
    const registerInputs = ({ target: {name, value} }) => {
        setNewBlog({
            ...newPayment,
            [name]: value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'payments'),
                {
                    title: newPayment.paymentTitle,
                    desc: newPayment.paymentDesc,
                }
            )
            setNewPayment(
                {
                    paymentTitle: '',
                    paymentDesc: '',
                }
            )
            toast.success(
                'Forma de pago agregada',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                navigate('/admin/consola')
            }, 3500)
        } catch (error) {
            setNewPayment(
                {
                    paymentTitle: '',
                    paymentDesc: '',
                }
            )
            setErrorPayment(error.message)
            toast.error(
                errorPayment,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    return (
        <form
            className='grid pt-3 pb-5 px-4 md:px-8 mt-5 shadow-sm drop-shadow-sm bg-white'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <h1 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto mt-1'>
                Nueva forma de pago:
            </h1>
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='paymentTitle'
                            className='mt-2'    
                        >
                            Título:
                        </label>
                        <input
                            type='text' name='paymentTitle' id='paymentTitle' required
                            placeholder='...' min={8}
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='paymentDesc'
                            className='mt-3'    
                        >
                            Detalle:
                        </label>
                        <textarea
                            type='text' name='paymentDesc' id='paymentDesc' required cols='10' rows='10'
                            placeholder='...' min={20}
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                </div>
            <button
                type='submit'
                className='grid place-items-center justify-self-center py-2 w-56 mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Cargar nueva forma de pago
                </span>
            </button>
            <Toaster
                richColors
                toastOptions={{
                    className: 'text-center',
                }}
            />
        </form>
    )
}

export default CreatePaymentsForm;
