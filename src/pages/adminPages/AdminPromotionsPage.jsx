import { useState } from 'react';
import useGetPromo from '../../customHooks/useGetPromo';
import { RotatingLines } from 'react-loader-spinner';

const AdminPromotionsPage = () => {
    const [ promo, error, loading ] = useGetPromo()
    const [ newPromo, setNewPromo ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(newPromo);
/*         setError(null)
        try {
            await signIn(user.adminEmail, user.adminPassword)
        } catch (error) {
            setError(error.message)
        } */
    }

    return (
        <main className='w-full flex flex-col gap-4 mt-28 min-h-[100svh]'>
        { 
            (promo.length && !loading && !error) ?
                <div className='mx-auto flex flex-col'>
                    <h3 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto mt-2'>
                        Promoción activa:
                    </h3>
                    <span className='text-sm mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 rounded-sm drop-shadow-sm
                    text-black cursor-default select-none'>
                        {promo[0].text}
                    </span>
                    <form
                        className='flex flex-col pt-3 pb-5 px-8 mt-5 shadow-sm bg-white/70'
                        autoComplete='off'
                        onSubmit={handleSubmit}
                    >
                        <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                        <label htmlFor='newPromotion' className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto'>
                            Nueva Promoción:
                        </label>
                        <input
                            type='text' name='newPromotion' id='newPromotion' required placeholder='Texto de promoción' min={8}
                            className='text-[.8rem] mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 rounded-sm drop-shadow-sm text-black'
                            onChange={(e) => setNewPromo(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                            ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
                        >
                            <span className='text-white tracking-wider font-bold text-[1.05rem]'>
                                Actualizar promoción
                            </span>
                        </button>
                    </form>
                </div>
            : !error ?
                <div className='w-full grid place-items-center bg-white/70 mt-2 py-4 shadow-sm min-h-[24rem]'>
                    <div className='p-5 bg-teal-600/20 rounded-lg'>
                        <RotatingLines
                            strokeColor='white'
                            strokeWidth='5'
                            animationDuration='0.75'
                            width='70'
                            visible={true}
                        />
                    </div>
                </div>
            :
                null
        }
        </main>
    )
};

export default AdminPromotionsPage;
