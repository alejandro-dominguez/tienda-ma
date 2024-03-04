import numberFormater from '../../utilities/numberFormater';

const ItemDetailInfo = ({ product }) => {
    return (
        <>
            <h1 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-base'>
                {product.brand} {product.name}
            </h1>
            <div className='flex flex-col md:flex-row items-start gap-2 md:gap-4'>
                <div className='w-40 mt-[.1rem] md:mt-2 drop-shadow'>
                    <img
                        src={product.img}
                        alt={product.name}
                        className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                    />
                </div>
                <p className='mt-[.1rem] md:mt-[.3rem] w-full sm:w-[21rem] lg:w-[35rem] leading-[1.15rem]
                md:leading-5 font-bold text-zinc-800/[96] text-sm md:text-[.9rem] drop-shadow-sm tracking-tight'>
                    {product.desc}
                </p>
            </div>
            <div className='flex flex-col mt-[.2rem] md:mt-[.45rem]'>
                <span className='text-sm md:text-[.9rem] font-bold'>
                    Precio:
                </span>
                <span className='font-black text-[.825rem]'>
                    {numberFormater(product.price)}
                </span>
            </div>
        </>
    )
};

export default ItemDetailInfo;
