import {
    useContext,
    useEffect,
    useState
} from 'react';
import { PromoContext } from '../contexts/promoContext';
import { RotatingLines } from 'react-loader-spinner';
import ErrorPage from '../pages/ErrorPage';

const PromoSectionContainer = () => {
    const { promo, errorPromo, loadingPromo } = useContext(PromoContext)
    const [ promotion, setPromotion ] = useState({})

    useEffect(() => {
        if (localStorage.promoData) {
            setPromotion(JSON.parse(localStorage.promoData))
        }
    }, [])

    return (
        <section className='w-full grid place-items-center px-4 md:px-10 py-5 sm:py-10 bg-white'>
            {
                JSON.stringify(promotion) !== '{}' ?
                    <h3 className='block md:leading-9 text-2xl md:text-[1.75rem] font-black font-Raleway tracking-wide'>
                        {promotion.text}
                    </h3>
                : (JSON.stringify(promo) !== '{}' && !loadingPromo && !errorPromo) ?
                    <h3 className='block md:leading-9 text-2xl md:text-[1.75rem] font-black font-Raleway tracking-wide'>
                        {promo.text}
                    </h3>
                : !errorPromo ?
                    <div className='w-full grid place-items-center min-h-[4.5rem]'>
                        <div className='p-5 bg-teal-600/20 rounded-lg'>
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='40'
                                visible={true}
                            />
                        </div>
                    </div>
                :
                    <ErrorPage />
            }
        </section>
    )
};

export default PromoSectionContainer;
