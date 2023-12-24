import { BiSolidCreditCardAlt } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const PaymentsSection = () => {
    return (
        <section
            id='payments-section'
            className='grid grid-cols-1 md:grid-cols-3 py-10 w-full md:px-64 bg-white md:gap-20 items-center'
        >
            <div className='grid place-items-center font-Raleway'>
                <BiSolidCreditCardAlt className='block text-8xl text-red-500/50' />
                <span className='text-center text-sm tracking-wide leading-[1.3rem] drop-shadow-sm'>
                    <span className='font-black text-base drop-shadow-none mb-1 -mt-2'>
                        Variedad de medios
                        <br />
                        de pago disponibles.
                    </span>
                    Crédito, débito, transferencias,
                    <br />
                    Mercado Pago, etc.
                </span>
            </div>
            <div className='grid place-items-center font-Raleway'>
                <FaMapMarkerAlt className='block text-[4.25rem] text-red-500/50' />
                <span className='text-center text-sm tracking-wide leading-[1.3rem] drop-shadow-sm'>
                    <span className='font-black text-base drop-shadow-none mb-1 mt-2'>
                        Envíos a Riosario
                        <br />
                        y Gran Rosario.
                    </span>
                    Consulta por nuestra
                    <br />
                    cobertura de envíos.
                </span>
            </div>
            <div className='grid place-items-center font-Raleway'>
                <FaMoneyBill1Wave className='block text-[5rem] text-red-500/50' />
                <span className='text-center font-black tracking-wide'>
                    Descuentos en efectivo.
                </span>
            </div>
        </section>
    )
};

export default PaymentsSection;
