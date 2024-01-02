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
                <h1 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-lg'>
                    {product.brand} {product.name}
                </h1>
                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-5 mt-1'>
                    <div className='w-32 mt-2 drop-shadow'>
                        <img
                            src={product.img}
                            alt={product.name}
                            className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                        />
                    </div>
                    <p className='mt-[.3rem] w-full md:w-[57%] lg:w-[45%] leading-5 font-bold text-zinc-800/[96] text-[.9rem]
                    drop-shadow-sm tracking-tight'>
                        {product.desc}
                    </p>
                </div>
                <div className='flex flex-col mt-2'>
                    <span className='text-[.95rem] font-bold'>
                        precio:
                    </span>
                    <span className='font-black text-sm md:text-[.9rem]'>
                        {numberFormater(product.price)}
                    </span>
                </div>
            </div>
            {itemDetailQuantity ?
                <ItemCount onAdd={confirmPurchase} initial={1} quantity={product.quantity} />
            : null}
        </div>
    )
};

export default ItemDetailCard;
