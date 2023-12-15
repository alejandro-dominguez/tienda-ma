import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const { categoryId } = useParams()

    useEffect(() => {
        console.log(categoryId)
    }, [])
    

    return (
        <div className=''>

        </div>
    )
};

export default ItemListContainer;
