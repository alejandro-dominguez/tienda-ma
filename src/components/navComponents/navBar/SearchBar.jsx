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
            className='flex flex-col items-start mt-2 lg:mt-0'
        >
            <div className='flex items-center justify-between gap-1 relative'>
                <input
                    type='text' name='searchBar' id='searchBar' placeholder='...'
                    value={inputValue}
                    className='w-16 sm:w-20 text-sm bg-teal-500/[9%] py-[.28rem] md:py-[.35rem] px-2 rounded-sm
                    drop-shadow-sm shadow-sm placeholder:tracking-wider'
                    onChange={getValue}
                    onClick={() => setShowSearch(true)}
                />
                <button
                    type='button'
                    onClick={() => searchItems(inputValue)}
                >
                    <div className='grid place-items-center bg-red-400/[37%] px-[.41rem] py-[.45rem] md:py-[.48rem]
                    rounded-md drop-shadow-sm shadow-sm cursor-auto'>
                        <FaSearch className='text-base md:text-[1.1rem] text-white' />
                    </div>
                </button>
                {
                    (prods.length && brands.length && subcategories.length && !loading &&
                    !loadingSubcategories && !error && !errorSubcategories) ?
                        <div className=
                            {
                                showSearch ?
                                    `absolute w-full top-10 bg-white overflow-y-scroll flex flex-col
                                    max-h-36 shadow-sm drop-shadow rounded-sm`
                                :
                                    `absolute w-full top-10 bg-white overflow-y-scroll hidden
                                    max-h-36 shadow-sm drop-shadow rounded-sm`
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
                                            className='p-2 leading-[1.1rem] text-sm font-normal text-black cursor-pointer
                                            shadow-sm shadow-black/[7%] transition-colors hover:bg-black/5'
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
                                            className='p-2 leading-[1.1rem] text-sm font-normal text-black cursor-pointer
                                            shadow-sm shadow-black/[7%] transition-colors hover:bg-black/5'
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
                                            className='p-2 leading-[1.1rem] text-sm font-normal text-black cursor-pointer
                                            shadow-sm shadow-black/[7%] transition-colors hover:bg-black/5'
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
