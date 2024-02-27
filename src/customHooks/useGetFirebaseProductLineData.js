import {
    useState,
    useEffect
} from 'react';
import {
    collection,
    query,
    where,
    getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetFirebaseProductLineData = (productLineId) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const q = query(collection(db, 'products'), where('productLine', '==', productLineId))
                const querySnapshot = await getDocs(q)
                const firebaseProducts = []
                querySnapshot.forEach((doc) => {
                    firebaseProducts.push({...doc.data(), id: doc.id})
                })
                setData(firebaseProducts)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [productLineId])

    return [ data, error, loading ]
};

export default useGetFirebaseProductLineData;
