import { BiSolidCreditCardAlt, BiCalendarHeart, BiSolidBabyCarriage } from 'react-icons/bi';
import billeteraLogo from '../../assets/billetera-santafe.svg';

const BenefitsSection = () => {
    return (
        <section
            id='benefits-section'
            className='flex flex-col md:flex-row justify-center md:items-start md:justify-between my-10 w-full md:px-64'
        >
            <div className='grid place-items-center'>
                <BiSolidCreditCardAlt className='block text-[6rem] text-rose-400/90' />
                <span className='text-center font-bold leading-5 tracking-wide'>
                    <span className='text-teal-500 drop-shadow-sm'>
                        Hasta 3 cuotas
                    </span>
                    sin interés
                    <br />
                    con tus tarjetas
                </span>
            </div>
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
                    <span className='font-black text-teal-500 mt-2 tracking-wider drop-shadow-sm'>
                        LUNES | MIÉRCOLES | VIERNES
                    </span>
                    <span className='text-center font-bold mt-1 leading-5 tracking-wide'>
                        Aprovecha tus compras
                        <br />
                        con Billetera Santa Fe
                    </span>
                </div>
            </div>
            <div className='grid place-items-center'>
                <BiSolidBabyCarriage className='block text-[6rem] text-rose-400/90' />
                <span className='text-center font-bold leading-5 tracking-wide'>
                    <span className='text-teal-500 drop-shadow-sm'>
                        Envíos grátis
                    </span>
                    con compras
                    <br />
                    mayores a $5000
                </span>
            </div>
        </section>
    )
};

export default BenefitsSection;
