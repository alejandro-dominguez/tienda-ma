import {
    useEffect,
    useState
} from 'react';
import {
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetWholesalerMessage = ( id ) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ wholesalerMessage, setWholesalerMessage ] = useState({})
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const docRef = doc(db, 'wholesalers', id)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setWholesalerMessage({ ...docSnap.data(), id: docSnap.id })
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

    return [ wholesalerMessage, error, loading ]
};

export default useGetWholesalerMessage;
