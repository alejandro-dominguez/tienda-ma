import { useEffect } from 'react';
import scrollTop from '../../utilities/scrollTop';

const ItemsPagination = ({
    pages,
    setCurrentPage,
    currentPage
}) => {
    useEffect(() => {
        setCurrentPage(1)
    }, [])

    const nextPage = (e) => {
        e.currentTarget.blur()
        if (currentPage !== pages) setCurrentPage(currentPage + 1)
        setTimeout(() => {
            scrollTop()
        }, 100)
    }
    const prevPage = (e) => {
        e.currentTarget.blur()
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
        setTimeout(() => {
            scrollTop()
        }, 100)
    }

    return (
            <div className='col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 justify-self-center mt-4'>
                <div className='relative flex gap-10'>
                    <button
                        type='button'
                        disabled={currentPage === 1 ? true : false}
                        onClick={(e) => prevPage(e)}
                        className='bg-zinc-900 text-white px-[1.15rem] py-2 shadow-sm rounded-s-lg
                        hover:bg-zinc-700 focus:bg-zinc-700 transition-colors ease-in-out tracking-wide'
                    >
                        Anterior
                    </button>
                        <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[53%] px-4 py-2
                        bg-white text-zinc-900 font-bold'>
                            {currentPage}
                        </span>
                    <button
                        type='button'
                        disabled={currentPage === pages ? true : false}
                        onClick={(e) => nextPage(e)}
                        className='bg-zinc-900 text-white px-[1.15rem] py-2 shadow-sm rounded-e-lg
                        hover:bg-zinc-700 focus:bg-zinc-700 transition-colors ease-in-out tracking-wide'
                    >
                        Siguiente
                    </button>
                </div>
            </div>
    )
};

export default ItemsPagination;
