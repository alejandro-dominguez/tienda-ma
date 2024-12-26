import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';

const EditProductStockForm = ({
    product,
    setActiveToast,
    setErrorToast
}) => {
    const [ productStock, setProductStock ] = useState(true)
    const {
        id,
        stock,
    } = product

    const registerInputs = (e) => {
        switch (e.target.value) {
            case 'true':
                setProductStock(true)
            break;
            case 'false':
                setProductStock(false)
            break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, 'products', id)
            await updateDoc(docRef, {
                stock: productStock,
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 shadow-sm drop-shadow-sm bg-white max-w-sm mx-auto'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col'>
                {
                    !stock ?
                        <label
                            htmlFor='productStock'
                            className='text-sm font-bold mt-2'>
                            Actualmente no hay stock.
                        </label>
                    :
                        <label
                            htmlFor='productStock'
                            className='text-sm font-bold mt-2'>
                            Actualmente hay stock.
                        </label>
                }
                <select
                    name='productStock' id='productStock' required
                    className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                    rounded-sm drop-shadow-sm text-black' 
                    onChange={registerInputs}
                >
                    <option value={null}>Elige una opción</option>
                    <option value={false}>Eliminar stock</option>
                    <option value={true}>Agregar stock</option>
                </select>
            </div>
            <button
                type='submit'
                className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Actualizar stock
                </span>
            </button>
        </form>
    )
};

export default EditProductStockForm;
