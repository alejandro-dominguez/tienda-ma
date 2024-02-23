import { useNavigate } from 'react-router-dom';

const ProductsSearchItems = ({
    prods,
    inputValue,
    setInputValue,
    setShowSearch
}) => {
    const navigate = useNavigate()

    const navigateItemDetail = (prod) => {
        navigate((`/categorias/${prod.category}/${prod.subcategory}/detalle/${prod.id}`))
        setTimeout(() => {
            setShowSearch(false)
            setInputValue('')
        }, 100)
    }

    return (
        <>
            {
                prods.filter(prod => {
                    const searchTerm = inputValue.toLowerCase()
                    const itemName = `${prod.brand} ${prod.name}`.toLowerCase()
                    return searchTerm && itemName.includes(searchTerm)
                })
                .map(prod => {
                    return (
                        <span
                            key={prod.id}
                            className='p-4 font-bold text-zinc-900 cursor-pointer shadow
                            shadow-black/[7%] transition-colors hover:bg-black/5'
                            onClick={() => navigateItemDetail(prod)}
                        >
                            {prod.brand} {prod.name}
                        </span>
                    )
                })
            }
        </>
    )
};

export default ProductsSearchItems;
