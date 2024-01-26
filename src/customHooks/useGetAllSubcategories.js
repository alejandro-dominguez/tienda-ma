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

const useGetAllSubcategories = () => {
    const [ errorSubcategories, setErrorSubcategories ] = useState('')
    const [ loadingSubcategories, setLoadingSubcategories ] = useState(false)
    const [ subcategories, setSubcategories ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingSubcategories(true)
                let q = query(collection(db, 'subcategories'))
                const querySnapshot = await getDocs(q)
                const firebaseSubcategories = []
                querySnapshot.forEach((doc) => {
                    firebaseSubcategories.push({...doc.data(), id: doc.id})
                })
                setSubcategories(firebaseSubcategories)
                setLoadingSubcategories(false)
            } catch (error) {
                setErrorSubcategories(error.message)
                setLoadingSubcategories(false)
            } finally {
                setLoadingSubcategories(false)
            }
        })()
    }, [])

    return [ subcategories, errorSubcategories, loadingSubcategories ]
};

export default useGetAllSubcategories;
