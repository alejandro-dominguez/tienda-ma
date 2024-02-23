import { useNavigate } from 'react-router-dom';

const SubcategoriesSearchItems = ({
    subcategories,
    inputValue,
    setInputValue,
    setShowSearch
}) => {
    const navigate = useNavigate()
    
    const navigateSubcategory = (subcategory) => {
        navigate((`/categorias/subcategorias/${subcategory}`))
        setTimeout(() => {
            setShowSearch(false)
            setInputValue('')
        }, 100)
    }

    return (
        <>
            {
                subcategories.filter(subcategory => {
                    const searchTerm = inputValue.toLowerCase()
                    const itemName = subcategory.toLowerCase()
                    return searchTerm && itemName.includes(searchTerm)
                })
                .map((subcategory, i) => {
                    return (
                        <span
                            key={i}
                            className='p-4 font-bold text-zinc-900 cursor-pointer shadow
                            shadow-black/[7%] transition-colors hover:bg-black/5'
                            onClick={() => navigateSubcategory(subcategory)}
                        >
                            {subcategory}
                        </span>
                    )
                })
            }
        </>
    )
};

export default SubcategoriesSearchItems;
