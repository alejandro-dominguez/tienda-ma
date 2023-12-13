import { useState } from 'react';
import { useForm } from 'react-hook-form';

const HomeContactForm = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const [date, setDate] = useState({})

    const onSubmit = handleSubmit((data) => {
        const todaysDate = new Date().getDate()
        setDate(todaysDate)
        console.log(data)
        reset()
    })

    return (
        <section
            id='contact-section'
            className='grid place-items-center py-10 w-full bg-teal-400 mb-24'
        >
            <form
                className='md:w-[62.25%] rounded-lg py-8 bg-teal-50 md:px-8 shadow-md'
                onSubmit={onSubmit}
                autoComplete='off'
            >
                <input
                    autoComplete='false'
                    name='hidden'
                    type='text'
                    className='hidden'
                />
                <h2 className='font-Raleway text-3xl font-black tracking-wide text-teal-500 drop-shadow-sm'>
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
                                {...register('fullName')}
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
                                {...register('phone')}
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
                                placeholder='tu email aquí'
                                {...register('email')}
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
                            {...register('message')}
                            className='mt-2 bg-white shadow-sm shadow-teal-600/50 py-2 px-3 rounded dropshadow-sm text-black
                            md:w-[22rem] max-h-36'
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='grid place-items-center py-3 px-6 uppercase font-black tracking-[0.07em] w-full mt-6 bg-rose-500
                    text-white rounded-md transition-colors ease-out duration-[180ms] hover:bg-teal-600 focus:bg-teal-600'
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
