import { useRef } from 'react';

const ItemMainImg = ({ product }) => {
    const dialogRef = useRef()

    const openModal = () => {
        dialogRef.current.showModal()
    }

    const closeModal = (e) => {
        if (e.currentTarget === e.target) {
            dialogRef.current.close()
        }
    }
    
    return (
        <>
        <button
            type='button'
            className='w-40 mt-[.1rem] md:mt-2 drop-shadow cursor-pointer transition-shadow hover:shadow hover:drop-shadow'
            onClick={() => openModal()}
        >
            <img
                src={product.img}
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
                    src={product.img}
                    alt={product.name}
                    className='block w-full rounded aspect-square object-contain'
                />
            </div>
        </dialog>
        </>
    )
};

export default ItemMainImg;
