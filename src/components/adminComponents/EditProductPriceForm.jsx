import {
    Toaster,
    toast
} from 'sonner';
import {
    doc,
    updateDoc
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditProductPriceForm = ({ product }) => {
    const [ errorProduct, setErrorProduct ] = useState('')
    const [ productPrice, setProductPrice ] = useState(0)
    const navigate = useNavigate()

    const registerPrice = (e) => {
        setProductPrice(
            Number(e.target.value)
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'products', product.id)
            await updateDoc(collection(docRef, {
                price: productPrice,
            }))
            setProductPrice(0)
            toast.success(
                'Precio actualizado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                navigate('/admin/consola')
            }, 3500)
        } catch (error) {
            setProductPrice(0)
            setErrorProduct(error.message)
            toast.error(
                `${errorProduct}`,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    return (
        <form
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white w-80 mx-auto'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col'>
                <label
                    htmlFor='productPrice'
                    className='mt-2'    
                >
                    Nuevo precio:
                </label>
                <input
                    type='number' name='productPrice' id='productPrice' placeholder='1010'
                    className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                    rounded-sm drop-shadow-sm text-black'
                    onChange={registerPrice} required
                />
                </div>
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar precio
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

export default EditProductPriceForm;
