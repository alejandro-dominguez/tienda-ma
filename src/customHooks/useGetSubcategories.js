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
                setSubcategories(firebaseSubcategories)
                setLoading(false)
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
