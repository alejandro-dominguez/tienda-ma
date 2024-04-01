import {
    useState,
    useContext,
} from 'react';
import { ShopContext } from '../contexts/shopContext';
import CartItem from '../components/cartComponents/CartItem';
import ShowCartFormBtn from '../components/cartComponents/ShowCartFormBtn';
import DeleteCartOrderBtn from '../components/cartComponents/DeleteCartOrderBtn';
import CartModalForm from '../components/cartComponents/CartModalForm';
import NoCartItemsCard from '../components/cartComponents/NoCartItemsCard';
import numberFormater from '../utilities/numberFormater';

const CartContainer = () => {
    const { products, calculateCartTotal, calculateCartQuantity } = useContext(ShopContext)
    const [ showForm, setShowForm ] = useState(false)

    return (
        <main className='w-full grid place-items-start py-[7.5rem] min-h-[100svh]'>
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
                    <div className='w-full grid place-items-center px-4 md:px-10 mt-4'>
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
                        <div className='flex flex-col justify-start'>
                            <span className='text-left font-black text-[.89rem] mt-5 leading-5'>
                                Cantidad total
                                <br />
                                de productos: {calculateCartQuantity()}
                            </span>
                            <span className='text-left font-black text-[.89rem] mt-2'>
                                Total: {numberFormater(calculateCartTotal())}
                            </span>
                        </div>
                        <div className='flex flex-col gap-3 mt-2'>
                            <ShowCartFormBtn setShowForm={setShowForm} />
                            <DeleteCartOrderBtn />
                        </div>
                    </div>
                : showForm && products.length ?
                    <div className='w-full grid place-items-center'>
                        <CartModalForm
                            cartProducts={products}
                            calculateCartTotal={calculateCartTotal}
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
