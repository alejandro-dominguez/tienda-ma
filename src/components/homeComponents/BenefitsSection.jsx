import { BiSolidCreditCardAlt, BiCalendarHeart, BiSolidBabyCarriage } from 'react-icons/bi';
import billeteraLogo from '../../assets/billetera-santafe.svg';

const BenefitsSection = () => {
    return (
        <section
            id='benefits-section'
            className='flex flex-col md:flex-row justify-center items-center md:justify-between my-7 w-full md:px-64'
        >
            <div className='grid place-items-center'>
                <div className='flex justify-between items-center gap-8'>
                    <div className='w-[4.45rem]'>
                        <img
                            src={billeteraLogo}
                            alt='logo billetera santa fe'
                            className='block w-full'
                        />
                    </div>
                    <BiCalendarHeart className='block text-[5.5rem] text-rose-400/90' />
                </div>
                <div className="grid place-items-center">
                    <span className='font-black text-zinc-700/70 mt-2 tracking-wider'>
                        LUNES | MIÉRCOLES | VIERNES
                    </span>
                    <span className='text-center font-bold text-zinc-800 mt-1 leading-5 tracking-wide'>
                        Aprovecha tus compras
                        <br />
                        con Billetera Santa Fe
                    </span>
                </div>
            </div>
            <div className='grid place-items-center'>
                <BiSolidCreditCardAlt className='block text-[6rem] text-rose-400/90' />
                <span className='text-center font-bold text-zinc-800 leading-5 tracking-wide'>
                    Disfruta hasta 3
                    <br />
                    cuotas sin interés
                    <br />
                    con tus tarjetas
                </span>
            </div>
            <div className='grid place-items-center'>
                <BiSolidBabyCarriage className='block text-[6rem] text-rose-400/90' />
                <span className='text-center font-bold text-zinc-800 leading-5 tracking-wide'>
                    Envíos grátis
                    <br />
                    con compras
                    <br />
                    mayores a $5000
                </span>
            </div>
        </section>
    )
};

export default BenefitsSection;

/* envíos grátis con compras mayores a 500000    */