import { Link } from 'react-router-dom';
import numberFormater from '../../../utilities/numberFormater';
import ItemSuggestionsPagination from './itemSuggestionsPagination/ItemSuggestionsPagination';

const ItemSuggestionsCard = ({
    products,
    setCurrentPage,
    currentPage,
    pages
}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full mt-1 gap-3'>
            {
                products.map(product => {
                    return (
                        <Link
                            key={product.id}
                            to={(`/categorias/${product.category}/${product.subcategory}/detalle/${product.id}`)}
                        >
                            <div className='grid place-items-start min-h-[10rem]'>
                                <h3 className='font-Raleway font-black drop-shadow-sm tracking-wide text-[.85rem]'>
                                    {product.brand} {product.name}
                                </h3>
                                <div className='grid place-items-start self-end gap-3'>
                                    <div className='w-[4.5rem] drop-shadow -mt-24'>
                                        <img
                                            
                                            src={product.img}
                                            alt={product.name}
                                            className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                                        />
                                    </div>
                                    <span className='text-[.835rem] font-black -mt-8 tracking-wide'>
                                        {numberFormater(product.price)}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}
                )
            }
            {
                pages > 1 ?
                    <ItemSuggestionsPagination
                        pages={pages}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                :
                    null
            }
        </div>
    )
};

export default ItemSuggestionsCard;
