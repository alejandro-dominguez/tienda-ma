import {
    useContext,
    useState
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import {
    addDoc,
    collection,
} from 'firebase/firestore';
import { ShopContext } from '../../contexts/shopContext';
import { BiSolidShare } from 'react-icons/bi';  
import { db } from '../../firebase/config';
import numberFormater from '../../utilities/numberFormater';

const CartModalForm = ({
    showForm,
    setShowForm
}) => {
    const [ order, setOrder ] = useState({
        orderFullName: '',
        orderAddressStreet: '',
        orderAddressNumber: '',
        orderAddressFloor: '',
        orderAddressDoor: '',
        orderPhone: '',
        orderEmail: '',
        orderNotes: '',
    })
    const [ errorOrder, setErrorOrder ] = useState('')
    const { products, emptyCart, calculateCartTotal } = useContext(ShopContext)
    const orderTotalAmount = numberFormater(calculateCartTotal())

    const registerInputs = ({ target: {name, value} }) => {
        setOrder({
            ...order,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'orders'),
                {
                    clientFullName: order.orderFullName,
                    clientAdressStreet: order.orderAddressStreet,
                    clientAdressNumber: order.orderAddressNumber,
                    clientAdressFloor: order.orderAddressFloor,
                    clientAdressDoor: order.orderAddressDoor,
                    clientPhone: order.orderPhone,
                    clientEmail: order.orderEmail,
                    orderProducts: products,
                    orderTotal: orderTotalAmount,
                    orderDate: new Date().toLocaleString(),
                    delivered: false,
                    process: false
                }
            )
            toast.success(
                'Orden enviada.',
                {
                    description: 'Tu orden fue enviada con éxito. Nos comunicaremos en la brevedad una vez confirmado el stock.',
                    duration: 10000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                emptyCart()
                setShowForm(false)
            }, 11000)
        } catch (error) {
            setErrorOrder(error.message)
            toast.error(
                errorOrder,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                setShowForm(false)
            }, 4000)
        } finally {
            e.target.reset()
        }
    }

    return (
        <>
        {
            showForm && products.length ?
                <>
                <form
                    className='md:w-[62.25%] mt-4 pt-3 pb-6 px-6 sm:px-10 shadow-sm drop-shadow-sm bg-white'
                    onSubmit={handleSubmit}
                    autoComplete='off'
                >
                    <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                    <div className='flex flex-col xl:flex-row items-start md:gap-4 xl:gap-12 mt-3'>
                        <div className='grid md:items-center md:justify-start gap-3 w-full'>
                            <div className='flex flex-col'>
                                <label htmlFor='orderFullName' className='text-zinc-700 flex gap-[.3rem]'>
                                    Nombre completo:
                                    <span className='text-rose-500 text-xl h-fit -mt-1'>
                                        *
                                    </span>
                                </label>
                                <input
                                    type='text' name='orderFullName' id='orderFullName' minLength={10} maxLength={30} required
                                    placeholder='Tu nombre aquí' className='contact-input'
                                    onChange={registerInputs}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='orderPhone' className='text-zinc-700 flex gap-[.3rem]'>
                                    Teléfono:
                                    <span className='text-rose-500 text-xl h-fit -mt-1'>
                                        *
                                    </span>
                                </label>
                                <input
                                    type='tel' name='orderPhone' id='orderPhone' required placeholder='0101-0101-01'
                                    className='contact-input'
                                    onChange={registerInputs}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='orderEmail' className='text-zinc-700'>
                                    Email:
                                </label>
                                <input
                                    type='email' name='orderEmail' id='orderEmail' placeholder='Tu email aquí'
                                    className='contact-input'
                                    onChange={registerInputs}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-3 md:mt-0'>
                            <div className='flex gap-6'>
                                <div className='flex flex-col'>
                                    <label htmlFor='orderAddressStreet' className='text-zinc-700 flex gap-[.3rem]'>
                                        Dirección de entrega:
                                        <span className='text-rose-500 text-xl h-fit -mt-1'>
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type='text' name='orderAddressStreet' id='orderAddressStreet' minLength={10} maxLength={30}
                                        required placeholder='Calle' className='contact-input w-52'
                                        onChange={registerInputs}
                                    />
                                </div>
                                <div className='flex flex-col'>
                                        <label htmlFor='orderAddressStreet' className='text-zinc-700 flex gap-[.3rem]'>
                                            Número:
                                            <span className='text-rose-500 text-xl h-fit -mt-1'>
                                                *
                                            </span>
                                        </label>
                                    <input
                                        type='number' name='orderAddressNumber' id='orderAddressNumber'
                                        required placeholder='1010' className='contact-input w-20' min={1}
                                        onChange={registerInputs}
                                    />
                                </div>
                            </div>
                            <div className='flex mt-3 gap-6' >
                                <div className='flex flex-col'>
                                    <label htmlFor='orderAddressFloor' className='text-zinc-700'>
                                        Piso
                                    </label>
                                    <input
                                        type='number' name='orderAddressFloor' id='orderAddressFloor' min={0}
                                        placeholder='Piso' className='contact-input w-20'
                                        onChange={registerInputs}
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='orderAddressDoor' className='text-zinc-700'>
                                        Dpto:
                                    </label>
                                    <input
                                        type='text' name='orderAddressDoor' id='orderAddressDoor' minLength={1} maxLength={5}
                                        placeholder='Dpto.' className='contact-input w-20'
                                        onChange={registerInputs}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col mt-3'>
                                <label htmlFor='orderNotes' className='text-zinc-700'>
                                    Notas para la entrega:
                                </label>
                                <textarea
                                    name='orderNotes' id='orderNotes' cols='30' rows='10'
                                    placeholder='Deja tus notas' className='cart-textarea'
                                    onChange={registerInputs}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <small className='block font-bold tracking-wider'>
                            Costo de envío a convenir *
                        </small>
                        <button
                            type='button'
                            className='grid place-items-center drop-shadow-sm'
                            onClick={() => setShowForm(false)}
                        >
                            <BiSolidShare className='block text-red-300 text-2xl' />
                            <small className='block font font-Raleway font-bold tracking-wide -mt-1'>
                                Volver    
                            </small>
                        </button>
                    </div>
                    <button
                        type='submit'
                        className='grid place-items-center py-[.625rem] w-full mt-3 bg-zinc-900 rounded-md transition-colors
                        ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
                    >
                        <span className='text-white tracking-wider font-bold text-[1.05rem]'>
                            Enviar orden
                        </span>
                    </button>
                </form>
                    <Toaster
                        richColors
                        toastOptions={{
                            unstyled: false,
                            classNames: {
                                toast: 'h-40 mb-52',
                                title: 'text-xl',
                                description: 'text-lg',
                            },
                        }}
                    />
                </>
            : 
                null
        }
        </>
    )
};

export default CartModalForm;
