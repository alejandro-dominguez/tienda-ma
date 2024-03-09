import {
    useEffect,
    useState
} from 'react';
import {
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetPayment = ( id ) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ payment, setPayment ] = useState({})
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const docRef = doc(db, 'payments', id)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setPayment({ ...docSnap.data(), id: docSnap.id })
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

    return [ payment, error, loading ]
};

export default useGetPayment;
