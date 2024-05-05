const AdminProductFilters = ({
    prods,
    brands,
    featuredProducts,
    stockedProducts,
    notStockedProducts,
    setProducts
}) => {
    const registerInput = (e) => {
        if (e.target.value !== 'Marcas') {
            setProducts(
                prods.filter(prod => prod.brand === e.target.value)
            )
            localStorage.setItem('adminBrandFilter', e.target.value)
        }
    }

    const filterProducts = (filter) => {
        switch (filter) {
            case 'featured':
                setProducts(featuredProducts)
                localStorage.getItem('adminBrandFilter') ? localStorage.removeItem('adminBrandFilter') : null
                break; 
            case 'stocked':
                setProducts(stockedProducts)        
                localStorage.getItem('adminBrandFilter') ? localStorage.removeItem('adminBrandFilter') : null
                break;
            case 'notStocked':
                setProducts(notStockedProducts)        
                localStorage.getItem('adminBrandFilter') ? localStorage.removeItem('adminBrandFilter') : null
                break;    
            case 'all':
                setProducts(prods)        
                localStorage.getItem('adminBrandFilter') ? localStorage.removeItem('adminBrandFilter') : null
            break;
        }
    }

    return (
        <div className='flex flex-col items-center md:flex-row gap-4 md:gap-6 my-3'>
            <select
                name='brandFilter' id='brandFilter' required
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm text-center w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                onChange={registerInput}
            >
                <option value={null}>Marcas</option>
                {
                    brands.map((brand, i) => {
                        return (
                            <option
                                key={i}
                                value={brand}
                            >
                                {brand}
                            </option>
                        )
                    })
                }
            </select>
            <button
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                type='button'
                onClick={() => filterProducts('featured')}
            >
                Destacados
            </button>
            <button
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                type='button'
                onClick={() => filterProducts('stocked')}
            >
                En stock
            </button>
            <button
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                type='button'
                onClick={() => filterProducts('notStocked')}
            >
                Sin stock
            </button>
            <button
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                type='button'
                onClick={() => filterProducts('all')}
            >
                Mostrar todos
            </button>
        </div>
    )
};

export default AdminProductFilters;
