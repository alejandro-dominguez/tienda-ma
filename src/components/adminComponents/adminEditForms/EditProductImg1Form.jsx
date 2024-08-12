import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditProductImg1Form = ({
    product, 
    setActiveToast,
    setErrorToast
}) => {
    const [ newInfo, setNewInfo ] = useState({
        productImg1: '',
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
                img1: newInfo.productImg1,
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
            <div className='flex flex-col'>
                <label
                    htmlFor='productImg1'
                    className='mt-2'    
                >
                {
                    product.img1 === undefined || product.img1 === ('' || ' ')  ?
                        'Aún no hay imagen 2'
                    :
                        'Link imagen 2:'
                }
                </label>
                {
                    product.img1 === undefined || product.img1 === ('' || ' ') ?
                        null
                    :
                        <span className='text-sm mt-2 shadow p-2 max-w-[17rem] break-words'>
                            {product.img1}
                        </span>
                }
                <input
                    type='text' name='productImg1' id='productImg1'
                    placeholder='ingresa un enlace' min={8} required
                    className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                    rounded-sm drop-shadow-sm text-black placeholder:tracking-wide'
                    onChange={registerInputs}
                />
            </div>
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar imágen
                </span>
            </button>
        </form>
    )
};

export default EditProductImg1Form;
