import {
    doc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';

const EditProductFeatureForm = ({
    product,
    setActiveToast,
    setErrorToast
}) => {
    const updateInactiveProduct = async (id) => {
        try {
            const docRef = doc(db, 'products', id)
            await updateDoc(docRef,
                {
                    featured: true
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const updateActiveProduct = async (id) => {
        try {
            const docRef = doc(db, 'products', id)
            await updateDoc(docRef,
                {
                    featured: false
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    return (
        <div className='flex flex-col pt-3 pb-5 px-4 sm:px-8 shadow-sm drop-shadow-sm bg-white max-w-sm mx-auto'>
        {
            product.featured !== true ?
                <>
                <h3 className='text-sm font-bold mt-2'>
                    Este producto no se encuentra destacado
                </h3>
                <button
                    type='button'
                    className='mt-6 px-[.8rem] py-2 bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                    ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 leading-[1.1rem] text-start w-fit self-center'
                    onClick={() => updateInactiveProduct(product.id)}
                >
                    <span className='tracking-wider text-[.8rem] font-Raleway'>
                        Destacar producto
                    </span>
                </button>
                </>
            :
                <button
                    type='button'
                    className='mt-[.6rem] px-[.8rem] py-2 bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                    ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 leading-[1.1rem] text-start w-fit self-center'
                    onClick={() => updateActiveProduct(product.id)}
                >
                    <span className='tracking-wider text-[.8rem] font-Raleway'>
                        No Destacar producto
                    </span>
                </button>
        }
        </div>
    )
};

export default EditProductFeatureForm;
