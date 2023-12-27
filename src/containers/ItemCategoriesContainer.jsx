import { useNavigate, useParams } from 'react-router-dom';
import { useGetSubcategories } from '../customHooks';

const ItemCategoriesContainer = () => {
    const { categoryId } = useParams()
    const [ subcategories, error, loading ] = useGetSubcategories(categoryId)
    const navigate = useNavigate()
    
    return (
        <div>
{/*             {
                subcategories.map((subcategoryId, i) => {
                    <span
                        key={i}
                        className='asdfas'
                        onClick={navigate(`/${categoryId}/${subcategoryId}`)}
                    >
                        {subcategoryId}
                    </span>
                })
            } */}
        </div>
    )
};

export default ItemCategoriesContainer;
