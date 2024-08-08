import {
    useEffect,
    useRef,
    useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import BuyItemModal from './itemComponents/BuyItemModal.jsx';
import shortenText from '../utilities/shortenText';
import numberFormater from '../utilities/numberFormater';
import scrollTop from '../utilities/scrollTop';

const ListItemCard = ({ product }) => {
    const navigate = useNavigate()
    const [ showModal, setShowModal ] = useState(false)
    const [ isMobile, setIsMobile ] = useState(false)
    const cardRef = useRef()

    const responsiveViewport = () => window.visualViewport.width < 1024 ? setIsMobile(true) : setIsMobile(false)

    useEffect(() => {
        responsiveViewport()
    }, [])
    
    useEffect(() => {
        const bodyEl = document.getElementsByTagName('body')[0]
        const routerEl = document.getElementById('router')
        const cartEl = document.getElementById('cartLink')
        const wspBtnEl = document.getElementById('wspBtn')

        isMobile && showModal ?
            (
                scrollTop(),
                bodyEl.style.overflowY = 'hidden'
            )
        :
            showModal ?
                (   
                    scrollTop(),
                    bodyEl.style.overflowY = 'hidden',
                    routerEl.style.paddingRight = '17px',
                    cartEl.style.paddingRight = '17px',
                    wspBtnEl.style.paddingRight = '17px'
                )
        :
            (   
                bodyEl.style.overflowY = 'auto',
                routerEl.style.paddingRight = '0',
                cartEl.style.paddingRight = '0',
                wspBtnEl.style.paddingRight = '0'
            )
    }, [showModal])
    
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
                        <div className='w-36 drop-shadow-sm'>
                            <img
                                src={product.img}
                                alt={product.name}
                                className='block w-full rounded drop-shadow aspect-square object-cover'
                            />
                        </div>
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
                    <div className='mt-auto flex w-full gap-5'>
                        <button
                            type='button'
                            className='px-3 py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm
                            transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                            onClick={() => setShowModal(true)}
                        >
                            <span className='tracking-wider text-[.8rem] font-Raleway'>
                                Comprar
                            </span>
                        </button>
                        <button
                            type='button'
                            className='px-3 py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm
                            transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                            onClick={() => navigate((`/categorias/${product.category}/${product.subcategory}/detalle/${product.id}`))}                        
                        >
                            <span className='tracking-wider text-[.8rem] font-Raleway'>
                                Detalle
                            </span>
                        </button>
                    </div>
                </div>
                {
                    showModal ?
                        <BuyItemModal
                            product={product}
                            setShowModal={setShowModal}
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
