import {
    useContext,
    useState,
    useEffect
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import { FaCircleXmark } from 'react-icons/fa6';

const EditProductModal = ({
    product,
    setShowEditItemModal,
    cardRef
}) => {

    const closeModal = () => {
        setShowEditItemModal(false)
        cardRef.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
        <div
            className='fixed top-0 left-0 w-full h-full bg-black/30 z-40'
            onClick={() => closeModal()}
        />
        <div className='absolute top-5 left-0 w-full h-full flex flex-col items-center text-center'>
            <div className='relative flex flex-col items-center gap-4 py-6 bg-white rounded shadow-sm drop-shadow-sm z-50'>
                asdasdas
            </div>
        </div>
        </>
    )
};

export default EditProductModal;
