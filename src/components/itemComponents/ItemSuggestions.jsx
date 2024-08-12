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
    const [ noRelatedProducts, setNoRelatedProducts ] = useState(false)
    const filteredProducts = products.filter(prod => {
        return productDetail.brand === prod.brand && productDetail.id !== prod.id
    })

    useEffect(() => {
        if (filteredProducts.length === 0) {
            setNoRelatedProducts(true)
        } else {
            setNoRelatedProducts(false)
        }
    }, [])

    return (
        <div className='flex flex-col items-center md:items-start py-3 px-7 bg-white rounded-lg shadow-sm drop-shadow-sm
        w-full mb-20 mt-5'>
            <h2 className='font-Raleway text-[.9rem] drop-shadow-sm font-semibold tracking-wide self-start'>
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
