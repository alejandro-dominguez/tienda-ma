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

const useGetSubcategories = (categoryId) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ subcategories, setSubcategories ] = useState([])

    const filterSubcategories = (firebaseSubcategories) => {
        const subcategoriesList = []
        firebaseSubcategories.map(subcategory => {
            return subcategoriesList.push(subcategory.subcategory)
        })
        const filteredSubcategoriesList = [...new Set(subcategoriesList)]
        setSubcategories(filteredSubcategoriesList)
        setLoading(false)
    }
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let q = query(collection(db, 'subcategories'), where('category', '==', categoryId))
                const querySnapshot = await getDocs(q)
                const firebaseSubcategories = []
                querySnapshot.forEach((doc) => {
                    firebaseSubcategories.push({...doc.data(), id: doc.id})
                })
                filterSubcategories(firebaseSubcategories)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [categoryId])

    return [ subcategories, error, loading ]
};

export default useGetSubcategories;
