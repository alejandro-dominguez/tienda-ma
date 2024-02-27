import {
    Toaster,
    toast
} from 'sonner';
import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditProductLineForm = ({ product }) => {
    const [ errorProduct, setErrorProduct ] = useState('')
    const [ newInfo, setNewInfo ] = useState({
        productLine: '',
    })
    const navigate = useNavigate()

    const registerInputs = ({ target: {name, value} }) => {
        setNewInfo({
            ...newInfo,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'products', product.id)
            await updateDoc(docRef, {
                productLine: newInfo.productLine,
            })
            toast.success(
                'Producto editado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                navigate('/admin/consola')
            }, 3500)
        } catch (error) {
            setErrorProduct(error.message)
            toast.error(
                errorProduct,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    return (
        <form
        className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white w-fit mx-auto self-start'
        autoComplete='off'
        onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='flex flex-col'>
                    {  
                        product.productLine ?
                            <>
                                <span className='text-sm font-bold mt-2'>
                                    Línea de producto actual:
                                </span>
                                <span className='text-[.8rem] mt-2 shadow p-2 text-black'>
                                    {product.productLine}
                                </span>
                            </>
                        :
                            <span className='text-sm font-bold mt-2'>
                                No tiene Línea de producto aún.
                            </span>
                    }
                    <label
                        htmlFor='productLine'
                        className='mt-3'    
                    >
                        Nueva línea de producto:
                    </label>
                    <input
                        type='text' name='productLine' id='productLine' placeholder='...'
                        className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerInputs} required
                    />
                </div>
            </div>
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar Línea
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
};

export default EditProductLineForm;
