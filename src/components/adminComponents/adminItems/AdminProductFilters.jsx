const AdminProductFilters = ({
    prods,
    brands,
    featuredProducts,
    stockedProducts,
    notStockedProducts,
    setProducts
}) => {
    const registerInputs = (e) => {
        if (e.target.value !== 'Marcas') {
            setProducts(
                prods.filter(prod => prod.brand === e.target.value)
            )
        }
    }

    const flterProducts = (filter) => {
        switch (filter) {
            case 'featured':
                setProducts(featuredProducts)
            break; 
            case 'stocked':
                setProducts(stockedProducts)        
            break;
            case 'notStocked':
                setProducts(notStockedProducts)        
                break;    
            case 'all':
                setProducts(prods)        
            break;
        }
    }

    return (
        <div className='flex flex-col items-center md:flex-row gap-4 md:gap-6 my-3'>
            <select
                name='brandFilter' id='brandFilter' required
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm text-center w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                onChange={registerInputs}
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
                onClick={() => flterProducts('featured')}
            >
                Destacados
            </button>
            <button
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                type='button'
                onClick={() => flterProducts('stocked')}

            >
                En stock
            </button>
            <button
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                type='button'
                onClick={() => flterProducts('notStocked')}

            >
                Sin stock
            </button>
            <button
                className='px-3 py-1 bg-zinc-900 text-white rounded-md shadow-sm w-36 md:w-fit
                transition-colors ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                type='button'
                onClick={() => flterProducts('all')}

            >
                Mostrar todos
            </button>
        </div>
    )
};

export default AdminProductFilters;