import { ShopContext } from '../contexts/shopContext';
import {
    useContext,
    useState
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import ItemSuggestions from '../components/itemComponents/ItemSuggestions';
import ItemCount from './itemComponents/ItemCount';
import numberFormater from '../utilities/numberFormater';

const ItemDetailCard = ({
    products,
    product
}) => {
    const { addProduct } = useContext(ShopContext)
    const [ itemDetailQuantity, setItemDetailQuantity ] = useState(1)
    const [ selectedSize, setSelectedSize ] = useState('')
    const [ selectedAdultSize, setSelectedAdultSize ] = useState('')
    const prodId = Math.floor(Math.random() * 100) * Date.now()

    const confirmPurchase = (quantity) => {
        toast.success(
            'Producto agregado',
            {
                duration: 5000,
                position: 'bottom-center',
            }
        ),
        product.sizes ?
            (addProduct({ ...product, quantity, selectedSize, prodId }),
            setItemDetailQuantity(quantity),
            setTimeout(() => {
                setSelectedSize('')
                setItemDetailQuantity(1)
            }, 150))
        :
        product.sizes ?
            (addProduct({ ...product, quantity, selectedAdultSize, prodId }),
            setItemDetailQuantity(quantity),
            setTimeout(() => {
                setSelectedAdultSize('')
                setItemDetailQuantity(1)
            }, 150))
        :
            addProduct({ ...product, quantity, prodId })
            setItemDetailQuantity(quantity)
            setTimeout(() => {
                setItemDetailQuantity(1)
            }, 150)
    }

    return (
        <>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row items-start justify-between mt-2 py-4 px-7 bg-white rounded-md
            shadow-sm drop-shadow-sm w-full min-h-[29rem] sm:min-h-fit'>
                <div className='flex flex-col'>
                    <h1 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-base'>
                        {product.brand} {product.name}
                    </h1>
                    <div className='flex flex-col md:flex-row items-start gap-2 md:gap-4'>
                        <div className='w-40 mt-[.1rem] md:mt-2 drop-shadow'>
                            <img
                                src={product.img}
                                alt={product.name}
                                className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                            />
                        </div>
                        <p className='mt-[.1rem] md:mt-[.3rem] w-full sm:w-[21rem] lg:w-[35rem] leading-[1.15rem]
                        md:leading-5 font-bold text-zinc-800/[96] text-sm md:text-[.9rem] drop-shadow-sm tracking-tight'>
                            {product.desc}
                        </p>
                    </div>
                    <div className='flex flex-col mt-[.2rem] md:mt-[.45rem]'>
                        <span className='text-sm md:text-[.9rem] font-bold'>
                            Precio:
                        </span>
                        <span className='font-black text-[.825rem]'>
                            {numberFormater(product.price)}
                        </span>
                    </div>
                    {
                        product.sizes ?
                            <div className='flex flex-col mt-[.2rem]'>
                                <div>
                                    <span className='text-sm md:text-[.9rem] font-bold'>
                                        Talles:
                                    </span>
                                    <fieldset className='flex items-start gap-6 font-black text-sm'>
                                        <label htmlFor='M' className='grid place-items-center cursor-pointer drop-shadow'>
                                            M
                                            <input
                                                type='radio' id='M' name='size' value='M'
                                                onChange={e => setSelectedSize(e.target.value)}
                                                className='cursor-pointer'
                                            />
                                        </label>
                                        <label htmlFor='G' className='grid place-items-center cursor-pointer drop-shadow'>
                                            G
                                            <input
                                                type='radio' id='G' name='size' value='G'
                                                onChange={e => setSelectedSize(e.target.value)}
                                                className='cursor-pointer'
                                            />
                                        </label>
                                        <label htmlFor='XG' className='grid place-items-center cursor-pointer drop-shadow'>
                                            XG
                                            <input
                                                type='radio' id='XG' name='size' value='XG'
                                                onChange={e => setSelectedSize(e.target.value)}
                                                className='cursor-pointer'
                                            />
                                        </label>
                                        <label htmlFor='XXG' className='grid place-items-center cursor-pointer drop-shadow'>
                                            XXG
                                            <input
                                                type='radio' id='XXG' name='size' value='XXG'
                                                onChange={e => setSelectedSize(e.target.value)}
                                                className='cursor-pointer'
                                            />
                                        </label>
                                    </fieldset>
                                </div>
                            </div>
                        :
                            product.adultSizes ?
                            <div className='flex flex-col mt-[.2rem]'>
                                <div>
                                    <span className='text-sm md:text-[.9rem] font-bold'>
                                        Talles:
                                    </span>
                                    <fieldset className='flex items-start gap-6 font-black text-sm'>
                                        <label htmlFor='G' className='grid place-items-center cursor-pointer drop-shadow'>
                                            G
                                            <input
                                                type='radio' id='G' name='adultSize' value='G'
                                                onChange={e => setSelectedAdultSize(e.target.value)}
                                                className='cursor-pointer'
                                            />
                                        </label>
                                        <label htmlFor='XG' className='grid place-items-center cursor-pointer drop-shadow'>
                                            XG
                                            <input
                                                type='radio' id='XG' name='adultSize' value='XG'
                                                onChange={e => setSelectedAdultSize(e.target.value)}
                                                className='cursor-pointer'
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
                    (product.sizes && selectedSize === '') || (product.adultSizes && selectedAdultSize === '') ?
                        <span className='self-start md:self-end font-black text-[.85rem] text-center drop-shadow-sm
                        tracking-wide mt-5 md:mt-0'>
                            Elige talle para añadir el producto 
                        </span>
                    : itemDetailQuantity ?
                        <ItemCount
                            onAdd={confirmPurchase}
                            initial={1}
                            quantity={product.quantity}
                        />
                    : (!product.sizes || !product.adultSizes) && itemDetailQuantity ?
                        <ItemCount
                            onAdd={confirmPurchase}
                            initial={1}
                            quantity={product.quantity}
                        />
                    :
                        null
                }
            </div>
            <ItemSuggestions
                productDetail={product}
                products={products}
            />
        </div>
        <Toaster
            richColors
            toastOptions={{
                unstyled: false,
                classNames: {
                    toast: 'h-24 mb-60',
                    title: 'text-lg',
                },
            }}
        />
        </>
    )
};

export default ItemDetailCard;
