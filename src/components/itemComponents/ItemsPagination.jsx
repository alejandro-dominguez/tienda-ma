import {
    useEffect,
    useContext
 } from 'react';
 import { AuthContext } from '../../contexts/authContext';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward} from 'react-icons/io';
import scrollTop from '../../utilities/scrollTop';

const ItemsPagination = ({
    pages,
    pagesQuantity,
    setCurrentPage,
    currentPage,
}) => {
    const { authUser } = useContext(AuthContext)

    useEffect(() => {
        localStorage.getItem('authUser') || authUser ?
            (
                localStorage.setItem('itemPages', JSON.stringify(currentPage)),
                setCurrentPage(currentPage)
            )
        :
            setCurrentPage(1)
    }, [])

    useEffect(() => {
        (localStorage.getItem('authUser') || authUser) && localStorage.getItem('itemPages') ?
            localStorage.setItem('itemPages', JSON.stringify(currentPage))
        :
            null
    }, [currentPage])

    const nextPage = (e) => {
        e.currentTarget.blur()
        if (currentPage !== pages) setCurrentPage(currentPage + 1)
        setTimeout(() => scrollTop(), 100)
    }
    
    const prevPage = (e) => {
        e.currentTarget.blur()
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
        setTimeout(() => scrollTop(), 100)
    }

    const changePage = (nPage) => {
        if (currentPage !== nPage) {
            setCurrentPage(nPage)
            setTimeout(() => scrollTop(), 100)
        }
    }

    return (
            <div className='col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 justify-self-center mt-4'>
                <div className='relative flex items-center gap-4'>
                    <button
                        type='button'
                        disabled={currentPage === 1 ? true : false}
                        onClick={(e) => prevPage(e)}
                        className='bg-zinc-900 text-white p-[.3rem] shadow-sm rounded-full text-lg md:text-xl
                        hover:bg-zinc-700 focus:bg-zinc-700 transition-colors ease-in-out'
                    >
                        <IoIosArrowBack className='block' />
                    </button>
                    <div className=
                        {   
                            pages >= 4 ?
                                'grid place-items-center grid-cols-4 gap-4'
                                : pages === 3 ?
                                    'grid place-items-center grid-cols-3 gap-4'
                            :
                                'grid place-items-center grid-cols-2 gap-4'
                        }
                    >
                        {
                            pagesQuantity.map((nPage,i) => {
                                return (
                                    <button
                                        type='button'
                                        key={i}
                                        disabled={nPage === currentPage ? true : false}
                                        className=
                                        {
                                            nPage === currentPage ?
                                                `px-3 md:px-4 py-2 bg-white drop-shadow shadow
                                                rounded border border-zinc-700/[90%] transition`
                                            :
                                                `px-3 md:px-4 py-2 bg-white drop-shadow-sm rounded border
                                                border-transparent transition shadow-sm hover:shadow
                                                hover:drop-shadow hover:border-zinc-700/[45%] focus:shadow
                                                focus:drop-shadow focus:border-zinc-700/[45%]`
                                        }
                                        onClick={() => changePage(nPage)}
                                    >
                                        <span className='text-sm md:text-base'>
                                            {nPage}
                                        </span>
                                    </button>
                                )
                            })
                        }
                    </div>
                    <button
                        type='button'
                        disabled={currentPage === pages ? true : false}
                        onClick={(e) => nextPage(e)}
                        className='bg-zinc-900 text-white p-[.3rem] shadow-sm rounded-full text-lg md:text-xl w-fit h-fit
                        hover:bg-zinc-700 focus:bg-zinc-700 transition-colors ease-in-out'
                    >
                        <IoIosArrowForward className='block'/>
                    </button>
                </div>
            </div>
    )
};

export default ItemsPagination;
