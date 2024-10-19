import {
    useRef,
    useState,
    useEffect
} from 'react';

const ItemImg = ({
    img,
    product,
    mainImg
}) => {
    const [ isMobile, setIsMobile ] = useState(false)
    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const dialogRef = useRef()

    useEffect(() => {
        const isMobileViewport = window.visualViewport.width < 1024
        isMobileViewport ? setIsMobile(true) : setIsMobile(false)
    }, [])

    const openModal = () => {
        dialogRef.current.showModal()
        setIsModalVisible(true)
    }

    const closeModal = (e) => {
        if (e.currentTarget === e.target) {
            dialogRef.current.close()
        }
        setIsModalVisible(false)
    }

    useEffect(() => {
        const bodyEl = document.getElementsByTagName('body')[0]
        const routerEl = document.getElementById('router')
        const cartEl = document.getElementById('cartLink')
        const wspBtnEl = document.getElementById('wspBtn')

        isMobile && isModalVisible ?
            bodyEl.style.overflowY = 'auto'
            : isModalVisible ?
                (   
                    bodyEl.style.overflowY = 'hidden',
                    routerEl.style.paddingRight = '17px',
                    cartEl.style.paddingRight = '17px',
                    wspBtnEl.style.paddingRight = '17px'
                )
        :   
            (   
                bodyEl.style.overflowY = 'auto',
                routerEl.style.paddingRight = '0',
                cartEl.style.paddingRight = '0',
                wspBtnEl.style.paddingRight = '0'
            )
    }, [isModalVisible])
    
    return (
        <>
        <button
            type='button'
            className=
                {
                    mainImg === true ?
                        `w-40 mt-[.1rem] md:mt-2 drop-shadow-sm cursor-pointer transition border border-transparent shadow-sm
                        hover:border-zinc-700/[45%] hover:shadow hover:drop-shadow focus:border-zinc-700/[45%]
                        focus:shadow focus:drop-shadow rounded`
                    :
                        `w-20 mt-[.1rem] md:mt-2 drop-shadow-sm cursor-pointer transition border border-transparent shadow-sm
                        hover:border-zinc-700/[45%] hover:shadow hover:drop-shadow focus:border-zinc-700/[45%]
                        focus:shadow focus:drop-shadow rounded`
                }
            onClick={() => openModal()}
        >
            <img
                
                src={img}
                alt={product.name}
                className='block w-full rounded drop-shadow-sm aspect-square object-cover'
            />
        </button>
        <dialog
            ref={dialogRef}
            className='absolute w-full self-center ml-[1.21rem] md:ml-6 bg-transparent overflow-x-hidden'
            onClick={(e) => closeModal(e)}
        >
            <div className='bg-white shadow-sm drop-shadow-sm w-72 md:w-96 rounded mx-auto'>
                <img
                    
                    src={img}
                    alt={product.name}
                    className='block w-full rounded aspect-square object-contain'
                />
            </div>
        </dialog>
        </>
    )
};

export default ItemImg;
