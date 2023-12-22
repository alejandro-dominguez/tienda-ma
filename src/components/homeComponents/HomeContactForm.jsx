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
                className='md:w-[62.25%] py-8 md:px-8 shadow-sm bg-white'
                onSubmit={onSubmit}
                autoComplete='off'
            >
                <input
                    autoComplete='false'
                    name='hidden'
                    type='text'
                    className='hidden'
                />
                <h2 className='font-Raleway text-3xl font-black tracking-wide drop-shadow-sm'>
                    ¡Queremos escucharte!
                </h2>
                <div className='flex flex-col md:flex-row items-start md:gap-12 mt-4'>
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
                        <label
                            htmlFor='message'
                            className='text-zinc-700'
                        >
                            Mensaje: *
                        </label>
                        <textarea
                            name='message'
                            cols='30'
                            rows='10'
                            required
                            minLength={10}
                            placeholder='Deja tu mensaje'
                            className='contact-textarea'
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='grid place-items-center py-3 px-6 uppercase font-black tracking-[0.07em] w-full mt-6 bg-zinc-900
                    text-white rounded-md transition-colors ease-out duration-[180ms] hover:bg-zinc-700 focus:bg-zinc-700
                    shadow-sm'
                >
                    <span className='drop-shadow'>
                        Enviar
                    </span>
                </button>
            </form>
        </section>
    )
};

export default HomeContactForm;
