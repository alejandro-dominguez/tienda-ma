import {
    useState,
    useEffect
} from 'react';
import {
    collection,
    query,
    getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetAllSubcategories = () => {
    const [ errorSubcategories, setErrorSubcategories ] = useState('')
    const [ loadingSubcategories, setLoadingSubcategories ] = useState(false)
    const [ subcategories, setSubcategories ] = useState([])

    const filterSubcategories = (firebaseSubcategories) => {
        const subcategoriesList = []
        firebaseSubcategories.map(subcategory => {
            return subcategoriesList.push(subcategory.subcategory)
        })
        const filteredSubcategoriesList = [...new Set(subcategoriesList)]
        setSubcategories(filteredSubcategoriesList)
        setLoadingSubcategories(false)
    }

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
                filterSubcategories(firebaseSubcategories)
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
