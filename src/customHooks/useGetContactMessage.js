import {
    useEffect,
    useState
} from 'react';
import {
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetBlogArticle = ( id ) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ message, setMessage ] = useState({})
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const docRef = doc(db, 'messages', id)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setMessage({ ...docSnap.data(), id: docSnap.id })
                    setLoading(false)
                }
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [id])

    return [ message, error, loading ]
};

export default useGetBlogArticle;
