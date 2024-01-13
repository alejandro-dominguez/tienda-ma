import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useGetAllProducts from '../../../customHooks/useGetAllProducts';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [ inputValue, setInputValue ] = useState('')
    const [ showSearch, setShowSearch ] = useState(true)
    const [ prods, error, loading ] = useGetAllProducts()
    const navigate = useNavigate()
    
    const getValue = (e) => {
        setInputValue(e.target.value)
    }

    const searchItems = (searchTerm) => {
        setInputValue(searchTerm)
    }

    const navigateItemDetail = (prod) => {
        navigate((`/detalle/${prod.id}`))
        setTimeout(() => {
            setShowSearch(false)
        }, 100)
    }
    
    return (
        <label
            htmlFor='searchBar'
            className='flex flex-col items-start'
        >
            <div className='flex items-center justify-between gap-1 relative'>
                <input
                    type='text' name='searchBar' placeholder='...'
                    value={inputValue}
                    className='w-16 sm:w-32 text-sm bg-teal-500/[9%] py-[.28rem] md:py-[.35rem] px-2 rounded-sm
                    drop-shadow-sm shadow-sm placeholder:tracking-wider'
                    onChange={getValue}
                    onClick={() => setShowSearch(true)}
                />
                <button
                    type='button'
                    onClick={() => searchItems(inputValue)}
                >
                    <div className='grid place-items-center bg-red-400/[37%] px-[.41rem] py-[.45rem] md:py-[.48rem]
                    rounded-md drop-shadow-sm shadow-sm'>
                        <FaSearch className='text-base md:text-[1.1rem] text-white' />
                    </div>
                </button>
                {
                    (prods.length && !loading && !error) ?
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
