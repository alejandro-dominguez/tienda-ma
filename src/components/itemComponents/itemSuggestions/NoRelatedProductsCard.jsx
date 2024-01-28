import {
    Link,
    useParams
} from 'react-router-dom';
import icon from '/favicon.svg';
import { BiSolidShare } from 'react-icons/bi';

const NoRelatedProductsCard = () => {
    const { categoryId, subcategoryId } = useParams()

    return (
        <div className='grid place-items-center w-full mt-3 gap-2'>
            <Link to={(`/categorias/${categoryId}/${subcategoryId}`)}>
                <div className='grid place-items-center'>
                    <h3 className='font-Raleway font-black drop-shadow-sm tracking-wide text-[.85rem]'>
                        Aún no hay productos relacionados.
                    </h3>
                    <div className='flex flex-col items-center justify-center mt-2'>
                        <BiSolidShare className='block text-red-300 text-[1.5rem]' />
                        <span className='font-bold -mt-1'>
                            volver
                        </span>
                    </div>
                    <div className='w-7 mx-auto mt-5'>
                        <img
                            src={icon}
                            alt='icono tienda ma'
                            className='block w-full'
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default NoRelatedProductsCard;
