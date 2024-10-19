import {
    useContext,
    useState,
    useEffect
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import { ShopContext } from '../contexts/shopContext';
import ItemSuggestions from '../components/itemComponents/ItemSuggestions';
import ItemDetailInfo from './itemComponents/ItemDetailInfo';
import ItemBabySizes from './itemComponents/ItemBabySizes';
import ItemAdultSizes from './itemComponents/ItemAdultSizes';
import ItemCount from './itemComponents/ItemCount';

const ItemDetailCard = ({
    products,
    prod
}) => {
    const product = prod[0]
    const { addProduct } = useContext(ShopContext)
    const [ itemDetailQuantity, setItemDetailQuantity ] = useState(1)
    const [ selectedSize, setSelectedSize ] = useState('')
    const [ selectedAdultSize, setSelectedAdultSize ] = useState('')
    const [ successfulPurchase, setSuccessfulPurchase ] = useState(false)
    const prodId = Math.floor(Math.random() * 100) * Date.now()

    const confirmPurchase = (quantity) => {
        toast.success(
            'Producto agregado',
            {
                duration: 5000,
                position: 'bottom-center',
            }
        )
        product.sizes ?
            (
                addProduct({ ...product, quantity, selectedSize, prodId }),
                setItemDetailQuantity(quantity),
                setSuccessfulPurchase(true)
            )
        : product.adultSizes ?
            (
                addProduct({ ...product, quantity, selectedAdultSize, prodId }),
                setItemDetailQuantity(quantity),
                setSuccessfulPurchase(true)
            )
        :
            addProduct({ ...product, quantity, prodId })
            setItemDetailQuantity(quantity)
            setSuccessfulPurchase(true)
    }

    useEffect(() => {
        successfulPurchase && product.sizes ?
            (
                setSelectedSize(''),
                setItemDetailQuantity(1)
            )
        : product.adultSizes ?
            (
                setSelectedAdultSize(''),
                setItemDetailQuantity(1)
            )
        :
            setItemDetailQuantity(1)
    }, [successfulPurchase])

    return (
        <>
        {
            product.stock ?
                <>
                <div className='flex flex-col md:flex-row items-start justify-between mt-2 py-4 px-7 bg-white rounded-md
                shadow-sm drop-shadow-sm w-full min-h-[29rem] sm:min-h-fit relative'>
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
                        :
                            <ItemCount
                                confirmPurchase={confirmPurchase}
                                initial={itemDetailQuantity}
                                quantity={product.quantity}
                                modal={false}
                            />
                    }
                </div>
                <ItemSuggestions
                    productDetail={product}
                    products={products}
                />
                <div className='absolute'>
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
                </div>
                </>
            :
                null
        }
        </>
    )
};

export default ItemDetailCard;
