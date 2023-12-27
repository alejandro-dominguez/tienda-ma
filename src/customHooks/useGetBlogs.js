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

const useGetBlogs = () => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ blogs, setBlogs ] = useState({})
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let q = query(collection(db, 'blogs'))
                const querySnapshot = await getDocs(q)
                const firebaseBlogs = []
                querySnapshot.forEach((doc) => {
                    firebaseBlogs.push({...doc.data(), id: doc.id})
                })
                setBlogs(firebaseBlogs)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return [ blogs, error, loading ]
};

export default useGetBlogs;
