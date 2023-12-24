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
    const [ showForm, setShowForm ] = useState(false)
    
    return (
        <main className='w-full grid place-items-start md:px-10 py-32 bg-rose-300/70 min-h-screen section-scrollbar'>
            <h1 className='items-section-h1-shadow font-bold font-Raleway text-white md:text-4xl drop-shadow justify-self-center'>
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
                    <div className='w-full grid place-items-center my-4 py-6 px-7 bg-rose-500/95 rounded-lg shadow-md'>
                        <div className='w-full grid grid-cols-3 gap-[1.35rem]'>
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
                            className='flex items-center justify-center justify-self-center px-6 py-3 gap-3 mt-6
                            bg-[#004eb4] rounded-md shadow shadow-teal-950/80 transition-all ease-in-out
                            duration-[225ms] hover:shadow-teal-400/40 hover:bg-[#01268b] hover:shadow
                            focus:shadow-teal-400/40 focus:bg-[#01268b] focus:shadow'
                            type='button'
                            onClick={() => setShowForm(true)}
                        >
                            <div className='w-7 drop-shadow-md mb-1'>
                                <img 
                                    src={cartCheck}
                                    alt='carrito de compras tildado'
                                    className='block w-full'
                                />
                            </div>
                            <span className='text-white font-Raleway text-[1.1rem] tracking-wider drop-shadow-md'>
                                Formulario de compra
                            </span>
                        </button>
                    </div>
                : showForm && products.length ?
                    <div className='w-full grid place-items-center my-4 py-6 px-7 bg-rose-500/95 rounded-lg shadow-md'>
                        <CartModalForm showForm={showForm} setShowForm={setShowForm} />
                    </div>
                :
                    <div className='w-full grid justify-center items-center my-4 py-10 px-7 bg-teal-600/80 rounded-lg shadow-md'>
                        <Link
                            to='/'
                            className='flex flex-col items-center justify-center gap-6 md:px-10'
                        >
                        <h1 className='text-white text-lg tracking-wide font-Raleway grid place-items-center leading-6'>
                            <span className='drop-shadow-md'>
                                Aún no hay productos
                            </span>
                            <div className='flex items-center justify-center gap-2'>
                                <span className='drop-shadow-md'>
                                    en el carrito
                                </span>
                                <BiSolidShare className='block text-red-300 text-3xl drop-shadow' />
                            </div>
                        </h1>
                        <div className='w-32'>
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
