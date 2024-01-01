import { useNavigate } from 'react-router-dom';
import shortenText from '../utilities/shortenText';
import numberFormater from '../utilities/numberFormater';

const ItemCard = ({ product, itemList }) => {
    const navigate = useNavigate()

    return (
        <div
            className=
                {
                    !itemList ?
                        'flex flex-col items-start justify-start py-7 px-4 md:px-8 gap-3 shadow-sm bg-white/70'
                    :
                        'flex flex-col items-start justify-start my-4 mx-4 py-4 px-5 bg-white/70 rounded gap-2 shadow'
                }
        >
            <h3 className=
                {
                    !itemList ?
                        'font-Raleway font-bold drop-shadow-sm tracking-wide text-lg'
                    :
                        'font-Raleway font-bold drop-shadow-sm tracking-wide text-base'
                    
                }
            >
                {product.brand} {product.name}
            </h3>
            {
                !itemList ?
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='w-28 sm:w-32 shadow-sm'>
                            <img
                                src={product.img}
                                alt={product.name}
                                className='block w-full rounded shadow aspect-square object-cover'
                            />
                        </div>
                        <div className='flex flex-col w-fit'>
                            <p className='text-sm text-zinc-900 drop-shadow-sm w-fit'>
                                {shortenText((product.desc), 300)}
                            </p>
                            <span className=
                                {
                                    !itemList ?
                                        'font-black tracking-wide drop-shadow-sm text-sm mt-1'
                                    : null
                                }
                            >
                                {numberFormater(product.price)}
                            </span>
                        </div>
                    </div>
                :
                    <>
                        <div className='md:w-32'>
                            <img
                                src={product.img}
                                alt={product.name}
                                className='block w-full rounded shadow aspect-square object-cover'
                            />
                        </div>
                        <p className='text-sm text-zinc-900 drop-shadow-sm my-1'>
                            {shortenText((product.desc), 120)}
                        </p>
                    </>        
            }
            <button
                type='button'
                className=
                    {
                        !itemList ?
                            `mt-1 px-4 py-[.3rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors ease-in-out
                            duration-200 hover:bg-zinc-700 focus:bg-zinc-700`
                        : 
                            `mt-1 px-6 py-2 bg-teal-600/10 text-white rounded-lg shadow-sm transition-colors ease-in-out
                            duration-200 hover:bg-zinc-700 focus:bg-zinc-700`
                    }
                onClick={() => navigate((`/detalle/${product.id}`))}
            >
                <span className=
                    {
                        !itemList ?
                            'drop-shadow tracking-wider text-[.83rem] font-Raleway'
                        :
                            'drop-shadow tracking-wide text-xs font-Raleway'
                    }
                >
                    {
                        !itemList ?
                            'Ver más'
                        :
                            'Detalle'
                    }
                </span>
            </button>
        </div>
    )
};

export default ItemCard;
