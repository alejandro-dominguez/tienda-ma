import { FaPlusCircle } from 'react-icons/fa';
import { shortenText } from '../utilities';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ product, itemList }) => {
    const { brand, name, desc, img, id } = product
    const navigate = useNavigate()

    return (
        <div
            id={id}
            className={
                !itemList ? 'flex flex-col items-start justify-start py-5 md:px-8 bg-rose-300/70 rounded gap-3 shadow'
                : 'flex flex-col items-start justify-start my-4 mx-4 py-4 px-5 bg-rose-300/70 rounded gap-2 shadow'
            }
        >
            <h3 className='text-white font-bold drop-shadow-sm tracking-wide'>
                <span>
                    {
                        !itemList ?
                            shortenText((`${brand} ${name}`), 21)
                        : `${brand} ${name}`
                    }
                </span>
            </h3>
            <div className={!itemList ? 'md:w-48 aspect-square' : 'md:w-32 aspect-square'}>
                <img
                    src={img}
                    alt={name}
                    className='block w-full rounded drop-shadow-sm'
                />
            </div>
            {
                itemList ?
                    <p className='text-sm text-zinc-900 drop-shadow-sm my-1'>
                        {shortenText((desc), 120)}
                    </p>
                : null
            }
            <div className='flex w-full justify-between items-center'>
                <button
                    type='button'
                    className={
                        !itemList ?
                            `mt-1 px-6 py-2 bg-teal-600/95 text-white rounded-lg shadow-sm transition-colors ease-in-out
                            duration-200 hover:bg-rose-600 focus:bg-rose-600`
                        : 
                            `mt-1 px-6 py-2 bg-teal-600/95 text-white rounded-lg shadow-sm transition-colors ease-in-out
                            duration-200 hover:bg-rose-600 focus:bg-rose-600`
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
                <button
                    type='button'
                    className='pr-1 text-white drop-shadow-sm transition-[color,filter] ease-in-out
                    hover:text-[#38f7ce] focus:text-[#38f7ce] hover:drop-shadow'
                >
                    <FaPlusCircle className={!itemList ? 'text-[1.6rem]' : 'text-[1.45rem]'}/>
                </button>
            </div>
        </div>
    )
};

export default ItemCard;
