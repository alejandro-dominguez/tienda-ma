import {
    useContext,
    useState
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import { ShopContext } from '../contexts/shopContext';
import ItemSuggestions from '../components/itemComponents/ItemSuggestions';
import ItemDetailInfo from './itemComponents/ItemDetailInfo';
import ItemBabySizes from './itemComponents/ItemBabySizes';
import ItemAdultSizes from './itemComponents/ItemAdultSizes.jsx';
import ItemCount from './itemComponents/ItemCount';

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
        product.adultSizes ?
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
            <div className='flex flex-col md:flex-row items-start justify-between mt-2 py-4 px-7 bg-white rounded-md
            shadow-sm drop-shadow-sm w-full min-h-[29rem] sm:min-h-fit'>
                <div className='flex flex-col'>
                    <ItemDetailInfo product={product} />
                    {
                        product.sizes ?
                            <ItemBabySizes setSelectedSize={setSelectedSize} />
                        :
                            product.adultSizes ?
                                <ItemAdultSizes setSelectedAdultSize={setSelectedAdultSize} />
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
                            confirmPurchase={confirmPurchase}
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
