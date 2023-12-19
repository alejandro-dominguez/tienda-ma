import { useContext, useState } from 'react';
import { ShopContext } from '../../contexts/shopContext';
import { useNavigate } from 'react-router-dom';
import { generateOrderObject } from '../../services';
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { BiSolidShare } from 'react-icons/bi'
import { useForm } from 'react-hook-form';


const CartModalForm = ({ showForm, setShowForm }) => {
    const {products, calculateCartTotal, emptyCart} = useContext(ShopContext)
    const navigate = useNavigate()
    const {
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = handleSubmit(() => {
        reset()
    })

    return (
        <>
        {showForm && products.length ?
            <form
                className='md:w-[62.25%] rounded-lg py-6 bg-rose-300/70 md:px-7 shadow-md'
                onSubmit={onSubmit}
                autoComplete='off'
            >
                <input
                    autoComplete='false'
                    name='hidden'
                    type='text'
                    className='hidden'
                />
                <div className='flex flex-col md:flex-row items-start md:gap-12'>
                    <div className='grid md:items-center md:justify-start gap-4'>
                        <div className='flex flex-col'>
                            <label
                                htmlFor='fullName'
                                className='text-zinc-700'
                            >
                                Nombre completo: *
                            </label>
                            <input
                                type='text'
                                name='fullName'
                                minLength={10}
                                maxLength={30}
                                required
                                placeholder='Tu nombre aquí'
                                className='contact-input'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label
                                htmlFor='phone'
                                className='text-zinc-700'
                            >
                                Teléfono: *
                            </label>
                            <input
                                type='tel'
                                name='phone'
                                required
                                placeholder='0101-0101-01'
                                className='contact-input'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label
                                htmlFor='email'
                                className='text-zinc-700'
                            >
                                Email:
                            </label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Tu email aquí'
                                className='contact-input'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
{/*                         <button
                            type='button'
                            onClick={}
                        >
                            <BiSolidShare className='block text-red-900 text-3xl drop-shadow' />
                        </button> */}
                        <label
                            htmlFor='message'
                            className='text-zinc-700'
                        >
                            Notas para tu entrega:
                        </label>
                        <textarea
                            name='message'
                            cols='30'
                            rows='10'
                            minLength={10}
                            placeholder='Deja notas sobre tu orden'
                            className='contact-textarea'
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='grid place-items-center py-3 px-6 uppercase font-black tracking-[0.07em] w-full mt-6
                    bg-teal-700 text-white rounded-md shadow-sm shadow-black/50 transition ease-out duration-[180ms]
                    hover:bg-teal-600 focus:bg-teal-600 hover:shadow-white/30 focus:shadow-white/30'
                >
                    <span className='drop-shadow-md'>
                        Realizar orden
                    </span>
                </button>
            </form>
            : null}
        </>
    )
};

export default CartModalForm;
