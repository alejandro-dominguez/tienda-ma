import {
    useContext,
    useState,
    useEffect
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import { ShopContext } from '../../contexts/shopContext';
import { FaCircleXmark } from 'react-icons/fa6';
import ItemBabySizes from '../itemComponents/ItemBabySizes';
import ItemAdultSizes from '../itemComponents/ItemAdultSizes';
import ItemCount from '../itemComponents/ItemCount';

const BuyItemModal = ({
    product,
    setShowBuyItemModal,
    cardRef
}) => {
    const { addProduct } = useContext(ShopContext)
    const [ isMobile, setIsMobile ] = useState(false)
    const [ marginTop, setMarginTop ] = useState(false)
    const [ , setItemDetailQuantity ] = useState(1)
    const [ selectedSize, setSelectedSize ] = useState('')
    const [ selectedAdultSize, setSelectedAdultSize ] = useState('')
    const prodId = Math.floor(Math.random() * 100) * Date.now()

    const confirmPurchase = (quantity) => {
        toast.success(
            'Producto agregado',
            {
                duration: 5000,
                position: 'top-center',
            }
        )
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

    const closeModal = () => {
        setShowBuyItemModal(false)
        cardRef.scrollIntoView({behavior: 'smooth'})
    }

    const responsiveViewport = () => window.visualViewport.width < 1024 ? setIsMobile(true) : setIsMobile(false)

    useEffect(() => {
        responsiveViewport()
    }, [])

    useEffect(() => {
        isMobile ? setMarginTop(true) : setMarginTop(false) 
    }, [marginTop])

    return (
        <>
        <div
            className='fixed top-0 left-0 w-full h-full bg-black/30 z-40'
            onClick={() => closeModal()}
        />
        <div className=
            {
                marginTop ?
                    'absolute top-[6.5rem] left-0 w-full h-full flex flex-col items-center text-center'
                :
                    'absolute top-5 left-0 w-full h-full flex flex-col items-center text-center'
            }
        >
            <div className='relative flex flex-col items-center gap-4 py-6 bg-white rounded shadow-sm
            drop-shadow-sm z-50 min-w-[19.9rem]'>
                <button 
                    type='button'
                    className='absolute right-5 top-5 text-xl transition-colors text-zinc-800/95
                    hover:text-red-600/90 focus:text-red-600/90 z-10'
                    onClick={() => closeModal()}
                >
                    <FaCircleXmark className='block'/>
                </button>
                <h3 className='font-Raleway font-black drop-shadow-sm tracking-wide text-lg mb-1 px-5'>
                    {product.brand}
                    <br/>
                    {product.name}
                </h3>
                <div className='w-40 mt-[.1rem] md:mt-2 drop-shadow'>
                    <img
                        
                        src={product.img}
                        alt={product.name}
                        className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                    />
                </div>
                {
                    product.sizes ?
                        <ItemBabySizes setSelectedSize={setSelectedSize} />
                    :
                        product.adultSizes ?
                            <ItemAdultSizes setSelectedAdultSize={setSelectedAdultSize} />
                    :
                        null
                }
                {   
                    (product.sizes && selectedSize === '') || (product.adultSizes && selectedAdultSize === '') ?
                        <span className='font-black text-[.85rem] text-center drop-shadow-sm tracking-wide mt-5 md:mt-0'>
                            Elige talle para añadir el producto
                        </span>
                    :
                        <ItemCount
                            confirmPurchase={confirmPurchase}
                            initial={1}
                            quantity={product.quantity}
                            modal={true}
                        />
                }
            </div>
        </div>
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
    )
};

export default BuyItemModal;
