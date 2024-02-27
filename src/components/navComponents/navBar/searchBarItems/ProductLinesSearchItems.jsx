import { useNavigate } from 'react-router-dom';

const ProductLinesSearchItems = ({
    productLines,
    inputValue,
    setInputValue,
    setShowSearch
}) => {
    const navigate = useNavigate()

    const navigateItemLine = (productLine) => {
        navigate((`/categorias/lineasDeProducto/${productLine}`))
        setTimeout(() => {
            setShowSearch(false)
            setInputValue('')
        }, 100)
    }

    return (
        <>
            {
                productLines.filter(productLine => {
                    const searchTerm = inputValue.toLowerCase()
                    const itemName = productLine.toLowerCase()
                    return searchTerm && itemName.includes(searchTerm)
                })
                .map((productLine, i) => {
                    return (
                        <span
                            key={i}
                            className='p-4 font-bold text-zinc-900 cursor-pointer shadow
                            shadow-black/[7%] transition-colors hover:bg-black/5'
                            onClick={() => navigateItemLine(productLine)}
                        >
                            {productLine}
                        </span>
                    )
                })
            }
        </>
    )
};

export default ProductLinesSearchItems;
