import { shortenText } from '../utilities';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ product, itemList }) => {
    const { brand, name, desc, img, id } = product
    const navigate = useNavigate()

    return (
        <div
            className={
                !itemList ? 'flex flex-col items-start justify-start py-5 md:px-8 gap-3 shadow-sm bg-white'
                : 'flex flex-col items-start justify-start my-4 mx-4 py-4 px-5 bg-white rounded gap-2 shadow'
            }
        >
            <h3 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-xl'>
                <span>
                    {brand} {name}
                </span>
            </h3>
            <div className={!itemList ? 'md:w-24' : 'md:w-32'}>
                <img
                    src={img}
                    alt={name}
                    className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                />
            </div>
            {
                itemList ?
                    <p className='text-sm text-zinc-900 drop-shadow-sm my-1'>
                        {shortenText((desc), 120)}
                    </p>
                :
                    <p className='text-sm text-zinc-900 drop-shadow-sm my-1'>
                        {desc}
                    </p>
            }
            <button
                type='button'
                className={
                    !itemList ?
                        `mt-1 px-6 py-2 bg-zinc-900 text-white rounded-lg shadow-sm transition-colors ease-in-out
                        duration-200 hover:bg-zinc-700 focus:bg-zinc-700`
                    : 
                        `mt-1 px-6 py-2 bg-teal-600/10 text-white rounded-lg shadow-sm transition-colors ease-in-out
                        duration-200 hover:bg-zinc-700 focus:bg-zinc-700`
                }
                onClick={() => navigate(`/detalle/${id}`)}
            >
                <span 
                    className={
                        !itemList ? 'block drop-shadow tracking-wide text-[1.025rem] font-Raleway'
                        : 'block drop-shadow tracking-wide text-sm font-Raleway'
                    }
                >
                    {
                        !itemList ?
                            'Ver más'
                        : 'Detalle'
                    }
                </span>
            </button>
        </div>
    )
};

export default ItemCard;
