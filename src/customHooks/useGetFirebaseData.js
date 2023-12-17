import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetFirebaseData = ( categoryId ) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let q
                if (categoryId === undefined) {
                    q = query(collection(db, 'products'), where('featured', '==', true))
                } else {
                    q = query(collection(db, 'products'), where('category', '==', categoryId))
                }
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
    }, [categoryId])

    return [ data, error, loading ]
};

export default useGetFirebaseData;
