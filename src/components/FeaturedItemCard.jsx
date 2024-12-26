import {
    useState,
    useEffect,
    useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import shortenText from '../utilities/shortenText';
import numberFormater from '../utilities/numberFormater';
import CustomImg from './customImg/CustomImg';
import BuyItemModal from './listComponents/BuyItemModal';
import scrollTop from '../utilities/scrollTop';

const FeaturedItemCard = ({ product }) => {
    const [ showBuyItemModal, setShowBuyItemModal ] = useState(false)
    const [ isMobile, setIsMobile ] = useState(false)
    const cardRef = useRef()
    const navigate = useNavigate()
    const {
        stock,
        brand,
        name,
        img,
        desc,
        sizes,
        adultSizes,
        price,
        category,
        subcategory,
        id
    } = product

    useEffect(() => {
        const isMobileViewport = window.visualViewport.width < 1024
        isMobileViewport ? setIsMobile(true) : setIsMobile(false)
    }, [])

    useEffect(() => {
        const bodyEl = document.getElementsByTagName('body')[0]
        const routerEl = document.getElementById('router')
        const cartEl = document.getElementById('cartLink')
        const wspBtnEl = document.getElementById('wspBtn')

            isMobile && showBuyItemModal ?
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
        :   
            (   
                bodyEl.style.overflowY = 'auto',
                routerEl.style.paddingRight = '0',
                cartEl.style.paddingRight = '0',
                wspBtnEl.style.paddingRight = '0'
            )
    }, [ showBuyItemModal ])

    return (
        <>
        {
            stock ?
                <>
                <div
                    className='flex flex-col items-start justify-start p-5 gap-4 shadow-sm drop-shadow-sm bg-white'
                    ref={cardRef}
                >
                    <h3 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-lg'>
                        {brand} {name}
                    </h3>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div
                            className='w-36 drop-shadow-sm cursor-pointer'
                            onClick={() => setShowBuyItemModal(true)}
                        >
                            <CustomImg
                                src={img}
                                alt={name}
                                contain={false}
                                center={false}
                                aspectVideo={false}
                            />
                        </div>
                        <div className='flex flex-col w-fit'>
                            <p className='text-sm text-zinc-900 drop-shadow-sm w-fit'>
                                {shortenText((desc), 150)}
                            </p>
                            {
                                sizes ?
                                    <span className='font-black text-sm mt-2'>
                                        Talles: M - G - XG - XXG
                                    </span>
                                : adultSizes ?
                                    <span className='font-black text-sm mt-2'>
                                        Talles: G - XG
                                    </span>
                                :
                                    null
                            }
                            <span className='font-black tracking-wide drop-shadow-sm text-sm mt-2'>
                                {numberFormater(price)}
                            </span>
                        </div>
                    </div>
                    <div className='mt-auto flex w-full gap-5'>
                        <button
                            type='button'
                            className='mt-1 px-4 py-[.3rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                            ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                            onClick={() => setShowBuyItemModal(true)}
                        >
                            <span className='tracking-wider text-[.83rem] font-Raleway'>
                                Agregar
                            </span>
                        </button>
                        <button
                            type='button'
                            className='mt-1 px-4 py-[.3rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                            ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                            onClick={() => navigate((`/categorias/${category}/${subcategory}/detalle/${id}`))}
                        >
                            <span className='tracking-wider text-[.83rem] font-Raleway'>
                                Ver más
                            </span>
                        </button>
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
                </>
            :
                null
        }
        </>
    )
};

export default FeaturedItemCard;
