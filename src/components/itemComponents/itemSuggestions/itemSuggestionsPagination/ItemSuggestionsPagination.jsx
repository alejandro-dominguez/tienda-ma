import {
    useEffect,
    useState
} from 'react';

const ItemSuggestionsPagination = ({
    pages,
    setCurrentPage,
    currentPage,
}) => {
    const [ isMobile, setIsMobile ] = useState(false)
    
    const responsiveViewport = () => window.visualViewport.width < 1024 ? setIsMobile(true) : setIsMobile(false)

    useEffect(() => {
        responsiveViewport()
    }, [])
    
    useEffect(() => {
        setCurrentPage(1)
    }, [])

    const nextPage = (e) => {
        e.currentTarget.blur()
        if (currentPage !== pages) setCurrentPage(currentPage + 1)
    }
    
    const prevPage = (e) => {
        e.currentTarget.blur()
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (
            <div className=
                {
                    isMobile ?
                        'col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 justify-self-center md:justify-self-end mb-4'
                    :
                        'col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 justify-self-center md:justify-self-end mb-2'
                }
            >
                <div className=
                    {
                        isMobile ?
                            'relative flex gap-10 shadow-sm'
                        :
                            'relative flex gap-4 shadow-sm'
                    }
                >
                    <button
                        type='button'
                        disabled={currentPage === 1 ? true : false}
                        onClick={(e) => prevPage(e)}
                        className=
                        {
                            isMobile ?
                                `bg-zinc-900 text-white px-[1.15rem] py-2 shadow-sm rounded-s-lg hover:bg-zinc-700
                                focus:bg-zinc-700 transition-colors ease-in-out tracking-wide`
                            :
                                `bg-zinc-900 text-white px-4 py-[.4rem] shadow-sm rounded-s-lg hover:bg-zinc-700
                                focus:bg-zinc-700 transition-colors ease-in-out tracking-wider text-sm`
                        }
                    >
                        Anterior
                    </button>
                        <span className=
                            {
                                isMobile ?
                                    `absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[53%]
                                    px-4 py-2 bg-white text-zinc-900 font-bold`
                                :
                                    `absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[53%]
                                    px-3 py-[.4rem] bg-white text-zinc-900 font-bold text-[.95rem]`
                            }
                        >
                            {currentPage}
                        </span>
                    <button
                        type='button'
                        disabled={currentPage === pages ? true : false}
                        onClick={(e) => nextPage(e)}
                        className=
                        {
                            isMobile ?
                                `bg-zinc-900 text-white px-[1.15rem] py-2 shadow-sm rounded-e-lg
                                hover:bg-zinc-700 focus:bg-zinc-700 transition-colors ease-in-out tracking-wide`
                            :
                                `bg-zinc-900 text-white px-4 py-[.4rem] shadow-sm rounded-e-lg text-sm
                                hover:bg-zinc-700 focus:bg-zinc-700 transition-colors ease-in-out tracking-wider`
                        }
                    >
                        {
                            isMobile ?
                                'Siguiente'
                            :
                                <span className='ml-3'>
                                    Siguiente
                                </span>
                        }
                    </button>
                </div>
            </div>
    )
};

export default ItemSuggestionsPagination;
