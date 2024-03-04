import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditProductSizesForm = ({
    product,
    setActiveToast,
    setErrorToast
}) => {
    const [ productBabySizes, setProductBabySizes ] = useState(false)
    const [ productAdultSizes, setProductAdultSizes ] = useState(false)

    const registerBabySizes = (e) => {
        if (!e.target.value) {
            setProductBabySizes(false)
        }
        setProductBabySizes(true)
    }
    
    const registerAdultSizes = (e) => {
        if (!e.target.value) {
            setProductAdultSizes(false)
        }
        setProductAdultSizes(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'products', product.id)
            await updateDoc(docRef, {
                sizes: productBabySizes,
                adultSizes: productAdultSizes,
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white w-fit mx-auto'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productSizes'
                            className='mt-2'
                        >
                            Talles bebé:
                        </label>
                        <span className='text-sm mt-2 shadow p-2'>
                            {
                                product.sizes ?
                                    'producto con talles de bebé'
                                :
                                    'producto sin talles de bebé'
                            }
                        </span>
                        <select
                            name='productSizes' id='productSizes' required
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerBabySizes}
                        >
                            <option value={false}>Sin Talles</option>
                            <option value={true}>Talles de bebé</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productAdultSizes'
                            className='mt-2'    
                        >
                            Talles adulto:
                        </label>
                        <span className='text-sm mt-2 shadow p-2'>
                            {
                                product.adultSizes ?
                                    'producto con talles de adulto'
                                :
                                    'producto sin talles de adulto'
                            }
                        </span>
                        <select
                            name='productAdultSizes' id='productAdultSizes' required
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerAdultSizes}
                        >
                            <option value={false}>Sin Talles</option>
                            <option value={true}>Talles de adulto</option>
                        </select>
                    </div>
            </div>
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar talles
                </span>
            </button>
        </form>
    )
};

export default EditProductSizesForm;
