import { useContext } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { shortenText } from '../../utilities';
import { ShopContext } from '../../contexts/shopContext';

const CartItem = ({ item }) => {
    const { removeProduct } = useContext(ShopContext)
    
    const handleRemove = () => {
        removeProduct(item.id)
    }
    
    return (
        <div className='flex items-start justify-between w-full py-4 px-5 bg-rose-300/70 shadow-sm rounded'>
            <div className='w-16'>
                <img src={item.img} alt={item.name}
                className='w-full block aspect-square object-cover rounded' />
            </div>
                <h3 className='font-bold tracking-wide'>Detalle:</h3>
                <h4 className='font-OpenSans font-bold'>{shortenText(item.name, 30)}</h4>
                <p className='mt-[0.15rem]'>
                    Cantidad:&nbsp;&nbsp;
                    <span className='font-OpenSans font-bold'>
                        {item.quantity}
                    </span>
                </p>
            <BsFillTrash3Fill
                className='block text-white cursor-pointer text-2xl drop-shadow transition-colors hover:text-red-600/90'
                onClick={() => handleRemove()}
            />
        </div>
    )
};

export default CartItem;

/*     <div
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
        <div className={!itemList ? 'md:w-48' : 'md:w-32'}>
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
            : null
        }
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
    </div> */
