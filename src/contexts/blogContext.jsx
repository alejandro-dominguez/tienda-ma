import {
    useEffect,
    createContext,
    useState
} from 'react';
import {
    collection,
    query,
    getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [ errorBlogs, setErrorBlogs ] = useState('')
    const [ loadingBlogs, setLoadingBlogs ] = useState(false)
    const [ blogs, setBlogs ] = useState({})

    useEffect(() => {
        (async () => {
            try {
                setLoadingBlogs(true)
                const q = query(collection(db, 'blogs'))
                const querySnapshot = await getDocs(q)
                const firebaseBlogs = []
                querySnapshot.forEach((doc) => {
                    firebaseBlogs.push({...doc.data(), id: doc.id})
                })
                setBlogs(firebaseBlogs)
                localStorage.setItem('blogsData', JSON.stringify(firebaseBlogs))
                setLoadingBlogs(false)
            } catch (error) {
                setErrorBlogs(error.message)
                setLoadingBlogs(false)
            } finally {
                setLoadingBlogs(false)
            }
        })()
    }, [])

    return (
        <BlogContext.Provider
            value={{
                blogs,
                errorBlogs,
                loadingBlogs,
            }}
        >
            {children}
        </BlogContext.Provider>
    )
};

export default BlogProvider;
