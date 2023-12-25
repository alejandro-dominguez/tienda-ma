import { BiSolidCreditCardAlt, BiSolidBank } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const PaymentsSection = () => {
    return (
        <section
            id='payments-section'
            className='flex flex-col md:flex-row bg-white md:gap-20 items-center justify-between w-full py-10 px-10 overflow-x-hidden'
        >
            <div className='grid place-items-center font-Raleway'>
                <div className='flex items-end gap-6'>
                    <BiSolidBank className='block text-7xl text-red-500/50' />
                    <BiSolidCreditCardAlt className='block text-7xl text-red-500/50 -mb-1' />
                </div>
                <span className='text-center text-sm tracking-wide leading-[1.3rem] drop-shadow'>
                    <span className='font-black text-sm drop-shadow-none mb-1'>
                        Variedad de medios de pago disponibles
                    </span>
                    Crédito, débito, transferencias, Mercado Pago, etc.
                </span>
            </div>
            <div className='grid place-items-center font-Raleway'>
                <FaMapMarkerAlt className='block text-[3.5rem] text-red-500/50' />
                <span className='text-center text-sm tracking-wide leading-[1.3rem] drop-shadow'>
                    <span className='font-black text-sm drop-shadow-none mb-1 mt-2'>
                        Envíos a Riosario y Gran Rosario
                    </span>
                    Consulta por nuestra cobertura de envíos
                </span>
            </div>
            <div className='grid place-items-center font-Raleway'>
                <FaMoneyBill1Wave className='block text-[4rem] text-red-500/50' />
                <span className='text-center text-sm font-black tracking-wide'>
                    Descuentos en efectivo
                </span>
            </div>
        </section>
    )
};

export default PaymentsSection;
