import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useGetAllProducts from '../../../customHooks/useGetAllProducts';
import useGetAllSubcategories from '../../../customHooks/useGetAllSubcategories';

const SearchBar = () => {
    const [ inputValue, setInputValue ] = useState('')
    const [ showSearch, setShowSearch ] = useState(true)
    const [ prods, brands, error, loading ] = useGetAllProducts()
    const [ subcategories, errorSubcategories, loadingSubcategories ] = useGetAllSubcategories()

    const navigate = useNavigate()
    
    const getValue = (e) => {
        setInputValue(e.target.value)
    }

    const searchItems = (searchTerm) => {
        setInputValue(searchTerm)
    }

    const navigateItemDetail = (prod) => {
        navigate((`/categorias/${prod.category}/${prod.subcategory}/detalle/${prod.id}`))
        setTimeout(() => {
            setShowSearch(false)
            setInputValue('')
        }, 100)
    }

    const navigateItemBrand = (brand) => {
        navigate((`/categorias/marcas/${brand}`))
        setTimeout(() => {
            setShowSearch(false)
            setInputValue('')
        }, 100)
    }

    const navigateSubcategory = (subcategory) => {
        navigate((`/categorias/subcategorias/${subcategory}`))
        setTimeout(() => {
            setShowSearch(false)
            setInputValue('')
        }, 100)
    }
    
    return (
        <label
            htmlFor='searchBar'
            className='flex flex-col items-start mt-2 lg:mt-0 lg:mr-4'
        >
            <div className='flex items-center justify-between gap-1 relative'>
                <input
                    type='text' name='searchBar' id='searchBar' placeholder='...'
                    value={inputValue}
                    className='w-[14rem] lg:w-52 text-sm bg-teal-500/[9%] py-[.28rem] px-2 rounded-sm
                    drop-shadow-sm shadow-sm placeholder:tracking-wider'
                    onChange={getValue}
                    onClick={() => setShowSearch(true)}
                />
                <button
                    type='button'
                    onClick={() => searchItems(inputValue)}
                >
                    <div className='grid place-items-center bg-red-400/[37%] px-[.41rem] py-[.45rem]
                    rounded-md drop-shadow-sm shadow-sm cursor-auto'>
                        <FaSearch className='text-base text-white' />
                    </div>
                </button>
                {
                    (prods.length && brands.length && subcategories.length && !loading &&
                    !loadingSubcategories && !error && !errorSubcategories) ?
                        <div className=
                            {
                                showSearch ?
                                    `absolute w-full top-[2.655rem] bg-white overflow-y-scroll flex flex-col
                                    max-h-64 shadow-sm drop-shadow rounded-sm`
                                :
                                    `absolute w-full top-[2.655rem] bg-white overflow-y-scroll hidden
                                    max-h-64 shadow-sm drop-shadow rounded-sm`
                            }
                        >
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
                                            className='p-4 font-bold text-black cursor-pointer shadow
                                            shadow-black/[7%] transition-colors hover:bg-black/5'
                                            onClick={() => navigateItemBrand(brand)}
                                        >
                                            {brand}
                                        </span>
                                    )
                                })
                            }
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
                                            className='p-4 font-bold text-black cursor-pointer shadow
                                            shadow-black/[7%] transition-colors hover:bg-black/5'
                                            onClick={() => navigateSubcategory(subcategory)}
                                        >
                                            {subcategory}
                                        </span>
                                    )
                                })
                            }
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
                                            className='p-4 font-bold text-black cursor-pointer shadow
                                            shadow-black/[7%] transition-colors hover:bg-black/5'
                                            onClick={() => navigateItemDetail(prod)}
                                        >
                                            {prod.brand} {prod.name}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    :
                        null
                }
            </div>
        </label>
    )
};

export default SearchBar;
