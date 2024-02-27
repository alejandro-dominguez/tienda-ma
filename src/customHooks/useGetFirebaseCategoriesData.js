import {
    useState,
    useEffect
} from 'react';
import {
    collection,
    query,
    where,
    getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetFirebaseCategoriesData = (categoryId) => {
    const [ errorCategories, setErrorCategories ] = useState('')
    const [ loadingCategories, setLoadingCategories ] = useState(false)
    const [ data, setData ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingCategories(true)
                const q = query(collection(db, 'products'), where('category', '==', categoryId))
                const querySnapshot = await getDocs(q)
                const firebaseProducts = []
                querySnapshot.forEach((doc) => {
                    firebaseProducts.push({...doc.data(), id: doc.id})
                })
                setData(firebaseProducts)
                setLoadingCategories(false)
            } catch (error) {
                setErrorCategories(error.message)
                setLoadingCategories(false)
            } finally {
                setLoadingCategories(false)
            }
        })()
    }, [categoryId])

    return [ data, errorCategories, loadingCategories ]
};

export default useGetFirebaseCategoriesData;
