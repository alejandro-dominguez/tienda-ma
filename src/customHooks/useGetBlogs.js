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
    const [ errorBlogs, setErrorBlogs ] = useState('')
    const [ loadingBlogs, setLoadingBlogs ] = useState(false)
    const [ blogs, setBlogs ] = useState({})
    
    useEffect(() => {
        (async () => {
            try {
                setLoadingBlogs(true)
                let q = query(collection(db, 'blogs'))
                const querySnapshot = await getDocs(q)
                const firebaseBlogs = []
                querySnapshot.forEach((doc) => {
                    firebaseBlogs.push({...doc.data(), id: doc.id})
                })
                setBlogs(firebaseBlogs)
                setLoadingBlogs(false)
            } catch (error) {
                setErrorBlogs(error.message)
                setLoadingBlogs(false)
            } finally {
                setLoadingBlogs(false)
            }
        })()
    }, [])

    return [ blogs, errorBlogs, loadingBlogs ]
};

export default useGetBlogs;
