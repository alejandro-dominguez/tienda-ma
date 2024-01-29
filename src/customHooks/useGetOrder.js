import {
    useEffect,
    useState
} from 'react';
import {
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetOrder = ( id ) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ order, setOrder ] = useState({})
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const docRef = doc(db, 'orders', id)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setOrder({ ...docSnap.data(), id: docSnap.id })
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

    return [ order, error, loading ]
};

export default useGetOrder;
