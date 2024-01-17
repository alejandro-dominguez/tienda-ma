import { Link } from 'react-router-dom';
import numberFormater from '../../utilities/numberFormater';

const ItemSuggestions = ({
    productDetail,
    products
}) => {
    return (
        <div className='flex flex-col items-center md:items-start py-3 px-7 bg-white/80 rounded-lg shadow-sm
        w-full mt-7 sm:mt-5 md:-mt-16 mb-10'>
            <h2 className='font-Raleway text-xs drop-shadow-sm font-black uppercase tracking-wide self-start'>
                Productos similares:
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full mt-1'>
                {
                    products.filter(prod => {
                        return productDetail.brand === prod.brand && productDetail.id !== prod.id 
                    })
                    .map(product => {
                        return (
                            <Link
                                key={product.id}
                                to={(`/categorias/${product.category}/${product.subcategory}/detalle/${product.id}`)}
                            >
                                <div className='grid place-items-start gap-[.3rem]'>
                                    <h3 className='font-Raleway font-black drop-shadow-sm tracking-wide text-[.85rem]'>
                                        {product.brand} {product.name}
                                    </h3>
                                    <div className='w-[4.5rem] drop-shadow -mt-[.2rem]'>
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                                        />
                                    </div>
                                    <span className='text-[.835rem] font-black tracking-wide -mt-[.2rem]'>
                                        {numberFormater(product.price)}
                                    </span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ItemSuggestions;
