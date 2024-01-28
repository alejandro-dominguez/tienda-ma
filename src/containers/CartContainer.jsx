import {
    useState,
    useContext
} from 'react';
import { ShopContext } from '../contexts/shopContext';
import CartItem from '../components/cartComponents/CartItem';
import CartModalForm from '../components/cartComponents/CartModalForm';
import NoCartItemsCard from '../components/cartComponents/NoCartItemsCard';
import cartCheck from '../assets/cart-check.svg';
import numberFormater from '../utilities/numberFormater';

const CartContainer = () => {
    const { products, calculateCartTotal } = useContext(ShopContext)
    const [ showForm, setShowForm ] = useState(false)
    
    return (
        <main className='w-full grid place-items-start py-28 min-h-[100svh]'>
            <h1 className='font-bold font-Raleway text-center px-4 leading-8 text-[1.75rem] md:text-3xl
            drop-shadow-sm mt-2 justify-self-center'>
                {
                    !showForm && products.length ?
                        'Carrito'
                    : showForm && products.length ?
                        'Formulario de Compra'
                    :
                        'Carrito'
                }
            </h1>
            {
                !showForm && products.length ?
                    <div className='w-full grid place-items-center px-4 md:px-10'>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.35rem]'>
                            {
                                products.map((product, i) => {
                                    return (
                                        <CartItem
                                            key={i}
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
                    <div className='w-full grid place-items-center'>
                        <CartModalForm
                            showForm={showForm}
                            setShowForm={setShowForm}
                        />
                    </div>
                :
                    <NoCartItemsCard />
            }
        </main>
    )
};

export default CartContainer;
