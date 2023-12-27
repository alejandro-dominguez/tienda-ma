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

const useGetPromo = () => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ promo, setPromo ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let q = query(collection(db, 'promos'), where('active', '==', true))
                const querySnapshot = await getDocs(q)
                const firebasePromo = []
                querySnapshot.forEach((doc) => {
                    firebasePromo.push({...doc.data(), id: doc.id})
                })
                setPromo(firebasePromo)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return [ promo, error, loading ]
};

export default useGetPromo;
