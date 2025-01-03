import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/productsContext';
import { FaSearch } from 'react-icons/fa';
import BrandsSearchItems from './searchBarItems/BrandsSearchItems';
import SubcategoriesSearchItems from './searchBarItems/SubcategoriesSearchItems';
import ProductsSearchItems from './searchBarItems/ProductsSearchItems';
import ProductLinesSearchItems from './searchBarItems/ProductLinesSearchItems';

const SearchBar = ({
    showNav,
    inputValue,
    showSearch,
    setInputValue,
    setShowSearch
}) => {
    const {
        prods,
        subcategories,
        brands,
        productLines,
        error,
        loading
    } = useContext(ProductsContext)

    const getValue = (e) => {
        setInputValue(e.target.value)
    }

    const searchItems = (searchTerm) => {
        setInputValue(searchTerm)
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
                    className='w-[15.5rem] lg:w-36 text-sm bg-teal-500/[9%] py-[.28rem] px-2 rounded-sm
                    drop-shadow-sm shadow-sm placeholder:tracking-wider'
                    onChange={getValue}
                    onClick={() => setShowSearch(true)}
                />
                <button
                    type='button'
                    onClick={() => searchItems(inputValue)}
                >
                    <div className='grid place-items-center bg-red-400/[37%] p-[.41rem]
                    rounded-md drop-shadow-sm shadow-sm cursor-auto'>
                        <FaSearch className='text-base text-white' />
                    </div>
                </button>
                {
                    (prods.length && brands.length && subcategories.length && !loading && !error) ?
                        <div className=
                            {
                                showSearch && showNav && inputValue !== '' ?
                                    `absolute w-full top-[2.5rem] bg-white overflow-y-scroll flex flex-col
                                    max-h-72 shadow-sm drop-shadow rounded-sm z-20`
                                :
                                    `absolute w-full top-[2.5rem] bg-white overflow-y-scroll hidden
                                    max-h-72 shadow-sm drop-shadow rounded-sm z-20`
                            }
                        >
                            <BrandsSearchItems
                                brands={brands}
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                setShowSearch={setShowSearch}   
                            />
                            <SubcategoriesSearchItems
                                subcategories={subcategories}
                                inputValue={inputValue}    
                                setInputValue={setInputValue}
                                setShowSearch={setShowSearch}   
                            />
                            <ProductLinesSearchItems
                                productLines={productLines}
                                inputValue={inputValue}    
                                setInputValue={setInputValue}
                                setShowSearch={setShowSearch}   
                            />
                            <ProductsSearchItems
                                prods={prods}
                                inputValue={inputValue}    
                                setInputValue={setInputValue}
                                setShowSearch={setShowSearch}   
                            />
                        </div>
                    :
                        null
                }
            </div>
        </label>
    )
};

export default SearchBar;
