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
                        'flex flex-col items-start justify-start p-5 gap-4 shadow-sm drop-shadow-sm bg-white'
                    :
                        'flex flex-col items-start justify-start m-4 py-4 px-5 bg-white rounded gap-1 shadow-sm drop-shadow-sm'
                }
        >
            <h3 className=
                {
                    !itemList ?
                        'font-Raleway font-bold drop-shadow-sm tracking-wide text-lg'
                    :
                        'font-Raleway font-black drop-shadow-sm tracking-wide text-[.9rem] mb-1'
                    
                }
            >
                {product.brand} {product.name}
            </h3>
            {
                !itemList ?
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='w-28 drop-shadow-sm'>
                            <img
                                src={product.img}
                                alt={product.name}
                                className='block w-full rounded drop-shadow-sm aspect-square object-cover'
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
                                :
                                    null
                            }
                            <span className=
                                {
                                    !itemList ?
                                        'font-black tracking-wide drop-shadow-sm text-sm mt-2'
                                    :
                                        'font-black tracking-wide drop-shadow-sm text-sm mt-2'
                                }
                            >
                                {numberFormater(product.price)}
                            </span>
                        </div>
                    </div>
                :
                    <>
                        <div className='flex gap-4'>
                            <div className='w-16 md:w-20 drop-shadow-sm'>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className='block w-full rounded drop-shadow aspect-square object-cover'
                                />
                            </div>
                            {
                                product.sizes ?
                                    <div className='flex flex-col text-[.85rem] font-bold'>
                                        <span>
                                            M - G - XG - XXG
                                        </span>
                                        <span>
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
                    </>        
            }
            <button
                type='button'
                className=
                    {
                        !itemList ?
                            `mt-1 px-4 py-[.3rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors ease-in-out
                            hover:bg-zinc-700 focus:bg-zinc-700`
                        : 
                            `mt-[.15rem] px-3 py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors ease-in-out
                            hover:bg-zinc-700 focus:bg-zinc-700`
                    }
                onClick={() => navigate((`/categorias/${product.category}/${product.subcategory}/detalle/${product.id}`))}
            >
                <span className=
                    {
                        !itemList ?
                            'tracking-wider text-[.83rem] font-Raleway'
                        :
                            'tracking-wider text-[.8rem] font-Raleway'
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
