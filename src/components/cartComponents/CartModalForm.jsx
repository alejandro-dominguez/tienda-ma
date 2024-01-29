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
import { useNavigate } from 'react-router-dom';
import numberFormater from '../../utilities/numberFormater';

const CartModalForm = ({
    showForm,
    setShowForm
}) => {
    const [ order, setOrder ] = useState({
        orderFullName: '',
        orderAddress: '',
        orderPhone: '',
        orderEmail: '',
        orderNotes: '',
    })
    const [ errorOrder, setErrorOrder ] = useState('')
    const { products, emptyCart, calculateCartTotal } = useContext(ShopContext)
    const navigate = useNavigate()
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
                    clientAdress: order.orderAddress,
                    clientPhone: order.orderPhone,
                    clientEmail: order.orderEmail,
                    orderProducts: products,
                    orderTotal: orderTotalAmount,
                    orderDate: new Date().toLocaleString(),
                }
            )
            toast.success(
                'Orden enviada',
                {
                    description: 'Tu orden ya fue enviada con éxito. Nos comunicamos en la brevedad una vez confirmado el stock.',
                    duration: 5000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                emptyCart()
                setOrder(
                    {
                        orderFullName: '',
                        orderAddress: '',
                        orderPhone: '',
                        orderEmail: '',
                        orderNotes: '',
                    }
                )
                setShowForm(false)
                navigate('/')
            }, 6000)
        } catch (error) {
            setErrorOrder(error.message)
            toast.error(
                errorOrder,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            /* setTimeout(() => {
                setOrder(
                    {
                        orderFullName: '',
                        orderAddress: '',
                        orderPhone: '',
                        orderEmail: '',
                        orderNotes: '',
                    }
                )
                setShowForm(false)
            }, 4000) */
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
                            <div className='flex flex-col'>
                                <label htmlFor='orderAddress' className='text-zinc-700 flex gap-[.3rem]'>
                                    Dirección de entrega:
                                    <span className='text-rose-500 text-xl h-fit -mt-1'>
                                        *
                                    </span>
                                </label>
                                <input
                                    type='text' name='orderAddress' id='orderAddress' minLength={10} maxLength={30} required
                                    placeholder='Dirección del envío' className='contact-input'
                                    onChange={registerInputs}
                                />
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
                        className: 'text-center',
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
