import { useState } from 'react';
import { useForm } from 'react-hook-form';

const HomeContactForm = () => {
    const {
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = handleSubmit(() => {
        reset()
    })

    return (
        <section
            id='contact-section'
            className='grid place-items-center py-10 w-full mb-24'
        >
            <form
                className='md:w-[62.25%] py-8 px-4 sm:px-10 md:px-8 shadow-sm bg-white/70'
                onSubmit={onSubmit}
                autoComplete='off'
            >
                <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                <h2 className='font-Raleway text-2xl font-black tracking-wide drop-shadow-sm -mt-2'>
                    ¡Queremos escucharte!
                </h2>
                <div className='flex flex-col xl:flex-row items-start md:gap-12 mt-3'>
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
                    <div className='flex flex-col mt-3 md:-mt-8 lg:mt-0'>
                        <label htmlFor='message' className='text-zinc-700 flex gap-[.3rem]'>
                            Mensaje:
                            <span className='text-rose-500 text-xl h-fit -mt-1'>
                                *
                            </span>
                        </label>
                        <textarea name='message' cols='30' rows='10' required minLength={10}
                        placeholder='Deja tu mensaje' className='contact-textarea'/>
                    </div>
                </div>
                <button
                    type='submit'
                    className='grid place-items-center py-[.625rem] px-6 w-full mt-6 bg-zinc-900 rounded-md transition-colors
                    ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
                >
                    <span className='text-white drop-shadow-sm tracking-wider font-bold text-[1.05rem]'>
                        Enviar
                    </span>
                </button>
            </form>
        </section>
    )
};

export default HomeContactForm;
