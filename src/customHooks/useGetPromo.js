import {
    useState,
    useEffect
} from 'react';
import {
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetPromo = () => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ promo, setPromo ] = useState({})

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const docRef = doc(db, 'promos', import.meta.env.VITE_FIREBASE_PROMO_ID)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setPromo({ ...docSnap.data(), id: docSnap.id })
                    setLoading(false)
                }
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
