import { useContext, useState } from 'react';
import { ShopContext } from '../../contexts/shopContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BiSolidShare } from 'react-icons/bi';  
import { Toaster, toast } from 'sonner';

const CartModalForm = ({ showForm, setShowForm }) => {
    const { products, emptyCart } = useContext(ShopContext)
    const navigate = useNavigate()
    const {
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = handleSubmit(() => {
        toast.success(
            'Orden enviada',
            {
                description: 'Nos comunicamos en la brevedad una vez confirmado el stock.',
                duration: 5000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            reset()
            emptyCart()
            navigate('/')
        }, 6000)
    })

    return (
        <>
        {
            showForm && products.length ?
                <>
                <form
                    className='md:w-[62.25%] mt-4 pt-3 pb-6 px-6 sm:px-10 shadow-sm bg-white/70'
                    onSubmit={onSubmit}
                    autoComplete='off'
                >
                    <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                    <div className='flex flex-col xl:flex-row items-start md:gap-4 xl:gap-12 mt-3'>
                        <div className='grid md:items-center md:justify-start gap-3'>
                            <div className='flex flex-col'>
                                <label htmlFor='fullName' className='text-zinc-700 flex gap-[.3rem]'>
                                    Nombre completo:
                                    <span className='text-rose-500 text-xl h-fit -mt-1'>
                                        *
                                    </span>
                                </label>
                                <input type='text' name='fullName' minLength={10} maxLength={30} required
                                placeholder='Tu nombre aquí' className='contact-input'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='phone' className='text-zinc-700 flex gap-[.3rem]'>
                                    Teléfono:
                                    <span className='text-rose-500 text-xl h-fit -mt-1'>
                                        *
                                    </span>
                                </label>
                                <input type='tel' name='phone' required placeholder='0101-0101-01' className='contact-input'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='email' className='text-zinc-700'>
                                    Email:
                                </label>
                                <input type='email' name='email' placeholder='Tu email aquí' className='contact-input'/>
                            </div>
                        </div>
                        <div className='flex flex-col mt-3 md:mt-0'>
                            <div className='flex flex-col'>
                                <label htmlFor='address' className='text-zinc-700 flex gap-[.3rem]'>
                                    Dirección de entrega:
                                    <span className='text-rose-500 text-xl h-fit -mt-1'>
                                        *
                                    </span>
                                </label>
                                <input type='text' name='address' minLength={10} maxLength={30} required
                                placeholder='Dirección del envío' className='contact-input'/>
                            </div>
                            <div className='flex flex-col mt-3'>
                                <label htmlFor='notes' className='text-zinc-700'>
                                    Notas para la entrega:
                                </label>
                                <textarea name='notes' cols='30' rows='10' minLength={10}
                                placeholder='Deja tus notas' className='cart-textarea'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <small className='block font-bold tracking-wider'>
                            Costo de envío a convenir *
                        </small>
                        <button
                            type='button'
                            className='grid place-items-center drop-shadow-sm'
                            onClick={() => setShowForm(false)}
                        >
                            <BiSolidShare className='block text-red-300 text-2xl' />
                            <small className='block font font-Raleway font-bold tracking-wide -mt-1'>
                                Volver    
                            </small>
                        </button>
                    </div>
                    <button
                        type='submit'
                        className='grid place-items-center py-[.625rem] px-6 w-full mt-3 bg-zinc-900 rounded-md transition-colors
                        ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
                    >
                        <span className='text-white tracking-wider font-bold text-[1.05rem]'>
                            Enviar orden
                        </span>
                    </button>
                </form>
                <Toaster
                    richColors
                    toastOptions={{
                        className: 'text-center',
                    }}
                />
                </>
            : 
                null
        }
        </>
    )
};

export default CartModalForm;
