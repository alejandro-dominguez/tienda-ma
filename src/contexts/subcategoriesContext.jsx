import {
    useState,
    useEffect,
    createContext
} from 'react';
import {
    collection,
    query,
    getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const SubcategoriesContext = createContext();

const SubcategoriesProvider = ({ children }) => {
    const [ errorSubcategories, setErrorSubcategories ] = useState('')
    const [ loadingSubcategories, setLoadingSubcategories ] = useState(false)
    const [ subcategories, setSubcategories ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingSubcategories(true)
                const q = query(collection(db, 'subcategories'))
                const querySnapshot = await getDocs(q)
                const firebaseSubcategories = []
                querySnapshot.forEach((doc) => {
                    firebaseSubcategories.push({...doc.data(), id: doc.id})
                })
                setSubcategories(firebaseSubcategories)
            } catch (error) {
                setErrorSubcategories(error.message)
                setLoadingSubcategories(false)
            } finally {
                setLoadingSubcategories(false)
            }
        })()
    }, [])

    return (
        <SubcategoriesContext.Provider
            value={{
                subcategories,
                errorSubcategories,
                loadingSubcategories
            }}
        >
            {children}
        </SubcategoriesContext.Provider>
    )
};

export default SubcategoriesProvider;
