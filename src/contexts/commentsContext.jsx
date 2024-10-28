import {
    useEffect,
    createContext,
    useState
} from 'react';
import {
    collection,
    query,
    getDocs,
    orderBy
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
    const [ errorComments, setErrorComments ] = useState('')
    const [ loadingComments, setLoadingComments ] = useState(false)
    const [ comments, setComments ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingComments(true)
                const collectionRef = collection(db, 'comments')
                const q = query(collectionRef, orderBy('dateFilter', 'desc'))
                const querySnapshot = await getDocs(q)
                const firebaseComments = []
                querySnapshot.forEach((doc) => {
                    firebaseComments.push({...doc.data(), id: doc.id})
                })
                setComments(firebaseComments)
                localStorage.setItem('commentsData', JSON.stringify(firebaseComments))
                setLoadingComments(false)
            } catch (error) {
                setErrorComments(error.message)
                setLoadingComments(false)
            } finally {
                setLoadingComments(false)
            }
        })()
    }, [])

    return (
        <CommentsContext.Provider
            value={{
                comments,
                errorComments,
                loadingComments
            }}
        >
            {children}
        </CommentsContext.Provider>
    )
};

export default CommentsProvider;
