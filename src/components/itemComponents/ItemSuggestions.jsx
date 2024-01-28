import {
    useEffect,
    useState
} from 'react';
import ItemSuggestionsCard from './itemSuggestions/ItemSuggestionsCard';
import NoRelatedProductsCard from './itemSuggestions/NoRelatedProductsCard';

const ItemSuggestions = ({
    productDetail,
    products
}) => {
    const [ noRelatedProducts, setNoRelatedProducts ] = useState(true)

    useEffect(() => {
        products.filter(prod => {
            return (
                (productDetail.brand === prod.brand) && productDetail.id !== prod.id ?
                    setNoRelatedProducts(false)
                :
                    setNoRelatedProducts(true)
            )
        })
    }, [])

    return (
        <div className='flex flex-col items-center md:items-start py-3 px-7 bg-white rounded-lg shadow-sm drop-shadow-sm
        w-full mt-5 mb-20'>
            <h2 className='font-Raleway text-xs drop-shadow-sm font-black uppercase tracking-wide self-start'>
                Productos similares:
            </h2>
            {
                !noRelatedProducts ?
                    <ItemSuggestionsCard
                        productDetail={productDetail}
                        products={products}    
                    />
                :
                    <NoRelatedProductsCard />
            }
        </div>
    )
};

export default ItemSuggestions;
