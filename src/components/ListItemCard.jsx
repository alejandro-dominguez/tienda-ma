import {
    useEffect,
    useRef,
    useState
} from 'react';
import {
    Link,
    useNavigate
} from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import BuyItemModal from './listComponents/BuyItemModal';
import EditProductModal from './listComponents/EditProductModal';
import shortenText from '../utilities/shortenText';
import CustomImg from './customImg/CustomImg';
import numberFormater from '../utilities/numberFormater';
import scrollTop from '../utilities/scrollTop';

const ListItemCard = ({ product }) => {
    const navigate = useNavigate()
    const [ showBuyItemModal, setShowBuyItemModal ] = useState(false)
    const [ showEditItemModal, setShowEditItemModal ] = useState(false)
    const [ isMobile, setIsMobile ] = useState(false)
    const [ isAdmin, setIsAdmin ] = useState(false)
    const cardRef = useRef()

    useEffect(() => {
        const isMobileViewport = window.visualViewport.width < 1024
        isMobileViewport ? setIsMobile(true) : setIsMobile(false)
    }, [])

    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem('authUser'))
        admin === true ? setIsAdmin(true) : setIsAdmin(false)
    }, [])
    
    useEffect(() => {
        const bodyEl = document.getElementsByTagName('body')[0]
        const routerEl = document.getElementById('router')
        const cartEl = document.getElementById('cartLink')
        const wspBtnEl = document.getElementById('wspBtn')

        isMobile && showEditItemModal ?
            scrollTop()
            : isMobile && showBuyItemModal ?
                (
                    scrollTop(),
                    bodyEl.style.overflowY = 'hidden'
                )
            : showBuyItemModal ?
                (   
                    scrollTop(),
                    bodyEl.style.overflowY = 'hidden',
                    routerEl.style.paddingRight = '17px',
                    cartEl.style.paddingRight = '17px',
                    wspBtnEl.style.paddingRight = '17px'
                )
            : showEditItemModal ?
                scrollTop()
            :   
                (   
                    bodyEl.style.overflowY = 'auto',
                    routerEl.style.paddingRight = '0',
                    cartEl.style.paddingRight = '0',
                    wspBtnEl.style.paddingRight = '0'
                )
    }, [ showBuyItemModal, showEditItemModal ])

    return (
        <>
        {
            product.stock ?
                <>
                <div
                    className='flex flex-col items-start justify-start m-4 py-4 px-5 bg-white rounded gap-1 shadow-sm drop-shadow-sm'
                    ref={cardRef}
                >
                    <h3 className='font-Raleway font-black drop-shadow-sm tracking-wide text-[.9rem] mb-1'>
                        {product.brand} {product.name}
                    </h3>
                    <div className='flex flex-col gap-4 mt-auto'>
                        {
                            !isAdmin ?
                                <div
                                    className='w-36 drop-shadow-sm cursor-pointer'
                                    onClick={() => setShowBuyItemModal(true)}
                                >
                                    <CustomImg
                                        src={product.img}
                                        alt={product.name}
                                        contain={false}
                                        center={false}
                                        aspectVideo={false}
                                    />
                                </div>
                            :
                                <div className='flex'>
                                    <div
                                        className='w-36 drop-shadow-sm'
                                        onClick={() => setShowBuyItemModal(true)}
                                    >
                                        <CustomImg
                                            src={product.img}
                                            alt={product.name}
                                            contain={false}
                                            center={false}
                                            aspectVideo={false}
                                        />
                                    </div>
                                    <button
                                        type='button'
                                        className='self-end'
                                        onClick={() => setShowEditItemModal(true)}
                                    >
                                        <span className='ml-10 py-2 px-[.6rem] bg-zinc-900 text-white rounded-lg shadow-sm
                                        text-lg transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'>
                                            <MdEdit className='block' />
                                        </span>
                                    </button>
                                </div>
                        }
                        {
                            product.sizes ?
                                <div className='flex flex-col'>
                                    <span className='text-sm'>
                                        M - G - XG - XXG
                                    </span>
                                    <span className='text-[.85rem] font-bold'>
                                        {numberFormater(product.price)}
                                    </span>
                                </div>
                            : product.adultSizes ?
                                <div className='flex flex-col'>
                                    <span className='text-sm'>
                                        Talles: G - XG
                                    </span>
                                    <span className='text-[.85rem] font-bold'>
                                        {numberFormater(product.price)}
                                    </span>
                                </div>
                            :
                                <span className='text-[.85rem] font-bold'>
                                    {numberFormater(product.price)}
                                </span>
                        }
                    </div>
                    <p className='text-sm text-zinc-900 drop-shadow-sm my-1'>
                        {shortenText((product.desc), 95)}
                    </p>
                    <div className='mt-auto flex w-full gap-2'>
                        <button
                            type='button'
                            className='px-3 py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm
                            transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                            onClick={() => setShowBuyItemModal(true)}
                        >
                            <span className='tracking-wider text-[.75rem] font-Raleway'>
                                Agregar
                            </span>
                        </button>
                        <button
                            type='button'
                            className='px-3 py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm
                            transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                            onClick={() => navigate((`/categorias/${product.category}/${product.subcategory}/detalle/${product.id}`))}                        
                        >
                            <span className='tracking-wider text-[.75rem] font-Raleway'>
                                Detalle
                            </span>
                        </button>
                        <Link
                            to='/carrito'
                            className='px-3 py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm
                            transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                        >
                            <span className='tracking-wider text-[.75rem] font-Raleway'>
                                Carrito
                            </span>
                        </Link>
                    </div>
                </div>
                {
                    showBuyItemModal ?
                        <BuyItemModal
                            product={product}
                            setShowBuyItemModal={setShowBuyItemModal}
                            cardRef={cardRef.current}
                        />
                    :
                        null
                }
                {
                    showEditItemModal ?
                        <EditProductModal
                            product={product}
                            setShowEditItemModal={setShowEditItemModal}
                            cardRef={cardRef.current}
                        />
                    :
                        null
                }
                </>
            :
                null
        }
        </>
    )
};

export default ListItemCard;
