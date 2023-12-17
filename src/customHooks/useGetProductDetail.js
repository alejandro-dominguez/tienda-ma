import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetProductDetail = () => {
    const { id } = useParams()
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ product, setProduct ] = useState({})
    
    useEffect(() => {
        const getProductDetail = async () => {
            try {
                setLoading(true)
                const docRef = doc(db, 'products', id)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setProduct({ ...docSnap.data(), id: docSnap.id })
                } else {
                    console.log("No such document!")
                }
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
        getProductDetail()
    }, [id])

    return [ product, error, loading ]
};

export default useGetProductDetail;
