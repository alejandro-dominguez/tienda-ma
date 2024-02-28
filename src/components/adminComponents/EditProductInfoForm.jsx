    import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useState } from 'react';

const EditProductInfoForm = ({
    product,
    setActiveToast,
    setErrorToast
}) => {
    const [ newInfo, setNewInfo ] = useState({
        productBrand: '',
        productName: '',
        productDesc: '',
    })

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
                brand: newInfo.productBrand,
                name: newInfo.productName,
                desc: newInfo.productDesc,
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
        className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white w-fit mx-auto self-start'
        autoComplete='off'
        onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='flex flex-col'>
                    <span className='text-sm font-bold mt-2'>
                        Marca actual:
                    </span>
                    <span className='text-[.8rem] mt-2 shadow p-2 text-black'>
                        {product.brand}
                    </span>
                    <label
                        htmlFor='productBrand'
                        className='mt-3'    
                    >
                        Nueva marca:
                    </label>
                    <input
                        type='text' name='productBrand' id='productBrand' placeholder='...'
                        className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerInputs} required
                    />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm font-bold mt-2'>
                        Nombre actual:
                    </span>
                    <span className='text-[.8rem] mt-2 shadow p-2 text-black'>
                        {product.name}
                    </span>
                    <label
                        htmlFor='productName'
                        className='mt-3'    
                    >
                        Nuevo nombre:
                    </label>
                    <input
                        type='text' name='productName' id='productName' placeholder='...'
                        className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerInputs} required
                    />
                </div>
            </div>
            <div className='flex flex-col'>
                <label
                    htmlFor='productDesc'
                    className='mt-3'    
                >
                    Descripción:
                </label>
                <span className='text-sm max-h-[4.5rem] overflow-y-scroll mt-2 shadow p-2'>
                    {product.desc}
                </span>
                <textarea
                    type='text' name='productDesc' id='productDesc' cols='10' rows='10'
                    placeholder='...' min={20} required
                    className='text-[.8rem] mt-4 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                    rounded-sm drop-shadow-sm text-black'
                    onChange={registerInputs}
                />
            </div>
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar Info.
                </span>
            </button>
        </form>
    )
};

export default EditProductInfoForm;
