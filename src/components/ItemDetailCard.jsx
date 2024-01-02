import { ShopContext } from '../contexts/shopContext';
import {
    useContext,
    useState
} from 'react';
import ItemCount from './itemComponents/ItemCount';
import numberFormater from '../utilities/numberFormater'

const ItemDetailCard = ({ product }) => {
    const { addProduct } = useContext(ShopContext)
    const [itemDetailQuantity, setItemDetailQuantity] = useState(1)

    const confirmPurchase = (quantity) => {
        addProduct({ ...product, quantity })
        setItemDetailQuantity(quantity)
    }

    return (
        <div className='flex flex-col md:flex-row items-start justify-between mt-2 pt-6 pb-7 px-7
        bg-white/80 rounded-lg shadow-sm w-full'>
            <div className='flex flex-col'>
                <h1 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-base md:text-lg'>
                    {product.brand} {product.name}
                </h1>
                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-5 mt-1'>
                    <div className='w-20 md:w-32 mt-[.1rem] md:mt-2 drop-shadow'>
                        <img
                            src={product.img}
                            alt={product.name}
                            className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                        />
                    </div>
                    <p className='mt-[.1rem] md:mt-[.3rem] w-full sm:w-[57%] leading-[1.15rem] md:leading-5 font-bold
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
                                    <label for='M' className='grid place-items-center'>
                                        M
                                        <input type='radio' id='M' name='talle' value='M' />
                                    </label>
                                    <label for='G' className='grid place-items-center'>
                                        G
                                        <input type='radio' id='G' name='talle' value='G' />
                                    </label>
                                    <label for='XG' className='grid place-items-center'>
                                        XG
                                        <input type='radio' id='XG' name='talle' value='XG' />
                                    </label>
                                    <label for='XXG' className='grid place-items-center'>
                                        XXG
                                        <input type='radio' id='XXG' name='talle' value='XXG' />
                                    </label>
                                </fieldset>
                            </div>
                        </div>
                    :
                        null
                }
            </div>
            {itemDetailQuantity ?
                <ItemCount onAdd={confirmPurchase} initial={1} quantity={product.quantity} />
            : null}
        </div>
    )
};

export default ItemDetailCard;
