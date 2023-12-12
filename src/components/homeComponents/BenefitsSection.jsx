import { BiSolidCreditCardAlt, BiCalendarStar } from 'react-icons/bi';

const BenefitsSection = () => {
    return (
        <section
            id='benefits-section'
            className='flex flex-col justify-center items-center md:justify-between'
        >
            <div className='grid place-items-center'>
                <div className='flex justify-between items-center md:gap-6'>
                    <BiSolidCreditCardAlt className='block text-[10rem] text-rose-400' />
                    <BiCalendarStar className='block text-[8.5rem] text-rose-400' />
                </div>
                <span className='text-center font-bold text-zinc-700'>
                    <span className='font-black text-zinc-700/70'>
                        LUNES | MIÉRCOLES | VIERNES
                    </span>
                    <br />
                    Aprovecha tus compras
                    <br />
                    con Billetera Santa Fe
                </span>
            </div>
        </section>
    )
};

export default BenefitsSection;
