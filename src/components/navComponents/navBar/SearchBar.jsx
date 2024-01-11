import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useGetAllProducts from '../../../customHooks/useGetAllProducts';

const SearchBar = () => {
    const [ inputValue, setInputValue ] = useState('')
    const [ prods, error, loading ] = useGetAllProducts()

    const getValue = (e) => {
        setInputValue(e.target.value)
    }

    const searchItems = (searchTerm) => {
        console.log(searchTerm);
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
                    className='w-16 sm:w-32 text-sm bg-teal-500/5 py-[.28rem] md:py-[.35rem] px-2 rounded-sm
                    drop-shadow-sm shadow-sm placeholder:tracking-wider'
                    onChange={getValue}
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
                <div className=''>
                    {
                        (prods.length && !loading && !error) ?
                            prods.map(prod => {
                                <span key={prod.id}>
                                    {prod.brand} {prod.name}
                                </span>
                            })
                        :
                            null
                    }
                </div>
            </div>
        </label>
    )
};

export default SearchBar;
