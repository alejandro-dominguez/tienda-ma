import ItemImg from './itemImgs/ItemImg';
import numberFormater from '../../utilities/numberFormater';

const ItemDetailInfo = ({ product }) => {
    return (
        <>
            <h1 className='font-Raleway font-bold drop-shadow-sm tracking-wide text-base'>
                {product.brand} {product.name}
            </h1>
            <div className='flex flex-col md:flex-row items-start gap-2 md:gap-4'>
                <ItemImg
                    img={product.img}
                    product={product}
                    mainImg={true}
                />
                <div className='mt-[.1rem] md:mt-[.3rem] w-full sm:w-[21rem] lg:w-[35rem] leading-[1.15rem] flex-col items-stretch
                md:leading-5 font-bold text-zinc-800/[96] text-sm md:text-[.9rem] drop-shadow-sm tracking-tight'>
                    <p className='h-fit'>
                        {product.desc}
                    </p>
                    <div className='flex flex-col sm:flex-row h-fit my-2 gap-2 sm:gap-5'>
                        {
                            product.img1 === undefined || product.img1 === '' || ' ' ?
                                null
                            :
                                <ItemImg
                                    img={product.img1}
                                    product={product}
                                    mainImg={false}
                                />
                        }
                        {
                            product.img2 === undefined || product.img2 === '' || ' ' ?
                            null
                            :
                                <ItemImg
                                    img={product.img2}
                                    product={product}
                                    mainImg={false}
                                />
                        }
                        {
                            product.img3 === undefined || product.img3 === '' || ' ' ?
                                null
                            :
                                <ItemImg
                                    img={product.img3}
                                    product={product}
                                    mainImg={false}
                                />
                        }
                    </div>
                </div>
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
