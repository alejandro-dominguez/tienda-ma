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

const EditProductCategoriesForm = ({ product }) => {
    const [ errorProduct, setErrorProduct ] = useState('')
    const [ newInfo, setNewInfo ] = useState({
        productCategory: '',
        productSubcategory: '',
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
                category: newInfo.productCategory,
                subcategory: newInfo.productSubcategory,
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
            className='flex flex-col pt-3 pb-5 px-4 sm:px-8 mt-5 shadow-sm drop-shadow-sm bg-white w-fit mx-auto'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='flex flex-col'>
                    <label
                        htmlFor='productCategory'
                        className='mt-2'    
                    >
                        Categoría:
                    </label>
                    <span className='text-sm mt-2 shadow p-2'>
                        {product.category}
                    </span>
                    <select
                        name='productCategory' id='productCategory' required
                        className='text-[.8rem] mt-4 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerInputs}
                    >
                        <option value={null}>Elige una categoría</option>
                        <option value='bebe'>Bebé</option>
                        <option value='adulto'>Adulto</option>
                        <option value='higiene'>Higiene</option>
                        <option value='accesorios'>Accesorios</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label
                        htmlFor='productSubcategory'
                        className='mt-2'    
                    >
                        Subcategoría:
                    </label>
                    <span className='text-sm mt-2 shadow p-2'>
                        {product.subcategory}
                    </span>
                    <input
                        type='text' name='productSubcategory' id='productSubcategory'
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
                    Actualizar categoría
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

export default EditProductCategoriesForm;
