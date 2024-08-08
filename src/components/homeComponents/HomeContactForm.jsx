import {
    Toaster,
    toast
} from 'sonner';
import {
    addDoc,
    collection,
} from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase/config';

const HomeContactForm = () => {
    const [ contactFormMessage, setContactFormMessage ]  = useState({
        contactFullName: '',
        contactPhone: '',
        contactEmail: '',
        contactMessage: '',
    })
    const [ errorMessage, setErrorMessage ] = ('')

    const registerInputs = ({ target: {name, value} }) => {
        setContactFormMessage({
            ...contactFormMessage,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const localDate = Date.now()
            await addDoc(collection(db, 'messages'),
                {
                    fullName: contactFormMessage.contactFullName,
                    phone: contactFormMessage.contactPhone,
                    email: contactFormMessage.contactEmail,
                    message: contactFormMessage.contactMessage,
                    messageDate: new Date().toLocaleString(),
                    dateFilter: localDate,
                    read: false
                }
            )
            toast.success(
                'Mensaje enviado',
                {
                    duration: 5000,
                    position: 'bottom-center',
                }
            )
        } catch (error) {
            setErrorMessage(error.message)
            toast.error(
                errorMessage,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        } finally {
            e.target.reset()
        }
    }

    return (
        <section
            id='contact-section'
            className='grid place-items-center pt-10 w-full pb-24'
        >
            <form
                className='md:w-[62.25%] py-8 px-6 sm:px-10 bg-white shadow-sm drop-shadow-sm'
                onSubmit={handleSubmit}
                autoComplete='off'
            >
                <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                <h2 className='font-Raleway text-2xl font-black tracking-wide drop-shadow-sm -mt-2'>
                    ¡Queremos escucharte!
                </h2>
                <div className='flex flex-col xl:flex-row items-start mt-3'>
                    <div className='grid md:items-center md:justify-start gap-3 w-full'>
                        <div className='flex flex-col'>
                            <label htmlFor='contactFullName' className='text-zinc-700 flex gap-[.3rem]'>
                                Nombre completo:
                                <span className='text-rose-500 text-xl h-fit -mt-1'>
                                    *
                                </span>
                            </label>
                            <input
                                type='text' name='contactFullName' id='contactFullName' minLength={10} maxLength={30} required
                                placeholder='Tu nombre aquí' className='contact-input'
                                onChange={registerInputs}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='contactPhone' className='text-zinc-700 flex gap-[.3rem]'>
                                Teléfono:
                                <span className='text-rose-500 text-xl h-fit -mt-1'>
                                    *
                                </span>
                            </label>
                            <input
                                type='tel' name='contactPhone' id='contactPhone' required placeholder='0101-0101-01'
                                className='contact-input'
                                onChange={registerInputs}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='contactEmail' className='text-zinc-700'>
                                Email:
                            </label>
                            <input
                                type='email' name='contactEmail' id='contactEmail' placeholder='Tu email aquí'
                                className='contact-input'
                                onChange={registerInputs}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col mt-3 xl:mt-0 w-full'>
                        <label htmlFor='contactMessage' className='text-zinc-700 flex gap-[.3rem]'>
                            Mensaje:
                            <span className='text-rose-500 text-xl h-fit -mt-1'>
                                *
                            </span>
                        </label>
                        <textarea
                            name='contactMessage' id='contactMessage' cols='30' rows='10' required minLength={10} maxLength={5000}
                            placeholder='Deja tu mensaje' className='contact-textarea'
                            onChange={registerInputs}
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='grid place-items-center py-[.625rem] w-full mt-6 bg-zinc-900 rounded-md transition-colors
                    ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
                >
                    <span className='text-white tracking-wider font-bold text-[1.05rem]'>
                        Enviar
                    </span>
                </button>
            </form>
            <Toaster
                richColors
                toastOptions={{
                    unstyled: false,
                    classNames: {
                        toast: 'h-24 mb-60',
                        title: 'text-lg',
                    },
                }}
            />
        </section>
    )
};

export default HomeContactForm;
