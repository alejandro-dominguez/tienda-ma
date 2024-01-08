import { ShopContext } from '../contexts/shopContext';
import {
    useContext,
    useState
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import ItemCount from './itemComponents/ItemCount';
import numberFormater from '../utilities/numberFormater'

const ItemDetailCard = ({ product }) => {
    const { addProduct } = useContext(ShopContext)
    const [ itemDetailQuantity, setItemDetailQuantity ] = useState(1)
    const [ selectedSize, setSelectedSize ] = useState('')

    const confirmPurchase = (
        quantity,
        ) => {
        toast.success(
            'Producto agregado',
            {
                duration: 4000,
                position: 'bottom-center',
            }
        ),
        product.sizes ?
            (addProduct({ ...product, quantity, selectedSize }),
            setItemDetailQuantity(quantity),
            setTimeout(() => {
                setSelectedSize('')
                setItemDetailQuantity(1)
            }, 150))
        :
            addProduct({ ...product, quantity})
            setItemDetailQuantity(quantity)
            setTimeout(() => {
                setSelectedSize('')
                setItemDetailQuantity(1)
            }, 150);
    }

    return (
        <>
        <div className='flex flex-col md:flex-row items-start justify-between mt-2 pt-6 pb-7 px-7
        bg-white/80 rounded-lg shadow-sm w-full'>
            <div className='flex flex-col'>
                <h1 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-base md:text-lg'>
                    {product.brand} {product.name}
                </h1>
                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-5 mt-1'>
                    <div className='w-20 md:w-28 mt-[.1rem] md:mt-2 drop-shadow'>
                        <img
                            src={product.img}
                            alt={product.name}
                            className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                        />
                    </div>
                    <p className='mt-[.1rem] md:mt-[.3rem] w-full sm:w-[21rem] lg:w-[35rem] leading-[1.15rem] md:leading-5 font-bold
                    text-zinc-800/[96] text-sm md:text-[.9rem] drop-shadow-sm tracking-tight'>
                        {product.desc}
                    </p>
                </div>
                <div className='flex flex-col mt-[.2rem] md:mt-2'>
                    <span className='text-sm md:text-[.95rem] font-bold'>
                        Precio:
                    </span>
                    <span className='font-black text-sm md:text-[.9rem]'>
                        {numberFormater(product.price)}
                    </span>
                </div>
                {
                    product.sizes ?
                        <div className='flex flex-col mt-[.2rem] md:mt-2'>
                            <div>
                                <span className='text-sm md:text-[.95rem] font-bold'>
                                    Talles:
                                </span>
                                <fieldset className='flex items-start gap-6 font-black text-sm md:text-[.9rem]'>
                                    <label htmlFor='M' className='grid place-items-center cursor-pointer'>
                                        M
                                        <input
                                            type='radio' id='M' name='size' value='M'
                                            onChange={e => setSelectedSize(e.target.value)}
                                        />
                                    </label>
                                    <label htmlFor='G' className='grid place-items-center cursor-pointer'>
                                        G
                                        <input
                                            type='radio' id='G' name='size' value='G'
                                            onChange={e => setSelectedSize(e.target.value)}
                                        />
                                    </label>
                                    <label htmlFor='XG' className='grid place-items-center cursor-pointer'>
                                        XG
                                        <input
                                            type='radio' id='XG' name='size' value='XG'
                                            onChange={e => setSelectedSize(e.target.value)}
                                        />
                                    </label>
                                    <label htmlFor='XXG' className='grid place-items-center cursor-pointer'>
                                        XXG
                                        <input
                                            type='radio' id='XXG' name='size' value='XXG'
                                            onChange={e => setSelectedSize(e.target.value)}
                                        />
                                    </label>
                                </fieldset>
                            </div>
                        </div>
                    :
                        null
                }
            </div>
            {   
                product.sizes && selectedSize === '' ?
                    <span className='self-start md:self-end font-black text-sm text-center leading-5 drop-shadow-sm tracking-wide
                    mt-5 md:mt-0'>
                        Elige talle para añadir el producto 
                    </span>
                : itemDetailQuantity ?
                    <ItemCount
                        onAdd={confirmPurchase}
                        initial={1}
                        quantity={product.quantity}
                    />
                : !product.sizes && itemDetailQuantity ?
                    <ItemCount
                        onAdd={confirmPurchase}
                        initial={1}
                        quantity={product.quantity}
                    />
                :
                    null
            }
        </div>
        <Toaster
                richColors
                toastOptions={{
                className: 'text-center',
            }}
        />
        </>
    )
};

export default ItemDetailCard;
