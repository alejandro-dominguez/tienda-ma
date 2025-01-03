import {
    addDoc,
    collection,
} from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase/config';

const CreateProductForm = ({
    subcategories,
    setActiveToast,
    setErrorToast
}) => {
    const [ newProduct, setNewProduct ] = useState({
        productBrand: '',
        productName: '',
        productCategory: '',
        productDesc: '',
        productImg: '',
    })
    const [ productPrice, setProductPrice ] = useState(0)
    const [ productSubcategory, setProductSubcategory ] = useState('')
    const [ productLine, setProductLine ] = useState('')
    const [ productImg1, setProductImg1 ] = useState('')
    const [ productImg2, setProductImg2 ] = useState('')
    const [ productImg3, setProductImg3 ] = useState('')
    const [ productBabySizes, setProductBabySizes ] = useState(false)
    const [ productAdultSizes, setProductAdultSizes ] = useState(false)
    
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

    const registerSubcategory = (e) => {
        setProductSubcategory(e.target.value)
    }

    const registerProductLine = (e) => {
        if (e.target.value !== ' ' || '') {
            setProductLine(
                e.target.value
                )
        } else {                
            setProductLine(
                ''
            )
        }
    }

    const registerProductImg1 = (e) => {
        if (e.target.value !== ' ' || '') {
            setProductImg1(
                e.target.value
                )
        } else {                
            setProductImg1(
                ''
            )
        }
    }

    const registerProductImg2 = (e) => {
        if (e.target.value !== ' ' || '') {
            setProductImg2(
                e.target.value
                )
        } else {                
            setProductImg2(
                ''
            )
        }
    }

    const registerProductImg3 = (e) => {
        if (e.target.value !== ' ' || '') {
            setProductImg3(
                e.target.value
                )
        } else {                
            setProductImg3(
                ''
            )
        }
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
                    brand: newProduct.productBrand,
                    name: newProduct.productName,
                    category: newProduct.productCategory,
                    subcategory: productSubcategory,
                    desc: newProduct.productDesc,
                    img: newProduct.productImg,
                    img1: productImg1,
                    img2: productImg2,
                    img3: productImg3,
                    price: productPrice,
                    sizes: productBabySizes,
                    adultSizes: productAdultSizes,
                    productLine: productLine,
                    quantity: 1000000,
                    featured: false,
                    stock: true
                }
            )
            const repeatedSubcategory = subcategories.find(productSubcategories => productSubcategories === productSubcategory)
            if (repeatedSubcategory === undefined) {
                await addDoc(collection(db, 'subcategories'),
                    {
                        category: newProduct.productCategory,
                        subcategory: productSubcategory,
                    }
                )
            }
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
            className='grid pt-3 pb-5 px-4 md:px-8 mt-5 shadow-sm drop-shadow-sm bg-white'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <h1 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto'>
                Nuevo Producto:
            </h1>
            <h3 className='font-bold font-Raleway my-2 text-red-500'>
                Subcategorías de pañales: pañales-bebe/pañales-adulto.
            </h3>
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
                            placeholder='...' minLength={20} required
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
                        <input
                            type='text' name='productSubcategory' id='productSubcategory'
                            placeholder='...' min={8} required
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerSubcategory}
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
                            rounded-sm drop-shadow-sm text-black' required
                            onChange={registerPrice}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='productImg'
                            className='mt-2'    
                        >
                            Link imagen principal:
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
                    <div className='flex flex-col mt-[.6rem]'>
                        <label
                            htmlFor='productLine'
                            className='mt-2'    
                        >
                            Línea de producto:
                        </label>
                        <input
                            type='text' name='productLine' id='productLine'
                            placeholder='...'
                            className='text-[.8rem] mt-3 bg-teal-500/[8%] shadow-sm py-2 px-4
                            rounded-sm drop-shadow-sm text-black'
                            onChange={registerProductLine}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label
                        htmlFor='productImg1'
                        className='mt-2'    
                    >
                        Link imagen 2:
                    </label>
                    <input
                        type='text' name='productImg1' id='productImg1'
                        placeholder='...' min={8}
                        className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerProductImg1}
                    />
                </div>
                <div className='flex flex-col'>
                    <label
                        htmlFor='productImg2'
                        className='mt-2'    
                    >
                        Link imagen 3:
                    </label>
                    <input
                        type='text' name='productImg2' id='productImg2'
                        placeholder='...' min={8}
                        className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerProductImg2}
                    />
                </div>
                <div className='flex flex-col mb-1'>
                    <label
                        htmlFor='productImg3'
                        className='mt-2'    
                    >
                        Link imagen 4:
                    </label>
                    <input
                        type='text' name='productImg3' id='productImg3'
                        placeholder='...' min={8}
                        className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4
                        rounded-sm drop-shadow-sm text-black'
                        onChange={registerProductImg3}
                    />
                </div>
            </div>
            <button
                type='submit'
                className='grid place-items-center justify-self-center py-2 w-56 mt-5 bg-zinc-900 rounded-md transition-colors
                ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
            >
                <span className='text-white px-8 tracking-wider font-bold text-[1.05rem]'>
                    Crear producto
                </span>
            </button>
        </form>
    )
};

export default CreateProductForm;
