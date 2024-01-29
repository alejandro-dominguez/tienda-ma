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

const useGetAllOrders = () => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let q = query(collection(db, 'orders'))
                const querySnapshot = await getDocs(q)
                const firebaseOrders = []
                querySnapshot.forEach((doc) => {
                    firebaseOrders.push({...doc.data(), id: doc.id})
                })
                setOrders(firebaseOrders)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return [ orders, error, loading ]
};

export default useGetAllOrders;
