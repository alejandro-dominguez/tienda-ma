import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetItemDetail = ( id ) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ product, setProduct ] = useState({})
    
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const docRef = doc(db, 'products', id)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setProduct({ ...docSnap.data(), id: docSnap.id })
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

    return [ product, error, loading ]
};

export default useGetItemDetail;
