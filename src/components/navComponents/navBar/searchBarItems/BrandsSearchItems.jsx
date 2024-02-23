import { useNavigate } from 'react-router-dom';

const BrandsSearchItems = ({
    brands,
    inputValue,
    setInputValue,
    setShowSearch
}) => {
    const navigate = useNavigate()

    const navigateItemBrand = (brand) => {
        navigate((`/categorias/marcas/${brand}`))
        setTimeout(() => {
            setShowSearch(false)
            setInputValue('')
        }, 100)
    }

    return (
        <>
            {
                brands.filter(brand => {
                    const searchTerm = inputValue.toLowerCase()
                    const itemName = brand.toLowerCase()
                    return searchTerm && itemName.includes(searchTerm)
                })
                .map((brand, i) => {
                    return (
                        <span
                            key={i}
                            className='p-4 font-bold text-zinc-900 cursor-pointer shadow
                            shadow-black/[7%] transition-colors hover:bg-black/5'
                            onClick={() => navigateItemBrand(brand)}
                        >
                            {brand}
                        </span>
                    )
                })
            }
        </>
    )
};

export default BrandsSearchItems;
