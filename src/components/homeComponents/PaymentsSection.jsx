import { BiSolidCreditCardAlt } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const PaymentsSection = () => {
    return (
        <section className='flex flex-col md:flex-row bg-white gap-7 md:gap-20 items-center md:items-start justify-between
        w-full py-8 px-10 overflow-x-hidden'>
            <div className='flex flex-col items-center justify-center md:justify-start font-Raleway w-52'>
                <BiSolidCreditCardAlt className='block text-7xl text-red-500/50 drop-shadow' />
                <span className='text-center text-sm tracking-wide leading-[1.3rem] drop-shadow'>
                    <span className='font-black text-sm drop-shadow-none mb-1'>
                        Variedad de medios de pago disponibles
                    </span>
                    Crédito, débito, transferencias, Mercado Pago, etc.
                </span>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-start font-Raleway w-52'>
                <FaMapMarkerAlt className='block text-[3.3rem] text-red-500/50 drop-shadow' />
                <span className='text-center text-sm tracking-wide leading-[1.3rem] drop-shadow'>
                    <span className='font-black text-sm drop-shadow-none mb-1 mt-2'>
                        Envíos a Riosario y Gran Rosario
                    </span>
                    Consulta por nuestra cobertura de envíos
                </span>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-start font-Raleway w-52'>
                <FaMoneyBill1Wave className='block text-[4.15rem] text-red-500/50 drop-shadow' />
                <span className='text-center text-sm font-black tracking-wide'>
                    Descuentos en efectivo
                </span>
            </div>
        </section>
    )
};

export default PaymentsSection;
