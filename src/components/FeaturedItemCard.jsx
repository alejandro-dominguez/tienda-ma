import { useNavigate } from 'react-router-dom';
import shortenText from '../utilities/shortenText';
import numberFormater from '../utilities/numberFormater';
import CustomImg from './customImg/CustomImg';

const FeaturedItemCard = ({ product }) => {
    const navigate = useNavigate()

    return (
        <>
        {
            product.stock ?
                <div className='flex flex-col items-start justify-start p-5 gap-4 shadow-sm drop-shadow-sm bg-white'>
                    <h3 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-lg'>
                        {product.brand} {product.name}
                    </h3>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='w-36 drop-shadow-sm'>
                            <CustomImg
                                src={product.img}
                                alt={product.name}
                                contain={false}
                                center={false}
                                aspectVideo={false}
                            />
                        </div>
                        <div className='flex flex-col w-fit'>
                            <p className='text-sm text-zinc-900 drop-shadow-sm w-fit'>
                                {shortenText((product.desc), 150)}
                            </p>
                            {
                                product.sizes ?
                                    <span className='font-black text-sm mt-2'>
                                        Talles: M - G - XG - XXG
                                    </span>
                                : product.adultSizes ?
                                    <span className='font-black text-sm mt-2'>
                                        Talles: G - XG
                                    </span>
                                :
                                    null
                            }
                            <span className='font-black tracking-wide drop-shadow-sm text-sm mt-2'>
                                {numberFormater(product.price)}
                            </span>
                        </div>
                    </div>
                    <button
                        type='button'
                        className='mt-1 px-4 py-[.3rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                        ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                        onClick={() => navigate((`/categorias/${product.category}/${product.subcategory}/detalle/${product.id}`))}
                    >
                        <span className='tracking-wider text-[.83rem] font-Raleway'>
                            Ver más
                        </span>
                    </button>
                </div>
            :
                null
        }
        </>
    )
};

export default FeaturedItemCard;
