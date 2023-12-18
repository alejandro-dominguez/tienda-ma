import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../contexts/shopContext';
import CartItem from '../components/cartComponents/CartItem';
import CartModalForm from '../components/cartComponents/CartModalForm';
import logo from '../assets/logo-header.svg';

const CartContainer = () => {
    const { products } = useContext(ShopContext)
    const [ showModal, setShowModal ] = useState(false)
    
    return (
        <main className='w-full grid place-items-start md:px-10 py-40 bg-rose-300/70 min-h-screen'>
            {
                !showModal && products.length ?
                    <div className='w-full py-6 px-7 bg-rose-500/95 rounded-lg shadow-md'>
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
                : showModal && products.length ?
                    <div className='w-full py-6 px-7 bg-rose-500/95 rounded-lg shadow-md'>
                        <CartModalForm />
                    </div>
                :
                    <div className='w-full grid justify-center items-center py-6 px-7 bg-rose-600 rounded-lg shadow-md'>
                        <Link
                            to='/'
                            className='flex flex-col items-center justify-center gap-6'
                        >
                        <h1 className='text-teal-50 text-xl tracking-wider font-bold font-Raleway grid place-items-center'>
                            <span>
                                Aún no hay productos
                            </span>
                            <span>
                                en el carrito.
                            </span>
                        </h1>
                        <div className='w-52'>
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
