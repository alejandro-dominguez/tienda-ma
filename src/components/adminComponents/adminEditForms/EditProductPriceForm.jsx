import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditProductPriceForm = ({
    product,
    setActiveToast,
    setErrorToast
}) => {
    const [ productPrice, setProductPrice ] = useState(0)

    const registerPrice = (e) => {
        setProductPrice(
            Number(e.target.value)
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'products', product.id)
            await updateDoc(docRef, {
                price: productPrice,
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white max-w-80 mx-auto'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col'>
                <h3 className='font-bold font-Raleway text-lg mt-1 drop-shadow-sm mx-auto'>
                    {product.brand} {product.name}
                </h3>
                <span className='text-sm font-bold mt-2'>
                    Precio actual:
                </span>
                <span className='text-[.8rem] mt-2 shadow p-2 text-black'>
                    {product.price}
                </span>
                <label
                    htmlFor='productPrice'
                    className='mt-3'    
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
        </form>
    )
};

export default EditProductPriceForm;
