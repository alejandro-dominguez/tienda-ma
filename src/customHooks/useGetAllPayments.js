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

const useGetAllPayments = () => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ payments, setPayments ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let q = query(collection(db, 'payments'))
                const querySnapshot = await getDocs(q)
                const firebasePayments = []
                querySnapshot.forEach((doc) => {
                    firebasePayments.push({...doc.data(), id: doc.id})
                })
                setPayments(firebasePayments)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return [ payments, error, loading ]
};

export default useGetAllPayments;
