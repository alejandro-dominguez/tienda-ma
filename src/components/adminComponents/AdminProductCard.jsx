import { useNavigate } from 'react-router-dom';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { db } from '../../firebase/config';
import {
    deleteDoc,
    doc,
    updateDoc
} from 'firebase/firestore';
import {
    Toaster,
    toast
} from 'sonner';

const AdminProductCard = ({ prod }) => {
    const navigate = useNavigate()

    const deleteProduct = async (id) => {
        try {
            const docRef = doc(db, 'products', id)
            await deleteDoc(docRef)
            toast.success(
                'Producto eliminado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        } catch (error) {
            toast.error(
                error.message,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    const updateInactiveProduct = async (id) => {
        try {
            const docRef = doc(db, 'products', id)
            await updateDoc(docRef,
                {
                    featured: true
                }
            )
            toast.success(
                'Producto destacado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            } catch (error) {
            toast.error(
                error.message,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
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
            toast.success(
                'Producto no destacado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        } catch (error) {
            toast.error(
                error.message,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    return (
        <div className='p-5 bg-white drop-shadow-sm shadow-sm flex flex-col'>
            <div className='w-40 drop-shadow-sm'>
                <img
                    src={prod.img}
                    alt='imagen de producto'
                    className='block w-full object-cover aspect-video object-center drop-shadow-sm'
                    />
            </div>
            <h3 className='font-black font-Raleway tracking-wide mt-2'>
                {prod.brand} {prod.name}
            </h3>
            <div className='flex flex-col gap-1 mt-auto'>
                <div className='flex items-center gap-4'>
                    <button
                        type='button'
                        className='mt-[.6rem] px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                        ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer'
                        onClick={() => navigate((`/categorias/${prod.category}/${prod.subcategory}/detalle/${prod.id}`))}
                        >
                        <span className='tracking-wider text-[.8rem] font-Raleway'>
                            Ver producto
                        </span>
                    </button>
                    <button
                        type='button'
                        className='mt-[.6rem] px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                        ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer'
                        onClick={() => navigate((`/admin/consola/productos/editar/${prod.id}`))}
                        >
                        <span className='tracking-wider text-[.8rem] font-Raleway'>
                            Editar
                        </span>
                    </button>
                    <BsFillTrash3Fill
                        className='block cursor-pointer text-[1.3rem] mt-2 drop-shadow-sm text-red-500/80'
                        onClick={() => deleteProduct(prod.id)}
                        />
                </div>
                <div>
                    {
                        prod.featured !== true ?
                            <button
                                type='button'
                                className='mt-[.6rem] px-[.8rem] py-2 bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer leading-[1.1rem] text-start'
                                onClick={() => updateInactiveProduct(prod.id)}
                            >
                                <span className='tracking-wider text-[.8rem] font-Raleway'>
                                    Destacar producto
                                </span>
                            </button>
                        :
                            <button
                                type='button'
                                className='mt-[.6rem] px-[.8rem] py-2 bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer leading-[1.1rem] text-start'
                                onClick={() => updateActiveProduct(prod.id)}
                            >
                                <span className='tracking-wider text-[.8rem] font-Raleway'>
                                    No Destacar producto
                                </span>
                            </button>
                    }
                </div>
            </div>
            <Toaster
                richColors
                toastOptions={{
                    className: 'text-center',
                }}
            />
        </div>
    )
};

export default AdminProductCard;
