import { useState } from 'react';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import {
    Toaster,
    toast
} from 'sonner';
import {
    addDoc,
    collection,
} from 'firebase/firestore';

const CreateProductForm = () => {
    const [ errorProduct, setErrorProduct ] = useState('')
    const [ newProduct, setNewProduct ] = useState({
        productBrand: '',
        productName: '',
        productCategory: '',
        productSubcategory: '',
        productDesc: '',
        productImg: '',
    })
    const [ productPrice, setProductPrice ] = useState(0)
    const [ productBabySizes, setProductBabySizes ] = useState(false)
    const [ productAdultSizes, setProductAdultSizes ] = useState(false)
    const navigate = useNavigate()
    
    const registerInputs = ({ target: {name, value} }) => {
        setNewProduct({
            ...newProduct,
            [name]: value
        })
    }

    const registerPrice = (e) => {
        setProductPrice(
            Number(e.target.value)
        )
    }

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
            await addDoc(collection(db, 'products'),
                {
                    brand: `${newProduct.productBrand}`,
                    name: `${newProduct.productName}`,
                    category: `${newProduct.productCategory}`,
                    subcategory: `${newProduct.productSubcategory}`,
                    desc: `${newProduct.productDesc}`,
                    img: `${newProduct.productImg}`,
                    price: productPrice,
                    sizes: productBabySizes,
                    adultSizes: productAdultSizes,
                    quantity: 1000000,
                    featured: false,
                }
            )
            setNewProduct(
                {
                    productBrand: '',
                    productName: '',
                    productCategory: '',
                    productSubcategory: '',
                    productDesc: '',
                    productImg: '',
                }
            )
            setProductPrice(0)
            setProductBabySizes(false)
            setProductAdultSizes(false)
            toast.success(
                'Producto agregado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                navigate('/admin/consola')
            }, 3500)
        } catch (error) {
            setNewProduct(
                {
                    productBrand: '',
                    productName: '',
                    productCategory: '',
                    productSubcategory: '',
                    productDesc: '',
                    productImg: '',
                }
            )
            setProductPrice(0)
            setProductBabySizes(false)
            setProductAdultSizes(false)
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
            className='grid pt-3 pb-5 px-4 md:px-8 mt-5 shadow-sm drop-shadow-sm bg-white'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <h1 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto'>
                Nuevo Producto:
            </h1>
            <input autoComplete='false' name='hidden' type='text' className='hidden'/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productBrand'
                            className='mt-2'    
                        >
                            Marca:
                        </label>
                        <input
                            type='text' name='productBrand' id='productBrand'
                            placeholder='...' min={8} required
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productName'
                            className='mt-3'    
                        >
                            Nombre:
                        </label>
                        <input
                            type='text' name='productName' id='productName'
                            placeholder='...' min={8} required
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productDesc'
                            className='mt-2'    
                        >
                            Descripción:
                        </label>
                        <textarea
                            type='text' name='productDesc' id='productDesc' cols='10' rows='10'
                            placeholder='...' min={20} required
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 max-h-32
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productCategory'
                            className='mt-2'    
                        >
                            Categoría:
                        </label>
                        <select
                            name='productCategory' id='productCategory' required
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        >
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
                        <input
                            type='text' name='productSubcategory' id='productSubcategory'
                            placeholder='...' min={8} required
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productPrice'
                            className='mt-2'    
                        >
                            Precio:
                        </label>
                        <input
                            type='number' name='productPrice' id='productPrice' placeholder='1010'
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerPrice} required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productImg'
                            className='mt-2'    
                        >
                            Link imagen:
                        </label>
                        <input
                            type='text' name='productImg' id='productImg'
                            placeholder='...' min={8} required
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerInputs}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productSizes'
                            className='mt-2'    
                        >
                            Talles bebé:
                        </label>
                        <select
                            name='productSizes' id='productSizes' required
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
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
                        <select
                            name='productAdultSizes' id='productAdultSizes' required
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerAdultSizes}
                        >
                            <option value={false}>Sin Talles</option>
                            <option value={true}>Talles de adulto</option>
                        </select>
                    </div>
                </div>
            </div>
            <button
                type='submit'
                className='grid place-items-center justify-self-center py-2 w-56 mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Cargar producto
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
}

export default CreateProductForm;
