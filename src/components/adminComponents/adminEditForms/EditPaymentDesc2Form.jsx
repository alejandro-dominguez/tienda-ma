import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditPaymentDesc2Form = ({
    payment,
    setActiveToast,
    setErrorToast
}) => {
    const [ newInfo, setNewInfo ] = useState({
        paymentDesc2: '',
    })
    const {
        descLine2,
        id
    } = payment

    const registerInputs = ({ target: {name, value} }) => {
        setNewInfo({
            ...newInfo,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'payments', id)
            await updateDoc(docRef, {
                descLine2: newInfo.paymentDesc2,
            })
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white w-72 md:w-80'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <label
                        htmlFor='paymentDesc2'
                        className='mt-2'    
                    >
                        Detalle línea 2:
                    </label>
                    <span className='text-sm mt-2 shadow p-2'>
                        {descLine2}
                    </span>
                    <input
                        type='text' name='paymentDesc2' id='paymentDesc2'
                        placeholder='...' min={8} required
                        className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerInputs}
                    />
                </div>
            </div>
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar detalle 2
                </span>
            </button>
        </form>
    )
};

export default EditPaymentDesc2Form;
