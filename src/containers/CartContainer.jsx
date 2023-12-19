import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../contexts/shopContext';
import { BiSolidShare } from "react-icons/bi";
import CartItem from '../components/cartComponents/CartItem';
import CartModalForm from '../components/cartComponents/CartModalForm';
import logo from '../assets/logo-header.svg';
import cartCheck from '../assets/cart-check.svg';

const CartContainer = () => {
    const { products } = useContext(ShopContext)
    const [ showModal, setShowModal ] = useState(false)
    
    return (
        <main className='w-full grid place-items-start md:px-10 py-40 bg-rose-300/70 min-h-screen section-scrollbar'>
            {
                !showModal && products.length ?
                    <div className='grid place-items-center py-6 px-7 bg-rose-500/95 rounded-lg shadow-md'>
                        <div className='w-full grid grid-cols-4'>
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
                        <button
                            className='flex items-center justify-center justify-self-center
                            px-5 py-3 gap-3 mt-6 bg-[#0d3da5] rounded-lg shadow shadow-teal-teal-500/50 transition
                            ease-out duration-200 hover:shadow-teal-300/50 hover:text-teal-600 hover:bg-[#0d5aa3]
                            focus:shadow-teal-300/50 focus:text-teal-600 focus:bg-[#0d5aa3]'
                            type='button'
                            onClick={() => setShowModal(true)}
                        >
                            <div className='w-8 drop-shadow-md'>
                                <img 
                                    src={cartCheck}
                                    alt='carrito de compras tildado'
                                    className='block w-full text-teal-50'
                                />
                            </div>
                            <span className='text-teal-50 font-Raleway font-bold text-lg tracking-wider drop-shadow'>
                                Formulario de compra
                            </span>
                        </button>
                    </div>
                : showModal && products.length ?
                    <div className='w-full py-6 px-7 bg-rose-500/95 rounded-lg shadow-md'>
                        <CartModalForm />
                    </div>
                :
                    <div className='w-full grid justify-center items-center py-6 px-7 bg-teal-600/80 rounded-lg shadow-md'>
                        <Link
                            to='/'
                            className='flex flex-col items-center justify-center gap-6 md:px-10'
                        >
                        <h1 className='text-teal-50 text-xl tracking-wider font-bold font-Raleway grid place-items-center'>
                            <span className='drop-shadow-md'>
                                Aún no hay productos
                            </span>
                            <div className='flex items-center justify-center gap-2'>
                                <span className='drop-shadow-d'>
                                    en el carrito
                                </span>
                                <BiSolidShare className='block text-red-300 text-3xl drop-shadow' />
                            </div>
                        </h1>
                        <div className='w-52'>
                            <img
                                src={logo}
                                alt='logo tienda Ma'
                                className='empty-cart-logo block w-full'
                            />
                        </div>
                        </Link>
                    </div>
            }
        </main>
    )
};

export default CartContainer;
