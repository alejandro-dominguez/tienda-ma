import { useState } from 'react';
import { db } from '../../firebase/config';
import {
    addDoc,
    collection,
} from 'firebase/firestore';

const CreatePaymentsForm = ({
    setActiveToast,
    setErrorToast
}) => {
    const [ newPayment, setNewPayment ] = useState({
        paymentTitle: '',
        paymentDescLine1: '',
        paymentDescLine2: '',
        paymentDescLine3: '',
    })
    
    const registerInputs = ({ target: {name, value} }) => {
        setNewPayment({
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
                    descLine1: newPayment.paymentDescLine1,
                    descLine2: newPayment.paymentDescLine2,
                    descLine3: newPayment.paymentDescLine3,
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        } finally {
            e.target.reset()
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
                            htmlFor='paymentDescline1'
                            className='mt-2'    
                        >
                            Detalle línea 1:
                        </label>
                        <textarea
                            type='text' name='paymentDescLine1' id='paymentDescLine1' cols='10' rows='10'
                            placeholder='...'
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-10
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='paymentDescline2'
                            className='mt-2'    
                        >
                            Detalle línea 2:
                        </label>
                        <textarea
                            type='text' name='paymentDescLine2' id='paymentDescLine2' cols='10' rows='10'
                            placeholder='...'
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-10
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='paymentDescline3'
                            className='mt-2'    
                        >
                            Detalle línea 3:
                        </label>
                        <textarea
                            type='text' name='paymentDescLine3' id='paymentDescLine3' cols='10' rows='10'
                            placeholder='...'
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-10
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                </div>
            <button
                type='submit'
                className='grid place-items-center justify-self-center py-2 w-56 mt-7 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Cargar nueva forma de pago
                </span>
            </button>
        </form>
    )
};

export default CreatePaymentsForm;
