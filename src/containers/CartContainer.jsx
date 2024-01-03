import {
    useState,
    useContext
} from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../contexts/shopContext';
import { BiSolidShare } from "react-icons/bi";
import CartItem from '../components/cartComponents/CartItem';
import CartModalForm from '../components/cartComponents/CartModalForm';
import logo from '../assets/logo-header.svg';
import cartCheck from '../assets/cart-check.svg';
import numberFormater from '../utilities/numberFormater';

const CartContainer = () => {
    const { products, calculateCartTotal } = useContext(ShopContext)
    const [ showForm, setShowForm ] = useState(false)
    console.log(products);
    
    return (
        <main className='w-full grid place-items-start py-28 min-h-[100svh]'>
            <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm mt-2 justify-self-center'>
                {
                    !showForm && products.length ?
                        'Carrito'
                    : showForm && products.length ?
                        'Formulario de Compra'
                    : 'Carrito'
                }
            </h1>
            {
                !showForm && products.length ?
                    <div className='w-full grid place-items-center px-4 md:px-10 my-4 py-6 bg-white/70 shadow-sm'>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.35rem]'>
                            {
                                products.map(product => {
                                    return (
                                        <CartItem
                                            key={product.id}
                                            item={product}
                                        />
                                )})
                            }
                        </div>
                        <span className='font-black text-[.89rem] mt-5'>
                            Total: {numberFormater(calculateCartTotal())}
                        </span>
                        <button
                            className='flex items-center justify-center justify-self-center px-4 py-2 gap-2 mt-4
                            rounded-lg shadow-sm bg-zinc-900 text-white transition-colors ease-in-out
                            hover:bg-zinc-700 focus:bg-zinc-700'
                            type='button'
                            onClick={() => setShowForm(true)}
                        >
                            <div className='w-[1.2rem]'>
                                <img 
                                    src={cartCheck}
                                    alt='carrito de compras tildado'
                                    className='block w-full'
                                />
                            </div>
                            <span className='font-Raleway text-[.9rem] tracking-wider font-bold'>
                                Formulario de compra
                            </span>
                        </button>
                    </div>
                : showForm && products.length ?
                    <div className='w-full grid place-items-center my-4 py-6 px-7 bg-rose-500/95 rounded-lg shadow-md'>
                        <CartModalForm
                            showForm={showForm}
                            setShowForm={setShowForm}
                        />
                    </div>
                :
                    <div className='w-fit grid place-items-center justify-self-center bg-white/70 rounded-lg shadow-sm -mt-5'>
                        <Link
                            to='/'
                            className='flex flex-col items-center justify-center gap-6 px-10 md:px-16 py-10'
                        >
                            <h1 className='font-bold text-lg tracking-wide font-Raleway grid place-items-center leading-6 drop-shadow-sm'>
                                <span>
                                    Aún no hay productos
                                </span>
                                <div className='flex items-center justify-center gap-2'>
                                    <span>
                                        en el carrito
                                    </span>
                                    <BiSolidShare className='block text-red-300 text-[1.75rem]' />
                                </div>
                            </h1>
                            <div className='w-[7.5rem]'>
                                <img
                                    src={logo}
                                    alt='logo tienda Ma'
                                    className='block w-full'
                                />
                            </div>
                        </Link>
                    </div>
            }
        </main>
    )
};

export default CartContainer;
